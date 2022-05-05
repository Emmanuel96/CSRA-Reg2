const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getWrkGovernance(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('wrk_governance_textarea').value = docData.wrk_governance
  })
}
getWrkGovernance()

function updateWorkPlaceGovernance(){
  event.preventDefault(); 

  var wrk_governance = document.getElementById('wrk_governance_textarea').value;
  var wrk_governance_completed = true

  if(!wrk_governance){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    wrk_governance,
    wrk_governance_completed
  }

  fetch(`/workplace_governance/${ID}`, {
      method: "PUT", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if(data.success){
        Swal.fire({
          title: "Successfully submitted Workplace Governance",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/workplace_policies"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}