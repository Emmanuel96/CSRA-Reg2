const bcrypt = require("bcryptjs");
const User = require('../models/User');
const Application = require('../models/Application')

//GET controllers

exports.get_login = (req, res) => {
  res.render('auth/login')
}

exports.get_register = (req, res) => {
  res.render('auth/register')
}

exports.get_forgot_password = (req, res) => {
  res.render('auth/forgot_password')
}

exports.get_reset_password = (req, res) => {
  res.render('auth/reset_password')
}

//Post controllers

exports.post_register = async function(req, res, next){
  //User variables
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email.toLowerCase();
  var password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    email,
    password
  });

  User.findOne({ email: email }) 
    .then(user => {
      if (!user) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash
            newUser.save().then(savedUser => {
              //Application variables
              var owner = savedUser._id
              var contact_person = null
              var organisation_name = null 
              var organisation_address = null
              var organisation_nationality = null
              var postal_code = null
              var email_address =  req.body.email.toLowerCase()
              var mobile_number = null
              var telephone_number = null
              var organisation_size = null
              var organisation_turnover = null
              var company_details_completed = false
              var introduction = null
              var introduction_completed = false 
              var env_energy = null
              var env_energy_completed = false
              var env_natural_resource = null
              var env_natural_resource_completed = false
              var env_travel = null
              var env_travel_completed = false
              var env_supply_chain_management = null
              var env_supply_chain_management_completed = false
              var env_waste = null
              var env_waste_completed = false
              var wrk_training = null
              var wrk_training_completed = false
              var wrk_labour_practices = null
              var wrk_labour_practices_completed = false
              var wrk_ethical_practices = null
              var wrk_ethical_practices_completed = false
              var wrk_governance = null
              var wrk_governance_completed = false
              var wrk_policies = null
              var wrk_policies_completed = false
              var com_engagement = null
              var com_engagement_completed = false
              var com_local_issues = null
              var com_local_issues_completed = false
              var com_wealth_creation = null
              var com_wealth_creation_completed = false
              var com_projects_and_groups = null
              var com_projects_and_groups_completed = false
              var com_education = null
              var com_education_completed = false
              var phil_charitable_involvement = null
              var phil_charitable_involvement_completed = false
              var phil_volunteering = null
              var phil_volunteering_completed = false
              var phil_pro_bono = null
              var phil_pro_bono_completed = false
              var phil_fund_raising = null
              var phil_fund_raising_completed = false
              var phil_financial_and_kind_gifts = null
              var phil_financial_and_kind_gifts_completed = false
              var assessments_and_tips_completed = false

              const newApplication = new Application({
                owner,
                contact_person,
                organisation_name,
                organisation_address,
                organisation_nationality,
                postal_code,
                email_address,
                mobile_number,
                telephone_number,
                organisation_size,
                organisation_turnover,
                company_details_completed,
                introduction,
                introduction_completed,
                env_energy,
                env_energy_completed,
                env_natural_resource,
                env_natural_resource_completed,
                env_travel,
                env_travel_completed,
                env_supply_chain_management,
                env_supply_chain_management_completed,
                env_waste,
                env_waste_completed,
                wrk_training,
                wrk_training_completed,
                wrk_labour_practices,
                wrk_labour_practices_completed,
                wrk_ethical_practices,
                wrk_ethical_practices_completed,
                wrk_governance,
                wrk_governance_completed,
                wrk_policies,
                wrk_policies_completed,
                com_engagement,
                com_engagement_completed,
                com_local_issues,
                com_local_issues_completed,
                com_wealth_creation,
                com_wealth_creation_completed,
                com_projects_and_groups,
                com_projects_and_groups_completed,
                com_education,
                com_education_completed,
                phil_charitable_involvement,
                phil_charitable_involvement_completed,
                phil_volunteering,
                phil_volunteering_completed,
                phil_pro_bono,
                phil_pro_bono_completed,
                phil_fund_raising,
                phil_fund_raising_completed,
                phil_financial_and_kind_gifts,
                phil_financial_and_kind_gifts_completed,
                assessments_and_tips_completed
              })

              newApplication.save().then(() => {
                console.log("Application saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })
            }).then(() => {
              res.status(200).json({
                message: "Successfully registered", 
                success: true
              })
            }).catch((error) => {
              console.log('Error: ', error)
              return res.status(404).send('There was an error with your registration')
            });
          });
        })
      }else {
        return res.status(200).json({
          success: false,
          message: "There's a user registered with this email already"
        })
      }
    });
}

exports.post_forgot_password = async function(req, res, next){
  const user = { email: req.body.email.toLowerCase() }

  User.findOne(user)
    .then(user => {
      if (!user) {
        return res.status(404)
          .json({
            success: false,
            message: "No user with this email exists"
          })
      }else {
        console.log("Send rest link code goes here.")
      }
    })
}

exports.post_reset_password = async function(req, res, next){
 
}