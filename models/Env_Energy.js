const mongoose = require('mongoose')

const Env_Energy_Schema = new mongoose.Schema({
  env_energy: {
    type: String
  },

  env_energy_completed: Boolean
})

module.exports = mongoose.model('Env_Energy', Env_Energy_Schema)