const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();//initialize express server

app.get('/', (req, res) => {
    res.send('Api is running...');
})

dotenv.config();//initialize dotenv 

//connect to the database
const connectDB = async()=>{
    try{
    const connect =await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
}catch(err){
    console.log(err);
}
}

connectDB();//call the connectDB function

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});



