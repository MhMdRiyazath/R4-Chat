const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
  chatName: {
    type: String,
  },

  isGroupChat: {
    type: Boolean,
  },

  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },

  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
{
  timeStamps: true,
}

);

module.exports = mongoose.model("Chat", chatSchema);