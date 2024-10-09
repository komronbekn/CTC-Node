// models/user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Password: { type: String, required: true },
    Coins: { type: Number, default: 0 },
    coinLimit: { type: Number, default: 1000 },
    maxCoinLimit: { type: Number, default: 1000 }
});

module.exports = mongoose.model('User', UserSchema); // Use 'User' instead of 'Product'
