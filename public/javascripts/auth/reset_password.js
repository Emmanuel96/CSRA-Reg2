let token = window.location.href.split('/').pop()

function resetPassword(){
  event.preventDefault()

  let password = document.getElementById('password').value
  let confirm_password = document.getElementById('confirm_password').value

  let data = { password, confirm_password }

  if (!password || !confirm_password) {
    Swal.fire({
      title: "Please fill in password fields",
      confirmButtonColor: "#00a19a",
    })
  }else if (password.length < 6){
    Swal.fire({
      title: "Password must be 6 characters or more",
      confirmButtonColor: "#00a19a",
    })
  }else if (password !== confirm_password){
    Swal.fire({
      title: "Passwords do not match",
      confirmButtonColor: "#00a19a",
    })
  }else{
    document.getElementById('reset_btn').innerText = "Setting..."
    document.getElementById('reset_btn').disabled = true

    fetch(`/api/auth/reset_password/${token}`, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    }).then(data => (
      data.json()
    )).then(res => {
      if(res.success){
        document.getElementById('reset_btn').innerText = "SET PASSWORD"

        document.getElementById('reset_btn').disabled = false

        Swal.fire({
          title: "Your password was successfully updated",
          confirmButtonColor: "#00a19a",
        }).then(() => window.location.href = '/login') 
      }
    }).catch(() => {
      document.getElementById('reset_btn').innerText = "Retry"

      document.getElementById('reset_btn').disabled = false

      Swal.fire({
        title: "Snap!",
        text: "Something went wrong",
        confirmButtonColor: "#00a19a",
      })
    })
  }
}