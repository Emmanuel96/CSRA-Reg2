const mongoose = require('mongoose')

const PhilanthropyDocSchema = new mongoose.Schema({
  fileName: String, 
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamp: true})

module.exports = mongoose.model('PhilanthropyDoc', PhilanthropyDocSchema)