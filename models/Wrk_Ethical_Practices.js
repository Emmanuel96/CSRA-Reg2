const mongoose = require('mongoose')

const Wrk_Ethical_Practices_Schema = new mongoose.Schema({
  wrk_ethical_practices: {
    type: String
  },

  wrk_ethical_practices_completed: Boolean
})

module.exports = mongoose.model('Wrk_Ethical_Practices', Wrk_Ethical_Practices_Schema)