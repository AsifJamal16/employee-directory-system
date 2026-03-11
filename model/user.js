const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/asifansari");

const userSchema = mongoose.Schema({
  image: String,
  username: String,
  email: String,
  message: String,
});

module.exports = mongoose.model('user', userSchema);