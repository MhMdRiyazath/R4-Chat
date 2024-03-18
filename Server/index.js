const express = require('express');
const dotenv = require('dotenv');

const app = express();//initialize express server

app.get('/', (req, res) => {
    res.send('Api is running...');
})

dotenv.config();//initialize dotenv 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});



