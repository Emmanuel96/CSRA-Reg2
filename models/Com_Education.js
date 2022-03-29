const mongoose = require('mongoose')

const Com_Education_Schema = new mongoose.Schema({
  com_education: {
    type: String
  },

  com_education_completed: Boolean
})

module.exports = mongoose.model('Com_Education', Com_Education_Schema)