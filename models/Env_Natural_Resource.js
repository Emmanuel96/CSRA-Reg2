const mongoose = require('mongoose')

const Env_Natural_Resource_Schema = new mongoose.Schema({
  env_natural_resource: {
    type: String,
  },

  env_natural_resource_completed: Boolean
})

module.exports = mongoose.model('Env_Natural_Resource', Env_Natural_Resource_Schema)