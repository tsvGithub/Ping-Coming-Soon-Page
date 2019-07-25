var regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

function emailValid(){
      var email = document.getElementById("email");
      var emailWarning = document.getElementById("emailWarning");

  if (email.value == "") {
      changeStyle(emailWarning, "Whoops! It looks like you forgot to add your email");
  }else if (!regex.test(email.value)){
      changeStyle(emailWarning, 'Please provide a valid email address');
      email.value="";
  }else{
    changeStyle(emailWarning, "Thank You For Subscribing!");
    emailWarning.style.color = "hsl(0, 0%, 59%)";
    email.style.borderColor = "hsl(0, 0%, 59%)";
  }
  }
function changeStyle(id,info) {
  id.innerHTML = info;
  email.style.borderColor = "hsl(354, 100%, 66%)";
  email.setAttribute("placeholder", "address@email.com");
}

