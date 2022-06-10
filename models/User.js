const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  application: {
    type: String,
    ref: 'Application'
  }
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', UserSchema);