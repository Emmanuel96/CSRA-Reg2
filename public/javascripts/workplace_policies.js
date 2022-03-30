function updateWorkPlacePolicies(){
  event.preventDefault(); 

  var wrk_policies = document.getElementById('wrk_policies').value;
  var wrk_policies_completed = true

  if(!wrk_policies){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    wrk_policies,
    wrk_policies_completed
  }

  fetch('/workplace_policies/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Workplace Policies",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/workplace_supporting_documents"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}