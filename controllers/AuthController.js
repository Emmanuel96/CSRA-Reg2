const bcrypt = require("bcryptjs");
const User = require('../models/User');
const Application = require('../models/Application')
const crypto = require('crypto')
const { promisify } = require('util')
const sgMail = require('@sendgrid/mail')

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

exports.get_reset_password = (req, res, next) => {
  let usersArray = []

  User.find({}).then((users) => {
    usersArray = users

    const thisUser = usersArray.find(user => user.resetPasswordExpires > Date.now() && crypto.timingSafeEqual(Buffer.from(user.resetPasswordToken), Buffer.from(req.params.token)))

    if (!thisUser) {
      return res
        .status(404)
        .send(`
        <div style="text-align: center;">
          <h1 style="font-size: 1.87rem; color: #555A6E; padding: 2.5rem; font-weight: bold;" >
          Password reset token is invalid or has <span style="color: rgb(146, 29, 29)">expired.</span>
          </h1>
    
          <button style="border: none; background-color: #00A19A; padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left: 1.7rem; padding-right: 1.7rem; border-radius: 0.25rem; color: white;">
            <a style="text-decoration: none; color: white" href="/forgot_password">Request new link</a
          </button>
        </div>
        `)
        .end()
    }
    res.render('auth/reset_password')
  })
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
              let owner = savedUser._id
              let contact_person = null
              let organisation_name = null 
              let organisation_address = null
              let organisation_nationality = null
              let postal_code = null
              let email_address =  req.body.email.toLowerCase()
              let mobile_number = null
              let telephone_number = null
              let organisation_size = null
              let organisation_turnover = null
              let company_details_completed = false
              let introduction = null
              let introduction_completed = false 
              let env_energy = null
              let env_energy_completed = false
              let env_natural_resource = null
              let env_natural_resource_completed = false
              let env_travel = null
              let env_travel_completed = false
              let env_supply_chain_management = null
              let env_supply_chain_management_completed = false
              let env_waste = null
              let env_waste_completed = false
              let wrk_training = null
              let wrk_training_completed = false
              let wrk_labour_practices = null
              let wrk_labour_practices_completed = false
              let wrk_ethical_practices = null
              let wrk_ethical_practices_completed = false
              let wrk_governance = null
              let wrk_governance_completed = false
              let wrk_policies = null
              let wrk_policies_completed = false
              let com_engagement = null
              let com_engagement_completed = false
              let com_local_issues = null
              let com_local_issues_completed = false
              let com_wealth_creation = null
              let com_wealth_creation_completed = false
              let com_projects_and_groups = null
              let com_projects_and_groups_completed = false
              let com_education = null
              let com_education_completed = false
              let phil_charitable_involvement = null
              let phil_charitable_involvement_completed = false
              let phil_volunteering = null
              let phil_volunteering_completed = false
              let phil_pro_bono = null
              let phil_pro_bono_completed = false
              let phil_fund_raising = null
              let phil_fund_raising_completed = false
              let phil_financial_and_kind_gifts = null
              let phil_financial_and_kind_gifts_completed = false
              let phil_other_information = null
              let phil_future_planning = null
              let assessments_and_tips_completed = false
              let finished = false
              let scoredByAssessors = false

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
                phil_other_information,
                phil_future_planning,
                assessments_and_tips_completed,
                finished,
                scoredByAssessors
              })

              newApplication.save().then(savedApplication => {
                newUser.application = savedApplication._id
                newUser.save()
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

exports.post_forgot_password = async (req, res, next) => {
  const token = (await promisify(crypto.randomBytes)(20)).toString('hex')

  User.findOne({ email: req.body.email }).then(user => {
    if(!user){
      return res.status(404).json({
        success: false,
        message: "No user with this email exists"
      })
    }

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000
    user.save()

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    sgMail.setApiKey(SENDGRID_API_KEY)

    const resetEmail = {
      to: req.body.email,
      from: 'emmanuel@csr-accreditation.co.uk',
      subject: 'Your Password Reset Link',
      html: `Hi ${user.firstName} <br> You are receiving this mail because you (or someone else) have requested to reset the password to your account. <br> Please click on the following link, or paste this into your browser to complete the process: <br> <br> http://${req.headers.host}/reset_password/${token} <br> <br> If you did not request this, please ignore this email and your password will remain unchanged.
      `
    }

    sgMail.send(resetEmail).then(() => {
      console.log('Reset link was sent to your email address')

      res.status(200).json({
        success: true,
        message: "Reset link was sent to your email address"
      })
    }).catch(error => {
      console.log(error)

      res.status(400).json({
        success: false,
        message: "There was a problem with your request"
      })
    })
  })
}

exports.post_reset_password = (req, res, next) => {
  console.log("i got here")
  let usersArray = []

  User.find({}).then((users) => {
    usersArray = users

    const thisUser = usersArray.find(user => user.resetPasswordExpires > Date.now() && crypto.timingSafeEqual(Buffer.from(user.resetPasswordToken), Buffer.from(req.params.token)))

    console.log(thisUser)

    if (!thisUser) return res.status(404).end()

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err

        req.body.password = hash

        let filter = { email: thisUser.email }
        let update = {
          password: req.body.password,
          resetPasswordToken: null,
          resetPasswordExpires: null
        }

        User.findOneAndUpdate(filter, update).then((feedback) => {
          console.log(feedback)

          console.log("Successfull password reset!")

          res.status(200).json({
            success: true,
            message: "Your password was successfully updated"
          })

          const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

          sgMail.setApiKey(SENDGRID_API_KEY)

          const newPasswordConfirmation = {
            to: 'stephenbuluswayar@gmail.com',
            from: 'emmanuel@csr-accreditation.co.uk',
            subject: 'Password Reset Successful!',
            html: `This is a confirmation that the password for your account "${thisUser.email}" has just been changed.
            `
          }

          sgMail.send(newPasswordConfirmation).then(() => {
            console.log("Password confirmation sent")
          }).catch(err => logger.error("Failed to send confirmation", err))

        }).catch((err) => {
          res.status(400).json({
            success: false,
            message: "Failed to update"
          })
          logger.error("Failed to update: ", err)
        })
      })
    })
  })
}