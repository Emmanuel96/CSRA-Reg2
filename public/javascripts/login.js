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
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify(data)
    }).then((messages) => {
        console.log(messages.error)
    }) 
    // .then(messages => {
    //     if(messages.error){
            // Swal.fire({
            //     title: messages.error,
            //     confirmButtonColor: '#00a19a'
            // })
    //     }else{
    //         window.location.href = "/company_details"
    //     }
    // })
}

var login_form = $('#login_form');
$('#login_form').on('submit', loginSubmit);