function updateCommunityLocalIssues(){
  event.preventDefault(); 

  var com_local_issues = document.getElementById('com_local_issues_textarea').value;
  var com_local_issues_completed = true

  if(!com_local_issues){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    com_local_issues,
    com_local_issues_completed
  }

  fetch('/community_local_issues/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Community Local Issues",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_wealth_creation"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}