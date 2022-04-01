function getPhilVolunteering(){
  var docData = ""

  axios.get('/philanthropy_volunteering/624470af18e7d40db84ff6aa').then(result => {
    docData = result.data
    console.log(docData)
  }).then(() => {
    document.getElementById('phil_volunteering_textarea').value = docData.phil_volunteering
  })
}
getPhilVolunteering()

function updatePhilVolunteering(){
  event.preventDefault(); 

  var phil_volunteering = document.getElementById('phil_volunteering_textarea').value;
  var phil_volunteering_completed = true

  if(!phil_volunteering){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    phil_volunteering,
    phil_volunteering_completed
  }

  fetch('/philanthropy_volunteering/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Philanthropy Volunteering",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/philanthropy_pro_bono"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}