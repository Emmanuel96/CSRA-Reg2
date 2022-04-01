function getComEducation(){
  var docData = ""

  axios.get('/community_education/624470af18e7d40db84ff6aa').then(result => {
    docData = result.data
    console.log(docData)
  }).then(() => {
    document.getElementById('com_education_textarea').value = docData.com_education
  })
}
getComEducation()

function updateCommunityEducation(){
  event.preventDefault(); 

  var com_education = document.getElementById('com_education_textarea').value;
  var com_education_completed = true

  if(!com_education){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    com_education,
    com_education_completed
  }

  fetch('/community_education/624470af18e7d40db84ff6aa', {
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
          title: "Successfully submitted Community Education",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/community_supporting_documents"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}