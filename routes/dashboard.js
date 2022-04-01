const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');

//GET PAGES ROUTES

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

router.get('/community_engagement', DashboardController.get_community_engagement);

router.get('/community_local_issues', DashboardController.get_community_local_issues);

router.get('/community_wealth_creation', DashboardController.get_community_wealth_creation);

router.get('/community_projects_and_groups', DashboardController.get_community_projects_and_groups);

router.get('/community_education', DashboardController.get_community_education);

router.get('/community_supporting_documents', DashboardController.get_community_supporting_documents);

router.get('/philanthropy_charitable_involvement', DashboardController.get_philanthropy_charitable_involvement);

router.get('/philanthropy_volunteering', DashboardController.get_philanthropy_volunteering);

router.get('/philanthropy_pro_bono', DashboardController.get_philanthropy_pro_bono);

router.get('/philanthropy_fund_raising', DashboardController.get_philanthropy_fund_raising);

router.get('/philanthropy_financial_and_kind_gifts', DashboardController.get_philanthropy_financial_and_kind_gifts);

router.get('/philanthropy_supporting_documents', DashboardController.get_philanthropy_supporting_documents);

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

//GET PAGES DATA ROUTES

router.get('/company_details/:id', DashboardController.get_company_details_data)

router.get('/application_introduction/:id', DashboardController.get_application_introduction_data)

router.get('/environment_energy/:id', DashboardController.get_environment_energy_data)

router.get('/environment_natural_resource/:id', DashboardController.get_environment_natural_resource_data)

router.get('/environment_travel/:id', DashboardController.get_environment_travel_data)

router.get('/environment_supply_chain_management/:id', DashboardController.get_environment_supply_chain_management_data)

router.get('/environment_waste/:id', DashboardController.get_environment_waste_data)

router.get('/workplace_training/:id', DashboardController.get_workplace_training_data)

router.get('/workplace_labour_practices/:id', DashboardController.get_workplace_labour_practices_data)

router.get('/workplace_ethical_practises/:id', DashboardController.get_workplace_ethical_practises_data)

router.get('/workplace_governance/:id', DashboardController.get_workplace_governance_data)

router.get('/workplace_policies/:id', DashboardController.get_workplace_policies_data)

router.get('/community_engagement/:id', DashboardController.get_community_engagement_data)

router.get('/community_local_issues/:id', DashboardController.get_community_local_issues_data)

router.get('/community_wealth_creation/:id', DashboardController.get_community_wealth_creation_data)

router.get('/community_projects_and_groups/:id', DashboardController.get_community_projects_and_groups_data)

router.get('/community_education/:id', DashboardController.get_community_education_data)

module.exports = router;