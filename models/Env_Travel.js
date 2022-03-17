const mongoose = require('mongoose')

const Env_Travel_Schema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },

  env_travel: {
    type: String,
    minlength: 256
  },

  completed: Boolean
})

module.exports = mongoose.model('Env_Travel', Env_Travel_Schema)