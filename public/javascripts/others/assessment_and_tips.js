const ID = sessionStorage.getItem("csra_user");

function updateAssessments(){
  event.preventDefault(); 

  fetch(`/assessment_and_tips/${ID}`, {
      method: "PUT", 
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      if(data.success){
        Swal.fire({
          title: "Thank You For Your Application!",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          fetch(`/logout`, {
            method: "DELETE"
          }).then(() => window.location.href = '/login')
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}