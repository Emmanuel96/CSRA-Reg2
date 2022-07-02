const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getPhilCharitable(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('charitable_inv').value = docData.phil_charitable_involvement
  })
}
getPhilCharitable()

function updatePhilCharitableInv(){
  event.preventDefault(); 

  var phil_charitable_involvement = document.getElementById('charitable_inv').value;
  var phil_charitable_involvement_completed = true

  if(!phil_charitable_involvement){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true

  var data = {
    phil_charitable_involvement,
    phil_charitable_involvement_completed
  }

  fetch(`/philanthropy_charitable_involvement/${ID}`, {
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
          title: "Successfully submitted Philanthropy Charitable Involvement",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/philanthropy_volunteering"
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