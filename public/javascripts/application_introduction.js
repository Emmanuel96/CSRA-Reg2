function updateApplicationIntroduction(){
  event.preventDefault(); 

  var introduction = document.getElementById('introduction_textarea').value;
  var introduction_completed = true

  if(!introduction){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    introduction,
    introduction_completed
  }

  fetch('/application_introduction/6242dcbbec4b0015492d3551', {
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
          title: "Successfully submitted Application Introduction",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/environment_energy"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}