function loginSubmit(event){
    event.preventDefault(); 

    var email = $('#input_email').val()
    var password = $('#input_password').val()

    if(!email || !password || email.length < 0 || password.length <0){
        return Swal.fire({
            title:"Please enter email and password",
            confirmButtonColor: '#00a19a'
        })
    }
    
    var data = {email, password}

    fetch('/login', {
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
                    confirmButtonColor: '#00a19a'
                }).then(function() {
                    window.location.href = "/company_details"
                });
        }else{
            Swal.fire({
                title: data.message,
                confirmButtonColor: '#00a19a'
            })
                
        }
    })
}

var login_form = $('#login_form');
$('#login_form').on('submit', loginSubmit);