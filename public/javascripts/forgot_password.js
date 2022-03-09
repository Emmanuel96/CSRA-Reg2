function forgotPasswordSubmit(event){
  event.preventDefault(); 

  var email = $('#input_email').val()

  if(!email){
    return Swal.fire("Please enter the email you used to register")
  }
  
  var data = {email}

  fetch('/auth/forgot_password', {
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
          text: "Success! A reset link was sent to your email",
          confirmButtonText: "Ok, got it!",
        })
      }else{
          Swal.fire(data.message)
      }
  })
}

var forgot_password_form = $('#forgot_password_form');
$('#forgot_password_form').on('submit', forgotPasswordSubmit);