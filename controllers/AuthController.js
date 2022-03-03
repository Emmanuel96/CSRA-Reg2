const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcryptjs");

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
            res.render('dashboard')
          } else {
            console.log(err)
            res.status(404)
              .json({
                message: 'Password is incorrect',
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

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash
            newUser.save().then(user => { 
              res.render('login')
            }).catch((error) => {
                console.log('Error: ', error)
                return res.status(404).send('There was an error with your registration')
              });
          });
        });
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

exports.get_dashboard = (req, res) => {
  res.render('dashboard')
}