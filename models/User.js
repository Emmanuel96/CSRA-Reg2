const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { 
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  resetPasswordToken: String,
  resetPasswordExpires: Number
});

module.exports = mongoose.model('User', UserSchema);