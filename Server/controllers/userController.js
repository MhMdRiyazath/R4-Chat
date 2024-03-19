const express = require("express");
const UserModel = require("../models/userModel");
const generateToken = require("../Config/generateToken");

const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  //validate the fields
  if (!name || !email || !password) {
    res.send(400);
    throw new Error("Please fill all the fields");
  }

  //check if the user already exists
  if (await UserModel.findOne({ email })) {
    res.send(400);
    throw new Error("User already exists");
  }

  //user name Already taken
  if (await UserModel.findOne({ name })) {
    res.send(400);
    throw new Error("Username already taken");
  }

  //create the user

  const user = await UserModel.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });

    
  } else {
    res.status(400);
    throw new Error("cannot create user");
  }
};

const loginController = async (req, res) => {
  const { name, password } = req.body;

  const user = await UserModel.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid name or password");
  }
};

const fetchUsersController = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } }, // Add other fields if necessary
          ],
        }
      : {};

    const users = await UserModel.find({ ...keyword, _id: { $ne: req.user._id } });

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  registerController,
  loginController,
  fetchUsersController,
};
