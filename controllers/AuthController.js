const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcryptjs")
const jsonwebtoken = require('jsonwebtoken');
const crypto = require('crypto');


exports.post_login = async function(req, res, next){
  email = req.body.email.toLowerCase();
  password = req.body.password

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).json({ 
          message: "Invalid Credentials - 1"
        });
      }else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {

            user.logged_in_atleast_once = 1; 

            const { password, ...responseUser } = user._doc; 

            user.save();

            const tokenObject = issueJWT(user);

            res.status(200).json({
              success: true,
              user: responseUser,
              token: tokenObject.token,
              expiresIn: tokenObject.expires,
              message: "Successful Login"
            });
          } else {
            res.status(404)
              .json({
                message: 'Invalid Credentials -2 '
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

  User.findOne({ email: email }) 
    .then(user => {
      if (!user) {
        const newUser = new User({
          firstName,
          lastName,
          email,
          password,
          salt  
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash
            newUser
              .save()
              .then(user => {
                //issue jwt token 
                const jwt = issueJWT(user)
                user.password = "********";
                res.json({
                  success: true,
                  user: user,
                  token: jwt.token,
                  expiresIn: jwt.expiresIn
                })
              })
              .catch((error) => {
                console.log('Error: ', error)
                return res
                  .status(404)
                  .send('There was an error with your registration')
              });
          });
        });
      }else {
        error = "There's a user registered with this email already"
        return res.status(404)
          .send("There's a user registered with this email already")
      }
    });
}

exports.post_forgot_password = async function(req, res, next){
  // create token 
  const token = (await promisify(crypto.randomBytes)(20)).toString('hex');
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
        ejs.renderFile('views/templates/reset_email.ejs',{token}, function(err, data){
          console.log('err: ', err)
          mailer.sendMail(data, 'Reset Password', user.email)
        })
        res.status(200)
          .json({
            success: true,
            message: "Reset has been sent to your email"
          })
      }
    })
    .catch(() => {
      return res.status(404)
        .json({
          success: false,
          message: "No user registered with this email"
        })
    })
}

exports.post_reset_password = async function(req, res, next){
  const user = { 'resetPasswordToken': req.body.token }

  User.findOne(user)
    .then(user => {
      if (!user) {
        return res.status(404)
          .json({
            success: false,
            message: 'Something went wrong, try again.'
          })
      }else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash
            user.save()
            return res.status(200)
              .json({
                success: true,
                user_role: user.role, 
                message: "Password Successfully Reset"
              })
          });
        });
      }
    })
}