const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController')

router.post('/login', AuthController.post_login);

router.post('/register', AuthController.post_register);

router.post('/forgot_password', AuthController.post_forgot_password);

router.post('/reset_password', AuthController.post_reset_password);

router.get('/login', AuthController.get_login);

router.get('/register', AuthController.get_register);

router.get('/forgot_password', AuthController.get_forgot_password);

router.get('/reset_password', AuthController.get_reset_password);

router.get('/page1', AuthController.get_page1);

router.get('/page2', AuthController.get_page2);

router.get('/page3', AuthController.get_page3);

router.get('/page4', AuthController.get_page4);

module.exports = router;