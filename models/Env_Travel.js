const mongoose = require('mongoose')

const Env_Travel_Schema = new mongoose.Schema({
  env_travel: {
    type: String,
  },

  env_travel_completed: Boolean
})

module.exports = mongoose.model('Env_Travel', Env_Travel_Schema)