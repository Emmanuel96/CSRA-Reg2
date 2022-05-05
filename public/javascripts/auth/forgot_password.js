function forgotPasswordSubmit(event){
  event.preventDefault(); 

  var email = $('#input_email').val()

  if(!email){
    return Swal.fire({
      title: "Please enter the email you used to register",
      confirmButtonColor: '#00a19a'
    })
  }
  
  var data = {email}

  fetch('/forgot_password', {
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
          confirmButtonColor: '#00a19a'
        })
      }else{
          Swal.fire({
            title: data.message,
            confirmButtonColor: '#00a19a'
          })
      }
  })
}

var forgot_password_form = $('#forgot_password_form');
$('#forgot_password_form').on('submit', forgotPasswordSubmit);