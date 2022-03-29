function updateEnvironmentTravel(){
  event.preventDefault(); 

  var env_travel = document.getElementById('env_travel').value;
  var env_travel_completed = true

  if(!env_travel){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    env_travel,
    env_travel_completed
  }

  fetch('/environment_travel/6242dcbbec4b0015492d3551', {
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
          title: "Successfully submitted Environment Travel",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_supply_chain_management"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}