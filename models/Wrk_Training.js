const mongoose = require('mongoose')

const Wrk_Training_Schema = new mongoose.Schema({
  wrk_training: {
    type: String
  },

  wrk_training_completed: Boolean
})

module.exports = mongoose.model('Wrk_Training', Wrk_Training_Schema)