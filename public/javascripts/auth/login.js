function loginSubmit(event) {
  event.preventDefault();

  var email = $("#input_email").val();
  var password = $("#input_password").val();

  if (!email || !password || email.length < 0 || password.length < 0) {
    return Swal.fire({
      title: "Please enter email and password",
      confirmButtonColor: "#00a19a",
    });
  }

  var data = { email, password };

  const request = fetch("/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
  
  request
    .then(data => data.json())
    .then((response) => {
      var id = response.userID
      sessionStorage.setItem("csra_user", id)
      window.location.href = "/company_details"
    }).catch(() => {
      Swal.fire({
        title: "Email or password is incorrect",
        confirmButtonColor: "#00a19a",
      });
    })
}

var login_form = $("#login_form");
$("#login_form").on("submit", loginSubmit);