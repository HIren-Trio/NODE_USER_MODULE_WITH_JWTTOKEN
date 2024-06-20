const mongoose = require('mongoose');
const fields = require('./Field');

const userSchema = new mongoose.Schema(fields);
const User = mongoose.model('User', userSchema);

module.exports = { User };