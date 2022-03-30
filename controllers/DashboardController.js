const Company_Details = require("../models/Company_Details")
const Introduction = require("../models/Introduction")

const Env_Energy = require('../models/Env_Energy')
const Env_Natural_Resource = require('../models/Env_Natural_Resource')
const Env_Travel = require('../models/Env_Travel')
const Env_Supply_Chain_Management = require('../models/Env_Supply_Chain_Management')
const Env_Waste = require('../models/Env_Waste')

const Wrk_Training = require('../models/Wrk_Training')
const Wrk_Labour_Practices = require('../models/Wrk_Labour_Practices')
const Wrk_Ethical_Practices = require('../models/Wrk_Ethical_Practices')
const Wrk_Governance = require("../models/Wrk_Governance")
const Wrk_Policies = require("../models/Wrk_Policies")

const Com_Engagement = require("../models/Com_Engagement")
const Com_local_issues = require("../models/Com_Local_Issues")
const Com_Wealth_Creation = require("../models/Com_Wealth_Creation")
const Com_Projects_And_Groups = require("../models/Com_Projects_And_Groups")
const Com_Education = require("../models/Com_Education")

const Phil_Charitable_Involvement = require("../models/Phil_Charitable_Involvement")
const Phil_Volunteering = require("../models/Phil_Volunteering")
const Phil_Pro_Bono = require("../models/Phil_Pro_Bono")
const Phil_Fund_Raising = require("../models/Phil_Fund_Raising")
const Phil_Financial_And_Kind_Gifts = require("../models/Phil_Financial_And_Kind_Gifts")
const Assessments_and_Tips = require("../models/Assessments_and_Tips")

//GET CONTROLLERS

exports.get_company_details = (req, res) => {
  res.render('dashboard/company_details')
}

exports.get_application_introduction = (req, res) => {
  res.render('dashboard/application_introduction')
}

exports.get_environment_energy = (req, res) => {
  res.render('dashboard/environment_energy')
}

exports.get_environment_natural_resource = (req, res) => {
  res.render('dashboard/environment_natural_resource')
}

exports.get_environment_travel = (req, res) => {
  res.render('dashboard/environment_travel')
}

exports.get_environment_supply_chain_management = (req, res) => {
  res.render('dashboard/environment_supply_chain_management')
}

exports.get_environment_waste = (req, res) => {
  res.render('dashboard/environment_waste')
}

exports.get_environment_supporting_documents = (req, res) => {
  res.render('dashboard/environment_supporting_documents')
}

exports.get_assessment_and_tips = (req, res) => {
  res.render('dashboard/assessment_and_tips')
}

exports.get_workplace_training = (req, res) => {
  res.render('dashboard/workplace_training')
}

exports.get_workplace_labour_practices = (req, res) => {
  res.render('dashboard/workplace_labour_practices')
}

exports.get_workplace_ethical_practises = (req, res) => {
  res.render('dashboard/workplace_ethical_practises')
}

exports.get_workplace_governance = (req, res) => {
  res.render('dashboard/workplace_governance')
}

exports.get_workplace_policies = (req, res) => {
  res.render('dashboard/workplace_policies')
}

exports.get_workplace_supporting_documents = (req, res) => {
  res.render('dashboard/workplace_supporting_documents')
}

exports.get_community_engagement = (req, res) => {
  res.render('dashboard/community_engagement')
}

exports.get_community_local_issues = (req, res) => {
  res.render('dashboard/community_local_issues')
}

exports.get_community_wealth_creation = (req, res) => {
  res.render('dashboard/community_wealth_creation')
}

exports.get_community_projects_and_groups = (req, res) => {
  res.render('dashboard/community_projects_and_groups')
}

exports.get_community_education = (req, res) => {
  res.render('dashboard/community_education')
}

exports.get_community_supporting_documents = (req, res) => {
  res.render('dashboard/community_supporting_documents')
}

exports.get_philanthropy_charitable_involvement = (req, res) => {
  res.render('dashboard/philanthropy_charitable_involvement')
}

exports.get_philanthropy_volunteering = (req, res) => {
  res.render('dashboard/philanthropy_volunteering')
}

