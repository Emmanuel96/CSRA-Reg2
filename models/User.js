const mongoose = require('mongoose');
const url = process.env.DATABASE_URL

mongoose.connect(url)
  .then(() => {
    console.log('MongoDB Connected Successfully');
  })  
  .catch((error) => {
  console.log('Error connecting to MongoDB:', error.message)
})

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