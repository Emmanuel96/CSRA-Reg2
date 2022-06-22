const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  owner: {
    type: String,
    ref: 'User'
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

  introduction: {
    type: String
  },

  introduction_completed: Boolean,

  env_energy: {
    type: String
  },

  env_energy_completed: Boolean,

  env_natural_resource: {
    type: String,
  },

  env_natural_resource_completed: Boolean,

  env_travel: {
    type: String,
  },

  env_travel_completed: Boolean,

  env_supply_chain_management: {
    type: String,
  },

  env_supply_chain_management_completed: Boolean,

  env_waste: {
    type: String,
  },

  env_waste_completed: Boolean,

  wrk_training: {
    type: String
  },

  wrk_training_completed: Boolean,

  wrk_labour_practices: {
    type: String
  },

  wrk_labour_practices_completed: Boolean,

  wrk_ethical_practices: {
    type: String
  },

  wrk_ethical_practices_completed: Boolean,

  wrk_governance: {
    type: String
  },

  wrk_governance_completed: Boolean,

  wrk_policies: {
    type: String
  },

  wrk_policies_completed: Boolean,

  com_engagement: {
    type: String
  },

  com_engagement_completed: Boolean,

  com_local_issues: {
    type: String
  },

  com_local_issues_completed: Boolean,

  com_wealth_creation: {
    type: String
  },

  com_wealth_creation_completed: Boolean,

  com_projects_and_groups: {
    type: String
  },

  com_projects_and_groups_completed: Boolean,

  com_education: {
    type: String
  },

  com_education_completed: Boolean,

  phil_charitable_involvement: {
    type: String
  },

  phil_charitable_involvement_completed: Boolean,

  phil_volunteering: {
    type: String
  },

  phil_volunteering_completed: Boolean,

  phil_pro_bono: {
    type: String
  },

  phil_pro_bono_completed: Boolean,

  phil_fund_raising: {
    type: String
  },

  phil_fund_raising_completed: Boolean,

  phil_financial_and_kind_gifts: {
    type: String
  },

  phil_financial_and_kind_gifts_completed: Boolean,

  phil_other_information: {
    typer: String
  },

  phil_future_planning: {
    typer: String
  },

  assessments_and_tips_completed: Boolean,

  finished: Boolean,

  scoredByAssessors: Boolean
});

ApplicationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Application', ApplicationSchema);