const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcryptjs")
const crypto = require('crypto');


exports.post_login = async function(req, res, next){
  email = req.body.email.toLowerCase();
  password = req.body.password

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).json({ 
          message: "User does not exist"
        });
      }else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            res.status(200).json({
              success: true,
              message: "Successful Login"
            });
          } else {
            res.status(404)
              .json({
                message: 'Wrong password'
              })
          }
        })
      }
    })
    .catch(() => {
      res.status(404)
        .json({
          message: 'Error Invalid Credentials'
        })
    })
}

exports.post_register = async function(req, res, next){
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email.toLowerCase();
  var password = req.body.password;
  var salt = req.body.salt;
  var resetPasswordToken = req.body.resetPasswordToken;
  var resetPasswordExpires =req.body.resetPasswordExpires;

  User.findOne({ email: email }) 
    .then(user => {
      if (!user) {
        const newUser = new User({
          firstName,
          lastName,
          email,
          password,
          salt,
          resetPasswordToken,
          resetPasswordExpires  
        });
        newUser.save().then(() => {
          res.status(200).json({
            success: true,
            message: "User successfully registered!"
          })
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
  // create token 

  // const token = (await promisify(crypto.randomBytes)(20)).toString('hex');

  // create user variable
  const user = { email: req.body.email.toLowerCase() }
  // use schema findone method
  User.findOne(user)
    .then(user => {
      if (!user) {
        return res.status(404)
          .json({
            success: false,
            message: "No user with this email exists"
          })
      }else {
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000;
        user.save().then(() => {
          ejs.renderFile(
            'views/templates/reset_email.ejs',
            {token}, 
            function(err, data){
              console.log('err: ', err)
              mailer.sendMail(data, 'Reset Password', user.email)
            }).then(() => {
              res.status(200)
              .json({
                success: true,
                message: "Reset has been sent to your email"
              })
            })
        })
      }
    })
}

exports.post_reset_password = async function(req, res, next){
 // Find if the users token is still valid
 const user = { 'resetPasswordToken': req.params.token }
 console.log('token: ',req.params.token);
 User.findOne(user)
   .then(user => {
     if (!user) {
       res.status(400).json({ "error": 'token is either invalid or has expired' })
     } else {
       // it exists but does the time match our current time? 
       if (user.resetPasswordExpires > Date.now()) {
         res.render('password-reset', { title: 'Password-Reset', token: req.params.token })
         // res.redirect('/password-reset/'+req.params.token)
       } else {
         res.status(400).json({ "error": 'Token is expired bruv' })
       }
     }
   })
   .catch(err => {
     console.log(err)
     return res.send("Issue with password reset. Try again later")
   })
}

exports.get_login = (req, res) => {
  res.render('login')
}

exports.get_register = (req, res) => {
  res.render('register')
}

exports.get_forgot_password = (req, res) => {
  res.render('forgot_password')
}

exports.get_reset_password = (req, res) => {
  res.render('reset_password')
}