exports.get_philanthropy_pro_bono = (req, res) => {
  res.render('dashboard/philanthropy_pro_bono')
}

exports.get_philanthropy_fund_raising = (req, res) => {
  res.render('dashboard/philanthropy_fund_raising')
}

exports.get_philanthropy_financial_and_kind_gifts = (req, res) => {
  res.render('dashboard/philanthropy_financial_and_kind_gifts')
}

exports.get_philanthropy_supporting_documents = (req, res) => {
  res.render('dashboard/philanthropy_supporting_documents')
}

//PUT CONTROLLERS

exports.put_company_details = async function(req, res, next){
  var body = req.body

  const company_details = {
    contact_person: body.contact_person,
    organisation_name: body.organisation_name,
    organisation_address: body.organisation_address,
    organisation_nationality: body.organisation_nationality,
    postal_code: body.postal_code,
    email_address: body.email_address,
    mobile_number: body.mobile_number,
    telephone_number: body.telephone_number,
    organisation_size: body.organisation_size,
    organisation_turnover: body.organisation_turnover,
    company_details_completed: true
  }

  Company_Details.findByIdAndUpdate(
    req.params.id, 
    company_details, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated company_details"
    })
    console.log("Successfully updated company_details")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update company_details",
      error: error
    })
    console.log("Failed to update company_details")
  })
}

exports.put_application_introduction = async function(req, res, next){
  var body = req.body

  const introduction = {
    introduction: body.introduction,
    introduction_completed: true
  }

  Introduction.findByIdAndUpdate(
    req.params.id, 
    introduction, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated application_introduction"
    })
    console.log("Successfully updated application_introduction")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update application_introduction",
      error: error
    })
    console.log("Failed to update application_introduction")
  })
}

exports.put_environment_energy = async function(req, res, next){
  var body = req.body

  const env_energy = {
    env_energy: body.env_energy,
    env_energy_completed: true
  }

  Env_Energy.findByIdAndUpdate(
    req.params.id, 
    env_energy, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated env_energy"
    })
    console.log("Successfully updated env_energy")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update env_energy",
      error: error
    })
    console.log("Failed to update env_energy")
  })
}

exports.put_environment_natural_resource = async function(req, res, next){
  var body = req.body

  const env_natural_resource = {
    env_natural_resource: body.env_natural_resource,
    env_natural_resource_completed: true
  }

  Env_Natural_Resource.findByIdAndUpdate(
    req.params.id, 
    env_natural_resource, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully environment_natural_resource"
    })
    console.log("Successfully environment_natural_resource")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update environment_natural_resource",
      error: error
    })
    console.log("Failed to update environment_natural_resource")
  })
}

exports.put_environment_travel = async function(req, res, next){
  var body = req.body

  const env_travel = {
    env_travel: body.env_travel,
    env_travel_completed: true
  }

  Env_Travel.findByIdAndUpdate(
    req.params.id, 
    env_travel, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated env_travel"
    })
    console.log("Successfully updated env_travel")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update env_travel",
      error: error
    })
    console.log("Failed to update env_travel")
  })
}

exports.put_environment_supply_chain_management = async function(req, res, next){
  var body = req.body

  const env_supply_chain_management = {
    env_supply_chain_management: body.env_supply_chain_management,
    env_supply_chain_management_completed: true
  }

  Env_Supply_Chain_Management.findByIdAndUpdate(
    req.params.id, 
    env_supply_chain_management, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated env_supply_chain_management"
    })
    console.log("Successfully updated env_supply_chain_management")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update env_supply_chain_management",
      error: error
    })
    console.log("Failed to update env_supply_chain_management")
  })
}

exports.put_environment_waste = async function(req, res, next){
  var body = req.body

  const env_waste = {
    env_waste: body.env_waste,
    env_waste_completed: true
  }

  Env_Waste.findByIdAndUpdate(
    req.params.id, 
    env_waste, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated env_waste"
    })
    console.log("Successfully updated env_waste")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update env_waste",
      error: error
    })
    console.log("Failed to update env_waste")
  })
}

