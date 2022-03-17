// const Company_Details = require('../models/Company_Details')

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


//POST CONTROLLERS

// exports.post_company_details = async function(req, res, next){
//   const body = req.body

//   var user_id = body.user_id;
//   var contact_person = body.contact_person;
//   var organisation_name = body.organisation_name;
//   var organisation_address = body.organisation_address;
//   var organisation_nationality = body.organisation_nationality;
//   var postal_code = body.postal_code;
//   var email_address = body.email_address;
//   var mobile_number = body.mobile_number;
//   var telephone_number = body.telephone_number;
//   var organisation_size = body.organisation_size;
//   var organisation_turnover = body.organisation_turnover;
//   var completed = body.completed;

//   const newCompanyDetails = new Company_Details({
//     user_id,
//     contact_person,
//     organisation_name,
//     organisation_address,
//     organisation_nationality,
//     postal_code,
//     email_address,
//     mobile_number,
//     telephone_number,
//     organisation_size,
//     organisation_turnover,
//     completed
//   })

//   newCompanyDetails.save().then(() => {
//     console.log('Company details successfully saved!')
//   }).catch((err) => {
//     console.log("Failed to save CompanyDetails: ", err)
//   })
// }