const mongoose = require('mongoose')

const Phil_Charitable_Involvement_Schema = new mongoose.Schema({
  phil_charitable_involvement: {
    type: String
  },

  phil_charitable_involvement_completed: Boolean
})

module.exports = mongoose.model('Phil_Charitable_Involvement', Phil_Charitable_Involvement_Schema)