const mongoose = require('mongoose')

const Phil_Fund_Raising_Schema = new mongoose.Schema({
  phil_fund_raising: {
    type: String
  },

  phil_fund_raising_completed: Boolean
})

module.exports = mongoose.model('Phil_Fund_Raising', Phil_Fund_Raising_Schema)