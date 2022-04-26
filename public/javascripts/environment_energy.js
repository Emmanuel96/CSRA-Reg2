const ID = sessionStorage.getItem("csra_user");

function getEnvEnergy(){
  var docData = ""

  axios.get(`/environment_energy/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('env_energy_textarea').value = docData.env_energy
  })
}
getEnvEnergy()

function updateEnvironmentEnergy(){
  event.preventDefault(); 

  var env_energy = document.getElementById('env_energy_textarea').value;
  var env_energy_completed = true

  if(!env_energy){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    env_energy,
    env_energy_completed
  }

  fetch(`/environment_energy/${ID}`, {
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
          title: "Successfully submitted Environment Energy",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_natural_resource"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}