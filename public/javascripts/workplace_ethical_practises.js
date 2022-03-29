function updateWorkPlaceEthicalPractice(){
  event.preventDefault(); 

  var wrk_ethical_practices = document.getElementById('wrk_ethical_practice_textarea').value;
  var wrk_ethical_practices_completed = true

  if(!wrk_ethical_practices){
    return Swal.fire({
      title: "Please complete text field",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {
    wrk_ethical_practices,
    wrk_ethical_practices_completed
  }

  fetch('/workplace_ethical_practises/6242dcbbec4b0015492d3551', {
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
          title: "Successfully submitted Workplace Ethical Practises",
          confirmButtonColor: '#00a19a'
        }).then(function(){
          window.location.href = "/workplace_governance"
        });
      }else{
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        })              
      }
  })
}