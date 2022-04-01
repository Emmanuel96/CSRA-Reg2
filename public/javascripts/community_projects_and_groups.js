function getComProjects(){
  var docData = ""

  axios.get('/community_projects_and_groups/624470af18e7d40db84ff6aa').then(result => {
    docData = result.data
    console.log(docData)
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
  
  var data = {
    com_projects_and_groups,
    com_projects_and_groups_completed
  }

  fetch('/community_projects_and_groups/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Community Projects & Groups",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_education"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}