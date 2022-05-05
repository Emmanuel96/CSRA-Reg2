const ID = sessionStorage.getItem("csra_user");
var docData = ""

function getPhilFinancial(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById('phil_financial_textarea').value = docData.phil_financial_and_kind_gifts
  })
}
getPhilFinancial()

function updatePhilFinancial(){
  event.preventDefault(); 

  var phil_financial_and_kind_gifts = document.getElementById('phil_financial_textarea').value;
  var phil_financial_and_kind_gifts_completed = true

  if(!phil_financial_and_kind_gifts){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    phil_financial_and_kind_gifts,
    phil_financial_and_kind_gifts_completed
  }

  fetch(`/philanthropy_financial_and_kind_gifts/${ID}`, {
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
          title: "Successfully submitted Philanthropy Financial/Kind Gifts",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/philanthropy_supporting_documents"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}