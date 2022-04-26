const ID = sessionStorage.getItem("csra_user");

function getEnvNatural(){
  var docData = ""

  axios.get(`/environment_natural_resource/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('env_natural_resource').value = docData.env_natural_resource
  })
}
getEnvNatural()

function updateEnvironmentNaturalResource(){
  event.preventDefault(); 

  var env_natural_resource = document.getElementById('env_natural_resource').value;
  var env_natural_resource_completed = true

  if(!env_natural_resource){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    env_natural_resource,
    env_natural_resource_completed
  }

  fetch(`/environment_natural_resource/${ID}`, {
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
          title: "Successfully submitted Environment Natural Resources",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_travel"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}