const mongoose = require('mongoose')

const Com_Local_Issues_Schema = new mongoose.Schema({
  com_local_issues: {
    type: String
  },

  com_local_issues_completed: Boolean
})

module.exports = mongoose.model('Com_Local_Issues', Com_Local_Issues_Schema)