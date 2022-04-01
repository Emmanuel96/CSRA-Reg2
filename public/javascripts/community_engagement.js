function getComEngagement(){
  var docData = ""

  axios.get('/community_engagement/624470af18e7d40db84ff6aa').then(result => {
    docData = result.data
    console.log(docData)
  }).then(() => {
    document.getElementById('com_engagement_textarea').value = docData.com_engagement
  })
}
getComEngagement()

function updateCommunityEngagement(){
  event.preventDefault(); 

  var com_engagement = document.getElementById('com_engagement_textarea').value;
  var com_engagement_completed = true

  if(!com_engagement){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    com_engagement,
    com_engagement_completed
  }

  fetch('/community_engagement/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Community Engagement",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_local_issues"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}