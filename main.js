// var regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

function emailValid(){
      var email = document.getElementById("email");
      var emailWarning = document.getElementById("emailWarning");

  if (email.value == "") {
      changeStyle(emailWarning, "Whoops! It looks like you forgot to add your email");
  }else if (!regex.test(email.value)){
      changeStyle(emailWarning, 'Please provide a valid email address');
    //   email.value="";
  }else{
    changeStyle(emailWarning, "Thank You For Subscribing!");
    emailWarning.style.color = "hsl(223, 87%, 63%)";
    email.style.borderColor = "hsl(223, 87%, 63%)";
  }
  }
function changeStyle(id,info) {
  id.innerHTML = info;
  email.style.borderColor = "hsl(354, 100%, 66%)";
  email.setAttribute("placeholder", "example@email.com");
  email.style.color = "hsl(209, 33%, 12%)";
}

