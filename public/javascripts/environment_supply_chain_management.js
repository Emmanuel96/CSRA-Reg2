const ID = sessionStorage.getItem("csra_user");

function getEnvSupplyChain(){
  var docData = ""

  axios.get(`/environment_supply_chain_management/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('env_supply_chain').value = docData.env_supply_chain_management
  })
}
getEnvSupplyChain()

function updateEnvironmentSupplyChain(){
  event.preventDefault(); 

  var env_supply_chain_management = document.getElementById('env_supply_chain').value;
  var env_supply_chain_management_completed = true

  if(!env_supply_chain_management){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    env_supply_chain_management,
    env_supply_chain_management_completed
  }

  fetch(`/environment_supply_chain_management/${ID}`, {
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
          title: "Successfully submitted Environment Supply Chain Management",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_waste"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}