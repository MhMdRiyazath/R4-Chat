const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const cors = require('cors');
const app = express(); //initialize express server
app.use(express.json()); //parse the json data

app.use(cors({ origin: "http://localhost:5173" })); //allow all cors requests
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

app.use("/user",userRoutes); //use the userRoutes
app.use("/chat", chatRoutes); //use the chatRoutes
app.use("/message", messageRoutes); //use the messageRoutes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
