const ID = sessionStorage.getItem("csra_user");
let docData = ""

function getCompanyDetails(){
  axios.get(`/api/application/${ID}`).then(result => {
    docData = result.data
  }).then(() => {
    document.getElementById("contact_person").value = docData.contact_person;
    document.getElementById("organisation_name").value = docData.organisation_name;
    document.getElementById("organisation_address").value = docData.organisation_address;
    document.getElementById("organisation_nationality").value = docData.organisation_nationality;
    document.getElementById("postal_code").value = docData.postal_code;
    document.getElementById("email_address").value = docData.email_address;
    document.getElementById("mobile_number").value = docData.mobile_number;
    document.getElementById("telephone_number").value = docData.telephone_number;

    var orgSizeRadios = document.getElementsByName('orgSize')

    var orgTurnOverRadios = document.getElementsByName('turnover');

    for (var radio of orgSizeRadios){
      if(radio.value === docData.organisation_size){
        radio.checked = true
      }
    }

    for (var radio of orgTurnOverRadios){
      if(radio.value === docData.organisation_turnover){
        radio.checked = true
      }
    }
  })
}
getCompanyDetails()

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
  }else{
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
  
    fetch(`/company_details/${ID}`, {
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
}





var company_details_completed = result.data.company_details_completed
var introduction_completed = result.data.introduction_completed
var assessment_and_tips = null

var env_part_one_completed = docData.env_energy_completed
var env_part_two_completed = null
var env_part_three_completed = null
var env_part_four_completed = null
var env_part_five_completed = null
var environment_completed = false
var environmentsDoc = null

var wrk_part_one_completed = null
var wrk_part_two_completed = null
var wrk_part_three_completed = null
var wrk_part_four_completed = null
var wrk_part_five_completed = null
var workplace_completed = false
var workplacesDoc = null

var com_part_one_completed = null
var com_part_two_completed = null
var com_part_three_completed = null
var com_part_four_completed = null
var com_part_five_completed = null
var community_completed = false
var communityDoc = null

var phil_part_one_completed = null
var phil_part_two_completed = null
var phil_part_three_completed = null
var phil_part_four_completed = null
var phil_part_five_completed = null
var philanthropy_completed = false
var philanthropyDoc = null


