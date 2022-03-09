function loginSubmit(event){
    event.preventDefault(); 

    var email = $('#input_email').val()
    var password = $('#input_password').val()

    if(!email || !password || email.length < 0 || password.length <0){
        Swal.fire("Please enter email and password")
    }
    
    var data = {email, password}

    fetch('/auth/login', {
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
                    text: "Successfully Logged in",
                    confirmButtonText: "Ok, got it!",
                }).then(function() {
                    window.location.href = "/auth/page1"
                });
        }else{
            Swal.fire(data.message)
                
        }
    })
}

var login_form = $('#login_form');
$('#login_form').on('submit', loginSubmit);