const mongoose = require('mongoose')

const CommunityDocSchema = new mongoose.Schema({
  fileName: String, 
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamp: true})

module.exports = mongoose.model('CommunityDoc', CommunityDocSchema)