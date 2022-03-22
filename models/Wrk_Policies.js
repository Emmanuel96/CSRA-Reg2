const mongoose = require('mongoose')

const Wrk_Policies_Schema = new mongoose.Schema({
  wrk_policies: {
    type: String
  },

  wrk_policies_completed: Boolean
})

module.exports = mongoose.model('Wrk_Policies', Wrk_Policies_Schema)