const mongoose = require('mongoose')

const Env_Waste_Schema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },

  env_waste: {
    type: String,
    minlength: 256
  },

  completed: Boolean
})

module.exports = mongoose.model('Env_Waste', Env_Waste_Schema)