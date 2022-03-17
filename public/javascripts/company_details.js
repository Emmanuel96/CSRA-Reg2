// function post_company_details(event){
//   event.preventDefault(); 
var body = req.body

var user_id = body.user_id
var contact_person = body.contact_person
var organisation_name = body.organisation_name
var organisation_address = body.organisation_address
var organisation_nationality = body.organisation_nationality
var postal_code = body.postal_code
var email_address = body.email_address
var mobile_number = body.mobile_number
var telephone_number = body.telephone_number
var organisation_size = body.organisation_size
var organisation_turnover = body.organisation_turnover
var completed = body.completed

var data = {
  user_id,
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
  completed
}

fetch('/company_details', {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log("successfully added company details")
})
// }

// var registration_form = $('#registration_form');
// $('#registration_form').on('submit', registerSubmit);