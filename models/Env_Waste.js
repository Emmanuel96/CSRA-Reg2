const mongoose = require('mongoose')

const Env_Waste_Schema = new mongoose.Schema({
  env_waste: {
    type: String,
  },

  env_waste_completed: Boolean
})

module.exports = mongoose.model('Env_Waste', Env_Waste_Schema)