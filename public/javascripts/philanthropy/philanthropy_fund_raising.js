const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getPhilFundRaising(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('phil_fund_raise_textarea').value = docData.phil_fund_raising
  })
}
getPhilFundRaising()

function updatePhilFundRaising(){
  event.preventDefault(); 

  var phil_fund_raising = document.getElementById('phil_fund_raise_textarea').value;
  var phil_fund_raising_completed = true

  if(!phil_fund_raising){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }

  document.getElementById('submit_btn').innerText = "Submitting"

  document.getElementById('submit_btn').disabled = true
  
  var data = {
    phil_fund_raising,
    phil_fund_raising_completed
  }

  fetch(`/philanthropy_fund_raising/${ID}`, {
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
          title: "Successfully submitted Philanthropy Fund Raising",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/philanthropy_financial_and_kind_gifts"
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