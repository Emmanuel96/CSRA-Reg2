const ID = sessionStorage.getItem("csra_user");

function getComLocalIssues(){
  var docData = ""

  axios.get(`/community_local_issues/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('com_local_issues_textarea').value = docData.com_local_issues
  })
}
getComLocalIssues()

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

  fetch(`/community_local_issues/${ID}`, {
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