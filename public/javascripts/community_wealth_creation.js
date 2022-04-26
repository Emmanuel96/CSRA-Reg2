const ID = sessionStorage.getItem("csra_user");

function getComWealthCreation(){
  var docData = ""

  axios.get(`/community_wealth_creation/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('com_wealth_creation_textarea').value = docData.com_wealth_creation
  })
}
getComWealthCreation()

function updateCommunityWealthCreation(){
  event.preventDefault(); 

  var com_wealth_creation = document.getElementById('com_wealth_creation_textarea').value;
  var com_wealth_creation_completed = true

  if(!com_wealth_creation){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    com_wealth_creation,
    com_wealth_creation_completed
  }

  fetch(`/community_wealth_creation/${ID}`, {
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
          title: "Successfully submitted Community Wealth Creation",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_projects_and_groups"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}