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
  
  var data = {
    env_waste,
    env_waste_completed
  }

  fetch('/environment_waste/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Environment Waste",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_supporting_documents"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}