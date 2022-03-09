function registerSubmit(event){
  event.preventDefault(); 

  var firstName = $('#input_first_name').val()
  var lastName = $('#input_last_name').val()
  var email = $('#input_email').val()
  var password = $('#input_password').val()

  if(!email || !password || !lastName || !firstName){
    Swal.fire("Please complete all fields")
  }else if(!/\S+@\S+\.\S+/.test(email)){
    Swal.fire("Email address is invalid")
  }else if(password.length < 6){
    Swal.fire("Password must be 6 characters or more")
  }else{
    var data = {email, password, firstName, lastName}

    fetch('/auth/register', {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
          swal.fire({
                    text: "Successfully registered!",
                    confirmButtonText: "Login",
                }).then(function() {
                    window.location.href = "/auth/login"
                });
        }else{
            Swal.fire(data.message)
                
        }
    })
  }

}

var registration_form = $('#registration_form');
$('#registration_form').on('submit', registerSubmit);