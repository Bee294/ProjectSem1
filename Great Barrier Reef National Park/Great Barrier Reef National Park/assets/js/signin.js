
var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function (){
        validateForm();
    }
}
function validateForm(){



    var passwordInput = document.forms["member"].elements["password"];
    var password = passwordInput.value;

     if (password.length == 0){
        passwordInput.nextElementSibling.innerHTML = "Invalid password!";
    }else if(password.length<7){
         passwordInput.nextElementSibling.innerHTML = "Your password longer than 7 characters!";
     }else {
        passwordInput.nextElementSibling.innerHTML = "";
    }

    var emailInput = document.forms["member"].elements["email"];
    var email = emailInput.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailInput.value.match(validRegex)) {
        emailInput.nextElementSibling.innerHTML = "";
        document.forms.email.focus();
    } else {
        emailInput.nextElementSibling.innerHTML = "Invalid email address!";
        document.forms.email.focus();
    }
}