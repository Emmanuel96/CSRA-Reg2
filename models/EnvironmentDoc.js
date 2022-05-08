const mongoose = require('mongoose')

const EnvironmentDocSchema = new mongoose.Schema({
  fileName: String, 
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamp: true})

module.exports = mongoose.model('EnvironmentDoc', EnvironmentDocSchema)