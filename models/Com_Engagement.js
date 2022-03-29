const mongoose = require('mongoose')

const Com_Engagement_Schema = new mongoose.Schema({
  com_engagement: {
    type: String
  },

  com_engagement_completed: Boolean
})

module.exports = mongoose.model('Com_Engagement', Com_Engagement_Schema)