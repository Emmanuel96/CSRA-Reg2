const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  user_id: {
    type: String,
    // unique: true,  
  },

  contact_person: {
    type: String,  
  },

  organisation_name: {
    type: String,  
  },

  organisation_address: {
    type: String,  
  },

  organisation_nationality: {
    type: String,  
  },

  postal_code: {
    type: String,  
  },

  email_address: {
    type: String,
    // unique: true
  },

  mobile_number: {
    type: String,  
  },

  telephone_number: {
    type: String,  
  },

  // organisation_size: {
  //   type: String,
  //   possibleValues: [
  //     'soleTrader',
  //     'small',
  //     'smallToMedium',
  //     'medium',
  //     'mediumToLarge',
  //     'large',
  //     'large_501',
  //     'large_1001',
  //     'large_5001',
  //     'large_10000'
  //   ]
  // },

  // organisation_turnover: {
  //   type: String,
  //   possibleValues: [
  //     'small',
  //     'medium',
  //     'large'
  //   ]
  // },

  company_details_completed: Boolean,

});

module.exports = mongoose.model('Form', FormSchema);