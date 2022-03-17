const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');

//GET ROUTES

router.get('/company_details', DashboardController.get_company_details);

router.get('/assessment_and_tips', DashboardController.get_assessment_and_tips);

router.get('/application_introduction', DashboardController.get_application_introduction);

router.get('/environment_energy', DashboardController.get_environment_energy);

router.get('/environment_natural_resource', DashboardController.get_environment_natural_resource);

router.get('/environment_travel', DashboardController.get_environment_travel);

router.get('/environment_supply_chain_management', DashboardController.get_environment_supply_chain_management);

router.get('/environment_waste', DashboardController.get_environment_waste);

router.get('/environment_supporting_documents', DashboardController.get_environment_supporting_documents);

router.get('/workplace_training', DashboardController.get_workplace_training);

router.get('/workplace_labour_practices', DashboardController.get_workplace_labour_practices);

router.get('/workplace_ethical_practises', DashboardController.get_workplace_ethical_practises);

router.get('/workplace_governance', DashboardController.get_workplace_governance);

router.get('/workplace_policies', DashboardController.get_workplace_policies);

router.get('/workplace_supporting_documents', DashboardController.get_workplace_supporting_documents);

//POST ROUTES

// router.post('/company_details', DashboardController.post_company_details)

module.exports = router;