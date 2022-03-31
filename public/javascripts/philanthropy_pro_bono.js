function updatePhilProBono(){
  event.preventDefault(); 

  var phil_pro_bono = document.getElementById('phil_probono_textarea').value;
  var phil_pro_bono_completed = true

  if(!phil_pro_bono){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    phil_pro_bono,
    phil_pro_bono_completed
  }

  fetch('/philanthropy_pro_bono/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Philanthropy Pro Bono",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/philanthropy_fund_raising"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}