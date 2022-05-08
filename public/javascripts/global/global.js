//active page higlight logic
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

const userID = sessionStorage.getItem("csra_user");

//holds the application object data
let req_data = ""

//gets the application data of the logged in user and sets the req_data variable to the returned object value
axios.get(`/api/application/${userID}`).then(result => {
  req_data = result.data
}).then(() => applicationStatus())

function applicationStatus(){
  let company_details_completed = req_data.company_details_completed
  let introduction_completed = req_data.introduction_completed
  let assessments_and_tips_completed = req_data.assessments_and_tips_completed

  let env_energy_completed = req_data.env_energy_completed
  let env_natural_resource_completed = req_data.env_natural_resource_completed
  let env_travel_completed = req_data.env_travel_completed
  let env_supply_chain_management_completed = req_data.env_supply_chain_management_completed
  let env_waste_completed = req_data.env_waste_completed
  let environment_completed = false

  let wrk_training_completed = req_data.wrk_training_completed
  let wrk_labour_practices_completed = req_data.wrk_labour_practices_completed
  let wrk_ethical_practices_completed = req_data.wrk_ethical_practices_completed
  let wrk_governance_completed = req_data.wrk_governance_completed
  let wrk_policies_completed = req_data.wrk_policies_completed
  let workplace_completed = false

  let com_engagement_completed = req_data.com_engagement_completed
  let com_local_issues_completed = req_data.com_local_issues_completed
  let com_wealth_creation_completed = req_data.com_wealth_creation_completed
  let com_projects_and_groups_completed = req_data.com_projects_and_groups_completed
  let com_education_completed = req_data.com_education_completed
  let community_completed = false

  let phil_charitable_involvement_completed = req_data.phil_charitable_involvement_completed
  let phil_volunteering_completed = req_data.phil_volunteering_completed
  let phil_pro_bono_completed = req_data.phil_pro_bono_completed
  let phil_fund_raising_completed = req_data.phil_fund_raising_completed
  let phil_financial_and_kind_gifts_completed = req_data.phil_financial_and_kind_gifts_completed
  let philanthropyDoc = null

  let company_details_tick = document.getElementById("company_details_tick")

  //checks company details status and adds tick if true
  if(company_details_completed){
    company_details_tick.classList.remove("hidden");
  }

  let introduction_tick = document.getElementById("introduction_tick")

  //checks introduction status and adds tick if true
  if(introduction_completed){
    introduction_tick.classList.remove("hidden");
  }

  //checks if all environment pages are completed and adds tick to environment section
  if(
    env_energy_completed && env_natural_resource_completed && env_travel_completed && env_supply_chain_management_completed && env_waste_completed
  ){
    environment_completed = true

    let environment_tick = document.getElementById("environment_tick")

    environment_tick.classList.remove("hidden");
  }

  //checks if all workplace pages are completed and adds tick to workplace section
  if(
    wrk_training_completed && wrk_labour_practices_completed && wrk_ethical_practices_completed && wrk_governance_completed && wrk_policies_completed
  ){
    workplace_completed = true

    let workplace_tick = document.getElementById("workplace_tick")

    workplace_tick.classList.remove("hidden")
  }

  //checks if all community pages are completed and adds tick to community section
  if(
    com_engagement_completed && com_local_issues_completed && com_wealth_creation_completed && com_projects_and_groups_completed && com_education_completed
  ){
    community_completed = true

    var community_tick = document.getElementById("community_tick")

    community_tick.classList.remove("hidden")
  }

  //checks if all philanthropy pages are completed and adds tick to philanthropy section
  if(
    phil_charitable_involvement_completed && phil_volunteering_completed && phil_pro_bono_completed && phil_fund_raising_completed && phil_financial_and_kind_gifts_completed
  ){
    philanthropy_completed = true

    var philanthropy_tick = document.getElementById("philanthropy_tick")

    philanthropy_tick.classList.remove("hidden")
  }

  var assessment_tick = document.getElementById("assessment_tick")

  //checks if asessment page is completed and adds tick
  if(assessments_and_tips_completed){
    assessment_tick.classList.remove("hidden");
  }

  //checks if all sections are true then adds tick to the finish button
  if(company_details_completed && introduction_completed && assessments_and_tips_completed && environment_completed && workplace_completed && community_completed && philanthropy_completed){
    finish_tick.classList.remove("hidden");
  }
}