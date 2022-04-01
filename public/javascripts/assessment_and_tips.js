function updateAssessments(){
  event.preventDefault(); 

  fetch('/assessment_and_tips/624470af18e7d40db84ff6aa', {
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
          window.location.href = "/login"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}