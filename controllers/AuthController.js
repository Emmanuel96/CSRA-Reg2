const bcrypt = require("bcryptjs");
const User = require('../models/User');
const Company_Details = require('../models/Company_Details')
const Introduction = require('../models/Introduction')

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
              var id = savedUser._id
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
                id,
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
              var id = savedUser._id
              var introduction = null
              var introduction_completed = false

              const newIntroduction = new Introduction({
                id, 
                introduction,
                introduction_completed
              })

              //Env_energy variables
              var id = savedUser._id

              newCompanyDetails.save().then(() => {
                console.log("CompanyDetails saved!")
              }).catch((err) => {
                console.log("Failed to save!", err)
              })
      
              newIntroduction.save().then(() => {
                console.log("Introduction saved!")
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