function registerSubmit(event){
  event.preventDefault(); 

  var firstName = $('#input_first_name').val()
  var lastName = $('#input_last_name').val()
  var email = $('#input_email').val()
  var password = $('#input_password').val()

  if(!email || !password || !lastName || !firstName){
    Swal.fire({
      title: "Please complete all fields",
      confirmButtonColor: '#00a19a'
    })
  }else if(!/\S+@\S+\.\S+/.test(email)){
    Swal.fire({
      title: "Email address is invalid", 
      confirmButtonColor: '#00a19a'
    })
  }else if(password.length < 6){
    Swal.fire({
      title: "Password must be 6 characters or more",
      confirmButtonColor: '#00a19a'
    })
  }else{
    document.getElementById('signin_btn').innerText = "Signing up..."
    document.getElementById('signin_btn').disabled = true

    var data = {email, password, firstName, lastName}

    fetch('/register', {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
          document.getElementById('signin_btn').innerText = "Sign Up"
          document.getElementById('signin_btn').disabled = false

          swal.fire({
              title: "Successfully registered!",
              confirmButtonText: "Login",
              confirmButtonColor: '#00a19a'
          }).then(function() {
              window.location.href = "/login"
          });
        }else{
          document.getElementById('signin_btn').innerText = "Sign Up"
          document.getElementById('signin_btn').disabled = false

          Swal.fire({
            title: data.message,
            confirmButtonColor: '#00a19a'
          }) 
        }
    })
  }
}

var registration_form = $('#registration_form');
$('#registration_form').on('submit', registerSubmit);