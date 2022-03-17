const mongoose = require('mongoose')

const Env_Energy_Schema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },

  env_energy: {
    type: String
  },

  completed: Boolean
})

module.exports = mongoose.model('Env_Energy', Env_Energy_Schema)