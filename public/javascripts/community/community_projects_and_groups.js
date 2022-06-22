const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getComProjects(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('com_projects_textarea').value = docData.com_projects_and_groups
  })
}
getComProjects()

function updateCommunityProjects(){
  event.preventDefault(); 

  var com_projects_and_groups = document.getElementById('com_projects_textarea').value;
  var com_projects_and_groups_completed = true

  if(!com_projects_and_groups){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }

  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true
  
  var data = {
    com_projects_and_groups,
    com_projects_and_groups_completed
  }

  fetch(`/community_projects_and_groups/${ID}`, {
      method: "PUT", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if(data.success){
        document.getElementById('submit_btn').innerText = "Submit"

        document.getElementById('submit_btn').disabled = false
        
        Swal.fire({
          title: "Successfully submitted Community Projects & Groups",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_education"
        });
      }else{
        document.getElementById('submit_btn').innerText = "Submit"

        document.getElementById('submit_btn').disabled = false
        
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}