function updateCompanyDetails(){
  event.preventDefault(); 

  var orgTurnOverRadios = document.getElementsByName('turnover');
  var orgTurnOverVal = ""
  for (var radio of orgTurnOverRadios){
    if (radio.checked) {
      orgTurnOverVal = radio.value
    }
  }

  var orgSizeRadios = document.getElementsByName('orgSize');
  var orgSizeVal = ""
  for (var radio of orgSizeRadios){
    if (radio.checked) {
      orgSizeVal = radio.value
    }
  }

  var contact_person = document.getElementById("contact_person").value
  var organisation_name = document.getElementById("organisation_name").value
  var organisation_address = document.getElementById("organisation_address").value
  var organisation_nationality = document.getElementById("organisation_nationality").value
  var postal_code = document.getElementById("postal_code").value
  var email_address = document.getElementById("email_address").value
  var mobile_number = document.getElementById("mobile_number").value
  var telephone_number = document.getElementById("telephone_number").value
  var organisation_size = orgSizeVal
  var organisation_turnover = orgTurnOverVal
  var company_details_completed = true

  if(!contact_person || !organisation_name || !organisation_address || !organisation_nationality || !postal_code || !email_address || !mobile_number || !telephone_number || !organisation_size || !organisation_turnover){
    return Swal.fire({
      title: "Please complete all input fields",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    contact_person,
    organisation_name,
    organisation_address,
    organisation_nationality,
    postal_code,
    email_address,
    mobile_number,
    telephone_number,
    organisation_size,
    organisation_turnover,
    company_details_completed
  }

  fetch('/company_details/6242dcbbec4b0015492d3551', {
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
          title: "Successfully submitted Company Details",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/application_introduction"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}