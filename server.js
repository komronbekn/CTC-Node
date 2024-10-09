// server.js or index.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./Route/users');

const ApiUrl = express();

connectDB();

ApiUrl.use(cors());
ApiUrl.use(express.json());
ApiUrl.use('/users', userRoutes);

ApiUrl.listen(5001, () => {
    console.log('Your API is running on port 5001');
});
