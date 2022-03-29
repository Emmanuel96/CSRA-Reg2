const mongoose = require('mongoose')

const Com_Projects_And_Groups_Schema = new mongoose.Schema({
  com_projects_and_groups: {
    type: String
  },

  com_projects_and_groups_completed: Boolean
})

module.exports = mongoose.model('Com_Projects_And_Groups', Com_Projects_And_Groups_Schema)