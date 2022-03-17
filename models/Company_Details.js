const mongoose = require('mongoose');

const Company_Details_Schema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,  
  },

  contact_person: {
    type: String  
  },

  organisation_name: {
    type: String  
  },

  organisation_address: {
    type: String  
  },

  organisation_nationality: {
    type: String  
  },

  postal_code: {
    type: String,  
  },

  email_address: {
    type: String,
    unique: true
  },

  mobile_number: {
    type: Number
  },

  telephone_number: {
    type: Number,
  },

  organisation_size: {
    type: String,
    enumValues: [
      'soleTrader',
      'small',
      'smallToMedium',
      'medium',
      'mediumToLarge',
      'large',
      'large_501',
      'large_1001',
      'large_5001',
      'large_10000'
    ]
  },

  organisation_turnover: {
    type: String,
    enumValues: [
      'small',
      'medium',
      'large'
    ]
  },

  company_details_completed: Boolean,

});

module.exports = mongoose.model('Company_Details', Company_Details_Schema);