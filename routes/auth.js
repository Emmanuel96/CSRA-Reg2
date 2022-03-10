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

router.get('/company_details', AuthController.get_company_details);

router.get('/assessment_and_tips', AuthController.get_assessment_and_tips);

router.get('/application_introduction', AuthController.get_application_introduction);

router.get('/environment_energy', AuthController.get_environment_energy);

router.get('/environment_natural_resource', AuthController.get_environment_natural_resource);

router.get('/environment_travel', AuthController.get_environment_travel);

router.get('/environment_supply_chain_management', AuthController.get_environment_supply_chain_management);

router.get('/environment_waste', AuthController.get_environment_waste);

router.get('/environment_supporting_documents', AuthController.get_environment_supporting_documents);

module.exports = router;

