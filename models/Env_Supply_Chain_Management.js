const mongoose = require('mongoose')

const Env_Supply_Chain_Schema = new mongoose.Schema({
  env_supply_chain_management: {
    type: String,
  },

  env_supply_chain_management_completed: Boolean
})

module.exports = mongoose.model('Env_Supply_Chain_Management', Env_Supply_Chain_Schema)