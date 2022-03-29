const mongoose = require('mongoose')

const Phil_Volunteering_Schema = new mongoose.Schema({
  phil_volunteering: {
    type: String
  },

  phil_volunteering_completed: Boolean
})

module.exports = mongoose.model('Phil_Volunteering', Phil_Volunteering_Schema)