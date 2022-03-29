function updateWorkPlaceTraining(){
  event.preventDefault(); 

  var wrk_training = document.getElementById('wrk_training').value;
  var wrk_training_completed = true

  if(!wrk_training){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    wrk_training,
    wrk_training_completed
  }

  fetch('/workplace_training/6242dcbbec4b0015492d3551', {
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
          title: "Successfully submitted Workplace Training",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/workplace_labour_practices"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}