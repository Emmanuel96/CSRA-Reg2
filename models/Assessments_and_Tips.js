const mongoose = require('mongoose')

const Assessments_and_Tips_Schema = new mongoose.Schema({
  assessments_and_tips_completed: Boolean
})

module.exports = mongoose.model('Assessments_and_Tips', Assessments_and_Tips_Schema)