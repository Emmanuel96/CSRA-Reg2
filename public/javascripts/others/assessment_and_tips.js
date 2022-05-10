const ID = sessionStorage.getItem("csra_user");

let appData = ""

axios.get(`/api/application/${ID}`).then(result => {
  appData = result.data
})

function updateAssessments(){
  event.preventDefault(); 

  let company_details_completed = appData.company_details_completed
  let introduction_completed = appData.introduction_completed

  let env_energy_completed = appData.env_energy_completed
  let env_natural_resource_completed = appData.env_natural_resource_completed
  let env_travel_completed = appData.env_travel_completed
  let env_supply_chain_management_completed = appData.env_supply_chain_management_completed
  let env_waste_completed = appData.env_waste_completed

  let wrk_training_completed = appData.wrk_training_completed
  let wrk_labour_practices_completed = appData.wrk_labour_practices_completed
  let wrk_ethical_practices_completed = appData.wrk_ethical_practices_completed
  let wrk_governance_completed = appData.wrk_governance_completed
  let wrk_policies_completed = appData.wrk_policies_completed

  let com_engagement_completed = appData.com_engagement_completed
  let com_local_issues_completed = appData.com_local_issues_completed
  let com_wealth_creation_completed = appData.com_wealth_creation_completed
  let com_projects_and_groups_completed = appData.com_projects_and_groups_completed
  let com_education_completed = appData.com_education_completed

  let phil_charitable_involvement_completed = appData.phil_charitable_involvement_completed
  let phil_volunteering_completed = appData.phil_volunteering_completed
  let phil_pro_bono_completed = appData.phil_pro_bono_completed
  let phil_fund_raising_completed = appData.phil_fund_raising_completed
  let phil_financial_and_kind_gifts_completed = appData.phil_financial_and_kind_gifts_completed

  if(
    !company_details_completed || 
    !introduction_completed ||
    !env_energy_completed ||
    !env_natural_resource_completed ||
    !env_travel_completed ||
    !env_supply_chain_management_completed ||
    !env_waste_completed ||
    !wrk_training_completed ||
    !wrk_labour_practices_completed ||
    !wrk_ethical_practices_completed ||
    !wrk_governance_completed ||
    !wrk_policies_completed ||
    !com_engagement_completed ||
    !com_local_issues_completed ||
    !com_wealth_creation_completed ||
    !com_projects_and_groups_completed ||
    !com_education_completed ||
    !phil_charitable_involvement_completed ||
    !phil_volunteering_completed ||
    !phil_pro_bono_completed ||
    !phil_fund_raising_completed ||
    !phil_financial_and_kind_gifts_completed
  ){
    return Swal.fire({
      title: "You are yet to complete your application",
      confirmButtonColor: '#00a19a'
    })
  }

  fetch(`/assessment_and_tips/${ID}`, {
    method: "PUT", 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if(data.success){
      axios.post('/api/application/completed')
      
      Swal.fire({
        title: "Thank You For Your Application!",
        confirmButtonColor: '#00a19a'
      }).then(function(){
        fetch(`/logout`, {
          method: "DELETE"
        }).then(() => window.location.href = '/login')
      });
    }else{
      Swal.fire({
        title: "Failed to submit. Please try again",
        confirmButtonColor: '#00a19a'
      })              
    }
  })
}