const ID = sessionStorage.getItem("csra_user");

function updateAssessments(){
  event.preventDefault(); 
  document.getElementById('nxt_btn').innerText = "Please wait..."

  document.getElementById('nxt_btn').disabled = true

  fetch(`/assessment_and_tips/${ID}`, {
    method: "PUT", 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => {
    document.getElementById('nxt_btn').innerText = "Next"

    document.getElementById('nxt_btn').disabled = false
    
    window.location.href = '/login'})
}