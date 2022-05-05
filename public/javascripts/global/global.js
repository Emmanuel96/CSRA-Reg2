const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

const userID = sessionStorage.getItem("csra_user");

var company_details_completed = null
var introduction_completed = null
var assessment_and_tips = null

var env_part_one_completed = null
var env_part_two_completed = null
var env_part_three_completed = null
var env_part_four_completed = null
var env_part_five_completed = null
var environment_completed = false
var environmentsDoc = null

var wrk_part_one_completed = null
var wrk_part_two_completed = null
var wrk_part_three_completed = null
var wrk_part_four_completed = null
var wrk_part_five_completed = null
var workplace_completed = false
var workplacesDoc = null

var com_part_one_completed = null
var com_part_two_completed = null
var com_part_three_completed = null
var com_part_four_completed = null
var com_part_five_completed = null
var community_completed = false
var communityDoc = null

var phil_part_one_completed = null
var phil_part_two_completed = null
var phil_part_three_completed = null
var phil_part_four_completed = null
var phil_part_five_completed = null
var philanthropy_completed = false
var philanthropyDoc = null

function applicationDoc(){
  axios.get(`/api/application/${userID}`).then((result) => {
    company_details_completed = result.data.company_details_completed
    var company_details_tick = document.getElementById("company_details_tick")
    if(company_details_completed){
      company_details_tick.classList.remove("hidden");
    }
  })

  axios.get(`/application_introduction/${userID}`).then((result) => {
    introduction_completed = result.data.introduction_completed
    var introduction_tick = document.getElementById("introduction_tick")
    if(introduction_completed){
      introduction_tick.classList.remove("hidden");
    }
  })
}   

function getEnvironmentStatus(){
  axios.get(`/api/environments/${userID}`).then((result) => {
    environmentsDoc = result.data

    env_part_one_completed = environmentsDoc[0].env_energy_completed;

    env_part_two_completed = environmentsDoc[1].env_natural_resource_completed;

    env_part_three_completed = environmentsDoc[2].env_travel_completed;

    env_part_four_completed = environmentsDoc[3].env_supply_chain_management_completed;

    env_part_five_completed = environmentsDoc[4].env_waste_completed;
  }).then(() => {
    if(
        env_part_one_completed && env_part_two_completed && env_part_three_completed && env_part_four_completed && env_part_five_completed
      ){
        environment_completed = true
      }else{
        environment_completed = false
      }
  }).then(() => {
    var environment_tick = document.getElementById("environment_tick")
    if(environment_completed){
      environment_tick.classList.remove("hidden");
    }
  }).then(() => run())
}

function getWorkplaceStatus(){
  axios.get(`/api/workplaces/${userID}`).then((result) => {
    workplacesDoc = result.data

    wrk_part_one_completed = workplacesDoc[0].wrk_training_completed;

    wrk_part_two_completed = workplacesDoc[1].wrk_labour_practices_completed;

    wrk_part_three_completed = workplacesDoc[2].wrk_ethical_practices_completed;

    wrk_part_four_completed = workplacesDoc[3].wrk_governance_completed;

    wrk_part_five_completed = workplacesDoc[4].wrk_policies_completed;
  }).then(() => {
    if(
        wrk_part_one_completed && wrk_part_two_completed && wrk_part_three_completed && wrk_part_four_completed && wrk_part_five_completed
      ){
        workplace_completed = true
      }else{
        workplace_completed = false
      }
  }).then(() => {
    var workplace_tick = document.getElementById("workplace_tick")
    if(workplace_completed){
      workplace_tick.classList.remove("hidden");
    }
  }).then(() => run())
}

function getCommunityStatus(){
  axios.get(`/api/communities/${userID}`).then((result) => {
    communityDoc = result.data

    com_part_one_completed = communityDoc[0].com_engagement_completed;

    com_part_two_completed = communityDoc[1].com_local_issues_completed;

    com_part_three_completed = communityDoc[2].com_wealth_creation_completed;

    com_part_four_completed = communityDoc[3].com_projects_and_groups_completed;

    com_part_five_completed = communityDoc[4].com_education_completed;
  }).then(() => {
    if(
        com_part_one_completed && com_part_two_completed && com_part_three_completed && com_part_four_completed && com_part_five_completed
      ){
        community_completed = true
      }else{
        community_completed = false
      }
  }).then(() => {
    var community_tick = document.getElementById("community_tick")
    if(community_completed){
      community_tick.classList.remove("hidden");
    }
  }).then(() => run())
}

function getPhilanthropyStatus(){
  axios.get(`/api/philanthropy/${userID}`).then((result) => {
    philanthropyDoc = result.data

    phil_part_one_completed = philanthropyDoc[0].phil_charitable_involvement_completed;

    phil_part_two_completed = philanthropyDoc[1].phil_volunteering_completed;

    phil_part_three_completed = philanthropyDoc[2].phil_pro_bono_completed;

    phil_part_four_completed = philanthropyDoc[3].phil_fund_raising_completed;

    phil_part_five_completed = philanthropyDoc[4].phil_financial_and_kind_gifts_completed;
  }).then(() => {
    if(
      phil_part_one_completed && phil_part_two_completed && phil_part_three_completed && phil_part_four_completed && phil_part_five_completed
      ){
        philanthropy_completed = true
      }else{
        philanthropy_completed = false
      }
  }).then(() => {
    var philanthropy_tick = document.getElementById("philanthropy_tick")
    if(philanthropy_completed){
      philanthropy_tick.classList.remove("hidden");
    }
  }).then(() => run())
}

function getAssesmentStatus(){
  axios.get(`/assessment_and_tips/${userID}`).then((result) => {
    assessment_and_tips = result.data.assessments_and_tips_completed
    var assessment_tick = document.getElementById("assessment_tick")
    if(assessment_and_tips){
      assessment_tick.classList.remove("hidden");
    }
  }).then(() => run())
}

function run(){
  if(company_details_completed && introduction_completed && assessment_and_tips && environment_completed && workplace_completed && community_completed && philanthropy_completed){
    return finish_tick.classList.remove("hidden");
  }
}

getCompanyDetailsAndIntroStatus() 
getEnvironmentStatus()
getWorkplaceStatus()
getCommunityStatus()
getPhilanthropyStatus()
getAssesmentStatus()