exports.put_workplace_training = async function(req, res, next){
  var body = req.body

  const wrk_training = {
    wrk_training: body.wrk_training,
    wrk_training_completed: true
  }

  Wrk_Training.findByIdAndUpdate(
    req.params.id, 
    wrk_training, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated wrk_training"
    })
    console.log("Successfully updated wrk_training")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update wrk_training",
      error: error
    })
    console.log("Failed to update wrk_training")
  })
}

exports.put_workplace_labour_practices = async function(req, res, next){
  var body = req.body

  const wrk_labour_practices = {
    wrk_labour_practices: body.wrk_labour_practices,
    wrk_labour_practices_completed: true
  }

  Wrk_Labour_Practices.findByIdAndUpdate(
    req.params.id, 
    wrk_labour_practices, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated wrk_labour_practices"
    })
    console.log("Successfully updated wrk_labour_practices")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update wrk_labour_practices",
      error: error
    })
    console.log("Failed to update wrk_labour_practices")
  })
}

exports.put_workplace_ethical_practises = async function(req, res, next){
  var body = req.body

  const wrk_ethical_practices = {
    wrk_ethical_practices: body.wrk_ethical_practices,
    wrk_ethical_practices_completed: true
  }

  Wrk_Ethical_Practices.findByIdAndUpdate(
    req.params.id, 
    wrk_ethical_practices, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated wrk_ethical_practices"
    })
    console.log("Successfully updated wrk_ethical_practices")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update wrk_ethical_practices",
      error: error
    })
    console.log("Failed to update wrk_ethical_practices")
  })
}

exports.put_workplace_governance = async function(req, res, next){
  var body = req.body

  const wrk_governance = {
    wrk_governance: body.wrk_governance,
    wrk_governance_completed: true
  }

  Wrk_Governance.findByIdAndUpdate(
    req.params.id, 
    wrk_governance, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated wrk_governance"
    })
    console.log("Successfully updated wrk_governance")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update wrk_governance",
      error: error
    })
    console.log("Failed to update wrk_governance")
  })
}

exports.put_workplace_policies = async function(req, res, next){
  var body = req.body

  const wrk_policies = {
    wrk_policies: body.wrk_policies,
    wrk_policies_completed: true
  }

  Wrk_Policies.findByIdAndUpdate(
    req.params.id, 
    wrk_policies, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated wrk_policies"
    })
    console.log("Successfully updated wrk_policies")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update wrk_policies",
      error: error
    })
    console.log("Failed to update wrk_policies")
  })
}

exports.put_community_engagement = async function(req, res, next){
  var body = req.body

  const com_engagement = {
    com_engagement: body.com_engagement,
    com_engagement_completed: true
  }

  Com_Engagement.findByIdAndUpdate(
    req.params.id, 
    com_engagement, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated com_engagement"
    })
    console.log("Successfully updated com_engagement")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update com_engagement",
      error: error
    })
    console.log("Failed to update com_engagement")
  })
}

exports.put_community_local_issues = async function(req, res, next){
  var body = req.body

  const com_local_issues = {
    com_local_issues: body.com_local_issues,
    com_local_issues_completed: true
  }

  Com_local_issues.findByIdAndUpdate(
    req.params.id, 
    com_local_issues, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated com_local_issues"
    })
    console.log("Successfully updated com_local_issues")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update com_local_issues",
      error: error
    })
    console.log("Failed to update com_local_issues")
  })
}

exports.put_community_wealth_creation = async function(req, res, next){
  var body = req.body

  const com_wealth_creation = {
    com_wealth_creation: body.com_wealth_creation,
    com_wealth_creation_completed: true
  }

  Com_Wealth_Creation.findByIdAndUpdate(
    req.params.id, 
    com_wealth_creation, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated com_wealth_creation"
    })
    console.log("Successfully updated com_wealth_creation")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update com_wealth_creation",
      error: error
    })
    console.log("Failed to update com_wealth_creation")
  })
}

exports.put_community_projects_and_groups = async function(req, res, next){
  var body = req.body

  const com_projects_and_groups = {
    com_projects_and_groups: body.com_projects_and_groups,
    com_projects_and_groups_completed: true
  }

  Com_Projects_And_Groups.findByIdAndUpdate(
    req.params.id, 
    com_projects_and_groups, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated com_projects_and_groups"
    })
    console.log("Successfully updated com_projects_and_groups")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update com_projects_and_groups",
      error: error
    })
    console.log("Failed to update com_projects_and_groups")
  })
}

