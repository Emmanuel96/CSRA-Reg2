function resetPasswordSubmit(event){
  event.preventDefault(); 

  var password = $('#input_passwprd').val()
  var confirm_password = $('#input_confirm_password').val()
  
  if(!password || !confirm_password){
    return Swal.fire({
      title: "Password fields cannot be empty",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {password, confirm_password}

  fetch('/reset_password', {
      method: "POST", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if(data.success){
        Swal.fire({
          text: "Password reset Successfull!",
          confirmButtonText: "Ok, got it!",
        })
      }else{
          Swal.fire(data.message)
      }
  })
}

var reset_password_form = $('#reset_password_form');
$('#reset_password_form').on('submit', resetPasswordSubmit);