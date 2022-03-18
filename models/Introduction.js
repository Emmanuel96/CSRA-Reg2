const mongoose = require('mongoose')

const Introduction_Schema = new mongoose.Schema({
  introduction: {
    type: String
  },
  
  introduction_completed: Boolean
})

module.exports = mongoose.model('Introduction', Introduction_Schema)