const mongoose = require('mongoose')

const WorkplaceDocSchema = new mongoose.Schema({
  fileName: String, 
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamp: true})

module.exports = mongoose.model('WorkplaceDoc', WorkplaceDocSchema)