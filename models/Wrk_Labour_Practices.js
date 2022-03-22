const mongoose = require('mongoose')

const Wrk_Labour_Practices_Schema = new mongoose.Schema({
  wrk_labour_practices: {
    type: String
  },

  wrk_labour_practices_completed: Boolean
})

module.exports = mongoose.model('Wrk_Labour_Practices', Wrk_Labour_Practices_Schema)