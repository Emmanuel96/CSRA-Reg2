const mongoose = require('mongoose')

const Env_Supply_Chain_Schema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },

  env_supply_chain_management: {
    type: String,
    minlength: 256
  },

  completed: Boolean
})

module.exports = mongoose.model('Env_Supply_Chain_Management', Env_Supply_Chain_Schema)