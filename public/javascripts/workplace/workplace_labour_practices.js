const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getWrkLabour(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('wrk_labour_practices').value = docData.wrk_labour_practices
  })
}
getWrkLabour()

function updateWorkPlaceLabourPractice(){
  event.preventDefault(); 

  var wrk_labour_practices = document.getElementById('wrk_labour_practices').value;
  var wrk_labour_practices_completed = true

  if(!wrk_labour_practices){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true

  var data = {
    wrk_labour_practices,
    wrk_labour_practices_completed
  }

  fetch(`/workplace_labour_practices/${ID}`, {
      method: "PUT", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if(data.success){
        document.getElementById('submit_btn').innerText = "Submit"

        document.getElementById('submit_btn').disabled = false

        Swal.fire({
          title: "Successfully submitted Workplace Labour Practices",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/workplace_ethical_practises"
        });
      }else{
        document.getElementById('submit_btn').innerText = "Submit"

        document.getElementById('submit_btn').disabled = false
        
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}