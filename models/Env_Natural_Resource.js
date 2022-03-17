const mongoose = require('mongoose')

const Env_Natural_Resource_Schema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },

  env_natural_resource: {
    type: String,
    minlength: 256
  },

  completed: Boolean
})

module.exports = mongoose.model('Env_Natural_Resource', Env_Natural_Resource_Schema)