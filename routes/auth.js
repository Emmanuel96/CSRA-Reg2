const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController')
const checkNotAuthenticated = require('../passport/checkNotAuthenticated')
const checkAuthenticated = require('../passport/checkAuthenticated')
const passport = require("../passport/setup")

//POST routes

router.post('/login',
  passport.authenticate('local', { 
    failureMessage: false,
  }),
  function(req, res) {
    res.json({
      userID: req.user._id.toString()
    })
  });

router.post('/register', AuthController.post_register);

router.post('/forgot_password', AuthController.post_forgot_password);

router.post('/reset_password', AuthController.post_reset_password);

//DELETE route

router.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

// GET routes

router.get('/login', checkNotAuthenticated, AuthController.get_login);

router.get('/register', checkNotAuthenticated, AuthController.get_register);

router.get('/forgot_password', checkNotAuthenticated, AuthController.get_forgot_password);

router.get('/reset_password', checkAuthenticated, AuthController.get_reset_password);

module.exports = router;