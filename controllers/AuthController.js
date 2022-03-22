const bcrypt = require("bcryptjs");
const User = require('../models/User');

const Company_Details = require('../models/Company_Details')
const Introduction = require('../models/Introduction')
const Env_Energy = require("../models/Env_Energy")
const Env_Natural_Resource = require("../models/Env_Natural_Resource")
const Env_Travel = require('../models/Env_Travel')
const Env_Supply_Chain_Management = require('../models/Env_Supply_Chain_Management')
const Env_Waste = require('../models/Env_Waste')
const Wrk_Training = require('../models/Wrk_Training')
const Wrk_Labour_Practices = require('../models/Wrk_Labour_Practices')
const Wrk_Ethical_Practices = require('../models/Wrk_Ethical_Practices')
const Wrk_Governance = require("../models/Wrk_Governance")
const Wrk_Policies = require("../models/Wrk_Policies")


//POST controllers

exports.post_login = async function(req, res, next){
  email = req.body.email.toLowerCase();
  password = req.body.password

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).json({ 
          message: "Password or email is incorrect"
        });
      }else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            res.status(200).json({ 
              message: "Successfully logged in", 
              success: true
            });
          } else {
            console.log(err)
            res.status(404)
              .json({
                message: 'Password or email is incorrect',
              })
          }
        })
      }
    }).catch(() => {
      res.status(404).json({
        message: 'Error Invalid Credentials'
      })
    })
}

exports.post_register = async function(req, res, next){
  //User variables
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email.toLowerCase();
  var password = req.body.password;
  var salt = req.body.salt;
  var resetPasswordToken = req.body.resetPasswordToken;
  var resetPasswordExpires = req.body.resetPasswordExpires;

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    salt,
    resetPasswordToken,
    resetPasswordExpires  
  });

  User.findOne({ email: email }) 
    .then(user => {
      if (!user) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash
            newUser.save().then(savedUser => {
              //Compnay_details variables
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

              const newCompanyDetails = new Company_Details({
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
                company_details_completed
              })

              //Introduction variables
              var introduction = null
              var introduction_completed = false

              const newIntroduction = new Introduction({
                introduction,
                introduction_completed
              })

              //Env_energy variables
              var env_energy = null
              var env_energy_completed = false

              const newEnv_Energy = new Env_Energy({
                env_energy,
                env_energy_completed
              })

              //Env_Natural_Resource variables
              var env_natural_resource = null
              var env_natural_resource_completed = false

              const newEnv_Natural_Resource = new Env_Natural_Resource({
                env_natural_resource,
                env_natural_resource_completed
              })

              //Env_travel variables
              var env_travel = null
              var env_travel_completed = false

              const newEnv_Travel = new Env_Travel({
                env_travel,
                env_travel_completed
              })

              //Env_Supply_Chain_Management variables
              var env_supply_chain_management = null
              var env_supply_chain_management_completed = false

              const newEnv_Supply_Chain_Management = new Env_Supply_Chain_Management({
                env_supply_chain_management,
                env_supply_chain_management_completed
              })

              //Env_waste variables
              var env_waste = null
              var env_waste_completed = false

              const newEnv_Waste = new Env_Waste({
                env_waste,
                env_waste_completed
              })

              //Wrk_training variables
              var wrk_training = null
              var wrk_training_completed = false

              const newWrk_training = new Wrk_Training({
                wrk_training,
                wrk_training_completed
              })

              //Wrk_labour_practices variables
              var wrk_labour_practices = null
              var wrk_labour_practices_completed = false

              const newWrk_labour_practices = new Wrk_Labour_Practices({
                wrk_labour_practices,
                wrk_labour_practices_completed
              })

              //Wrk_ethical_practices variables
              var wrk_ethical_practices = null
              var wrk_ethical_practices_completed = false

              const newWrk_ethical_practices = new Wrk_Ethical_Practices({
                wrk_ethical_practices,
                wrk_ethical_practices_completed
              })

              //Wrk_governance variables
              var wrk_governance = null
              var wrk_governance_completed = false

              const newWrk_governance = new Wrk_Governance({
                wrk_governance,
                wrk_governance_completed
              })
             
              //Wrk_policies variables
              var wrk_policies = null
              var wrk_policies_completed = false

              const newWrk_policies = new Wrk_Policies({
                wrk_policies,
                wrk_policies_completed
              })              

              newCompanyDetails._id = savedUser._id
              newCompanyDetails.save().then(() => {
                console.log("CompanyDetails saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })
      
              newIntroduction._id = savedUser._id
              newIntroduction.save().then(() => {
                console.log("Introduction saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newEnv_Energy._id = savedUser._id
              newEnv_Energy.save().then(() => {
                console.log("Env_Energy saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newEnv_Natural_Resource._id = savedUser._id
              newEnv_Natural_Resource.save().then(() => {
                console.log("Env_Natural_Resource saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newEnv_Travel._id = savedUser._id
              newEnv_Travel.save().then(() => {
                console.log("Env_Travel saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newEnv_Supply_Chain_Management._id = savedUser._id
              newEnv_Supply_Chain_Management.save().then(() => {
                console.log("Env_Supply_Chain_Management saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newEnv_Waste._id = savedUser._id
              newEnv_Waste.save().then(() => {
                console.log("Env_Waste saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newWrk_training._id = savedUser._id
              newWrk_training.save().then(() => {
                console.log("Wrk_training saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newWrk_labour_practices._id = savedUser._id
              newWrk_labour_practices.save().then(() => {
                console.log("Wrk_labour_practice saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newWrk_ethical_practices._id = savedUser._id
              newWrk_ethical_practices.save().then(() => {
                console.log("Wrk_ethical_practice saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newWrk_governance._id = savedUser._id
              newWrk_governance.save().then(() => {
                console.log("Wrk_governance saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })

              newWrk_policies._id = savedUser._id
              newWrk_policies.save().then(() => {
                console.log("Wrk_Policies saved!")
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