const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getPhilProBono(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('phil_probono_textarea').value = docData.phil_pro_bono
  })
}
getPhilProBono()

function updatePhilProBono(){
  event.preventDefault(); 

  var phil_pro_bono = document.getElementById('phil_probono_textarea').value;
  var phil_pro_bono_completed = true

  if(!phil_pro_bono){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }

  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true
  
  var data = {
    phil_pro_bono,
    phil_pro_bono_completed
  }

  fetch(`/philanthropy_pro_bono/${ID}`, {
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
          title: "Successfully submitted Philanthropy Pro Bono",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/philanthropy_fund_raising"
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