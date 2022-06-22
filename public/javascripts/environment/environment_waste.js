const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getEnvWaste(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('env_waste').value = docData.env_waste
  })
}
getEnvWaste()

function updateEnvironmentWaste(){
  event.preventDefault(); 

  var env_waste = document.getElementById('env_waste').value;
  var env_waste_completed = true

  if(!env_waste){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }

  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true
  
  var data = {
    env_waste,
    env_waste_completed
  }

  fetch(`/environment_waste/${ID}`, {
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
          title: "Successfully submitted Environment Waste",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_supporting_documents"
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