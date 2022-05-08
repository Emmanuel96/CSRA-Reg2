const express = require('express');
const router = express.Router();
const checkAuthenticated = require('../passport/checkAuthenticated')
const DashboardController = require('../controllers/DashboardController');

//GET PAGES ROUTES

router.get('/company_details', checkAuthenticated, DashboardController.get_company_details);

router.get('/assessment_and_tips', checkAuthenticated, DashboardController.get_assessment_and_tips);

router.get('/application_introduction', checkAuthenticated, DashboardController.get_application_introduction);

router.get('/environment_energy', checkAuthenticated, DashboardController.get_environment_energy);

router.get('/environment_natural_resource', checkAuthenticated, DashboardController.get_environment_natural_resource);

router.get('/environment_travel', checkAuthenticated, DashboardController.get_environment_travel);

router.get('/environment_supply_chain_management', checkAuthenticated, DashboardController.get_environment_supply_chain_management);

router.get('/environment_waste', checkAuthenticated, DashboardController.get_environment_waste);

router.get('/environment_supporting_documents', checkAuthenticated, DashboardController.get_environment_supporting_documents);

router.get('/workplace_training', checkAuthenticated, DashboardController.get_workplace_training);

router.get('/workplace_labour_practices', checkAuthenticated, DashboardController.get_workplace_labour_practices);

router.get('/workplace_ethical_practises', checkAuthenticated, DashboardController.get_workplace_ethical_practises);

router.get('/workplace_governance', checkAuthenticated, DashboardController.get_workplace_governance);

router.get('/workplace_policies', checkAuthenticated, DashboardController.get_workplace_policies);

router.get('/workplace_supporting_documents', checkAuthenticated, DashboardController.get_workplace_supporting_documents);

router.get('/community_engagement', checkAuthenticated, DashboardController.get_community_engagement);

router.get('/community_local_issues', checkAuthenticated, DashboardController.get_community_local_issues);

router.get('/community_wealth_creation', checkAuthenticated, DashboardController.get_community_wealth_creation);

router.get('/community_projects_and_groups', checkAuthenticated, DashboardController.get_community_projects_and_groups);

router.get('/community_education', checkAuthenticated, DashboardController.get_community_education);

router.get('/community_supporting_documents', checkAuthenticated, DashboardController.get_community_supporting_documents);

router.get('/philanthropy_charitable_involvement', checkAuthenticated, DashboardController.get_philanthropy_charitable_involvement);

router.get('/philanthropy_volunteering', checkAuthenticated, DashboardController.get_philanthropy_volunteering);

router.get('/philanthropy_pro_bono', checkAuthenticated, DashboardController.get_philanthropy_pro_bono);

router.get('/philanthropy_fund_raising', checkAuthenticated, DashboardController.get_philanthropy_fund_raising);

router.get('/philanthropy_financial_and_kind_gifts', checkAuthenticated, DashboardController.get_philanthropy_financial_and_kind_gifts);

router.get('/philanthropy_supporting_documents', checkAuthenticated, DashboardController.get_philanthropy_supporting_documents);

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

router.put('/community_engagement/:id', DashboardController.put_community_engagement)

router.put('/community_local_issues/:id', DashboardController.put_community_local_issues)

router.put('/community_wealth_creation/:id', DashboardController.put_community_wealth_creation)

router.put('/community_projects_and_groups/:id', DashboardController.put_community_projects_and_groups)

router.put('/community_education/:id', DashboardController.put_community_education)

router.put('/philanthropy_charitable_involvement/:id', DashboardController.put_philanthropy_charitable_involvement)

router.put('/philanthropy_volunteering/:id', DashboardController.put_philanthropy_volunteering)

router.put('/philanthropy_pro_bono/:id', DashboardController.put_philanthropy_pro_bono)

router.put('/philanthropy_fund_raising/:id', DashboardController.put_philanthropy_fund_raising)

router.put('/philanthropy_financial_and_kind_gifts/:id', DashboardController.put_philanthropy_financial_and_kind_gifts)

router.put('/assessment_and_tips/:id', DashboardController.put_assessment_and_tips)

// Get application document route

router.get('/api/application/:id', DashboardController.get_application_document)

module.exports = router;