const mongoose = require('mongoose')

const Phil_Financial_And_Kind_Gifts_Schema = new mongoose.Schema({
  phil_financial_and_kind_gifts: {
    type: String
  },

  phil_financial_and_kind_gifts_completed: Boolean
})

module.exports = mongoose.model('Phil_Financial_And_Kind_Gifts', Phil_Financial_And_Kind_Gifts_Schema)