const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");

const app = express(); //initialize express server

app.use(express.json()); //parse the json data

app.use(cors({ origin: "*" })); //allow all cors requests
dotenv.config(); //initialize dotenv

//connect to the database
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
connectDB(); //call the connectDB function

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/user", userRoutes); //use the userRoutes
app.use("/chat", chatRoutes); //use the chatRoutes
app.use("/message", messageRoutes); //use the messageRoutes

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, console.log("Server is running on port 3000"));

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
  pingTimeout: 60000,
});

io.on("connection", (socket) => {
  console.log("Socket connected : ", socket.id);

  socket.on("setup", (user) => {
    socket.join(user._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
  });

  socket.on("new message", (newMessageStatus) => {
    console.log("passing masage",newMessageStatus);
    var chat = newMessageStatus.chat;
    if (!chat.users) {
      return console.log("Chat.users not defined");
    }
    chat.user.forEach((user) => {
      if (user._id === newMessageStatus.sender._id) return;
      socket.in(user._id).emit("message received", newMessageStatus);
    });
  });
});
