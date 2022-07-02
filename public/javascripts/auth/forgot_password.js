function forgotPassword(){
  event.preventDefault()

  let email = document.getElementById('email').value 

  if (!email) {
    Swal.fire({
      title: "Please enter your email",
      confirmButtonColor: "#00a19a",
    })
  }else if (!/\S+@\S+\.\S+/.test(email)){
    Swal.fire({
      title: "Please enter a valid email",
      confirmButtonColor: "#00a19a",
    })
  }else{
    document.getElementById('send_btn').innerText = "Sending..."
    document.getElementById('send_btn').disabled = true
  
    var data = { email }
  
    fetch('/api/auth/forgot_password', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
      }, 
      body: JSON.stringify(data)
    }).then(data => (
      data.json()
    )).then(res => {
      if(res.success){
        document.getElementById('send_btn').innerText = 'RESEND LINK'
        document.getElementById('send_btn').disabled = false
  
        Swal.fire({
          title: "Sent! Check your email",
          confirmButtonColor: "#00a19a",
        })
      }else if(!res.success){
        document.getElementById('send_btn').innerText = "SEND"
        document.getElementById('send_btn').disabled = false
  
        Swal.fire({
          title: "No user with this email exists",
          confirmButtonColor: "#00a19a",
        })
      }
    }).catch(() => {
      Swal.fire({
        title: "Snap!",
        text: "Something went wrong",
        confirmButtonColor: "#00a19a",
      })
    })
  }
}