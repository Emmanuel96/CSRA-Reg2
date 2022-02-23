const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController')

router.post('/login', AuthController.post_login);

router.post('/register', AuthController.post_register);

router.post('/forgot_password', AuthController.post_forgot_password);

router.post('/reset_password', AuthController.post_reset_password);

module.exports = router;