const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getComEngagement(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
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

  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true
  
  var data = {
    com_engagement,
    com_engagement_completed
  }

  fetch(`/community_engagement/${ID}`, {
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
          title: "Successfully submitted Community Engagement",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_local_issues"
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