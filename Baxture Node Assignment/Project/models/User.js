const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hobbies: {
    type: [String],
    default: []
  }
});

//model
const User = mongoose.model('User', userSchema);

module.exports = User;