exports.put_community_education = async function(req, res, next){
  var body = req.body

  const com_education = {
    com_education: body.com_education,
    com_education_completed: true
  }

  Com_Education.findByIdAndUpdate(
    req.params.id, 
    com_education, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated com_education"
    })
    console.log("Successfully updated com_education")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update com_education",
      error: error
    })
    console.log("Failed to update com_education")
  })
}

exports.put_philanthropy_charitable_involvement = async function(req, res, next){
  var body = req.body

  const phil_charitable_involvement = {
    phil_charitable_involvement: body.phil_charitable_involvement,
    phil_charitable_involvement_completed: true
  }

  Phil_Charitable_Involvement.findByIdAndUpdate(
    req.params.id, 
    phil_charitable_involvement, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated phil_charitable_involvement"
    })
    console.log("Successfully updated phil_charitable_involvement")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update phil_charitable_involvement",
      error: error
    })
    console.log("Failed to update phil_charitable_involvement")
  })
}

exports.put_philanthropy_volunteering = async function(req, res, next){
  var body = req.body

  const phil_volunteering = {
    phil_volunteering: body.phil_volunteering,
    phil_volunteering_completed: true
  }

  Phil_Volunteering.findByIdAndUpdate(
    req.params.id, 
    phil_volunteering, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated phil_volunteering"
    })
    console.log("Successfully updated phil_volunteering")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update phil_volunteering",
      error: error
    })
    console.log("Failed to update phil_volunteering")
  })
}

exports.put_philanthropy_pro_bono = async function(req, res, next){
  var body = req.body

  const phil_pro_bono = {
    phil_pro_bono: body.phil_pro_bono,
    phil_pro_bono_completed: true
  }

  Phil_Pro_Bono.findByIdAndUpdate(
    req.params.id, 
    phil_pro_bono, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated phil_pro_bono"
    })
    console.log("Successfully updated phil_pro_bono")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update phil_pro_bono",
      error: error
    })
    console.log("Failed to update phil_pro_bono")
  })
}

exports.put_philanthropy_fund_raising = async function(req, res, next){
  var body = req.body

  const phil_fund_raising = {
    phil_fund_raising: body.phil_fund_raising,
    phil_fund_raising_completed: true
  }

  Phil_Fund_Raising.findByIdAndUpdate(
    req.params.id, 
    phil_fund_raising, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated phil_fund_raising"
    })
    console.log("Successfully updated phil_fund_raising")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update phil_fund_raising",
      error: error
    })
    console.log("Failed to update phil_fund_raising")
  })
}

exports.put_philanthropy_financial_and_kind_gifts = async function(req, res, next){
  var body = req.body

  const phil_financial_and_kind_gifts = {
    phil_financial_and_kind_gifts: body.phil_financial_and_kind_gifts,
    phil_financial_and_kind_gifts_completed: true
  }

  Phil_Financial_And_Kind_Gifts.findByIdAndUpdate(
    req.params.id, 
    phil_financial_and_kind_gifts, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated phil_financial_and_kind_gifts"
    })
    console.log("Successfully updated phil_financial_and_kind_gifts")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update phil_financial_and_kind_gifts",
      error: error
    })
    console.log("Failed to update phil_financial_and_kind_gifts")
  })
}

exports.put_assessment_and_tips = async function(req, res, next){
  const assessments_and_tips = {
    assessments_and_tips_completed: true
  }

  Assessments_and_Tips.findByIdAndUpdate(
    req.params.id, 
    assessments_and_tips, 
    {new: true, runValidators: true, context: 'query'}
  ).then(() => {
    res.status(200).json({
      success: true,
      message: "Successfully updated assessments_and_tips_completed"
    })
    console.log("Successfully updated assessments_and_tips_completed")
  }).catch(error => {
    res.status(400).json({
      success: false,
      message: "Failed to update assessments_and_tips_completed",
      error: error
    })
    console.log("Failed to update assessments_and_tips_completed")
  })
}