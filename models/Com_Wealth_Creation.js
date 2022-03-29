const mongoose = require('mongoose')

const Com_Wealth_Creation_Schema = new mongoose.Schema({
  com_wealth_creation: {
    type: String
  },

  com_wealth_creation_completed: Boolean
})

module.exports = mongoose.model('Com_Wealth_Creation', Com_Wealth_Creation_Schema)