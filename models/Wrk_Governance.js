const mongoose = require('mongoose')

const Wrk_Governance_Schema = new mongoose.Schema({
  wrk_governance: {
    type: String
  },

  wrk_governance_completed: Boolean
})

module.exports = mongoose.model('Wrk_Governance', Wrk_Governance_Schema)