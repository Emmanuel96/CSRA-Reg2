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

//PUT ROUTES

router.put('/company_details/:id', DashboardController.put_company_details)

router.put('/application_introduction/:id', DashboardController.put_application_introduction)

router.put('/environment_energy/:id', DashboardController.put_environment_energy)

router.put('/environment_natural_resource/:id', DashboardController.put_environment_natural_resource)

router.put('/environment_travel/:id', DashboardController.put_environment_travel)

router.put('/environment_supply_chain_management/:id', DashboardController.put_environment_supply_chain_management)

router.put('/environment_waste/:id', DashboardController.put_environment_waste)

router.put('/workplace_training/:id', DashboardController.put_workplace_training)

router.put('/workplace_labour_practices/:id', DashboardController.put_workplace_labour_practices)

router.put('/workplace_ethical_practises/:id', DashboardController.put_workplace_ethical_practises)

router.put('/workplace_governance/:id', DashboardController.put_workplace_governance)

router.put('/workplace_policies/:id', DashboardController.put_workplace_policies)

module.exports = router;