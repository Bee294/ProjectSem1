
var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function (){
        validateForm();
    }
}
function validateForm(){
    var usernameInput = document.forms["member"].elements["username"];
    var username = usernameInput.value;
    if (username.length == 0){
        usernameInput.nextElementSibling.innerHTML = "Invalid username!";
    }else if (username.length < 6){
        usernameInput.nextElementSibling.innerHTML = "Your username longer than 6 characters!";
    }else {
        usernameInput.nextElementSibling.innerHTML = "";
    }

    var passwordInput = document.forms["member"].elements["password"];
    var password = passwordInput.value;
    if (password.length == 0){
        passwordInput.nextElementSibling.innerHTML = "Invalid password!";
    }else if (password.length <7){
        passwordInput.nextElementSibling.innerHTML = "Your password longer than 7 characters!";
       return  false;
    }else {
        passwordInput.nextElementSibling.innerHTML = "";
    }
    var rePasswordInput = document.forms["member"].elements["repassword"];
    var rePassword = rePasswordInput.value;
    if (rePassword !== password){
        rePasswordInput.nextElementSibling.innerHTML = "Those passwords didn’t match. Try again!";
    }else{
        rePasswordInput.nextElementSibling.innerHTML = "";
    }

    var emailInput = document.forms["member"].elements["email"];
    var email = emailInput.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailInput.value.match(validRegex)) {
        emailInput.nextElementSibling.innerHTML = "";

        document.forms.email.focus();

        return true;

    } else {
        emailInput.nextElementSibling.innerHTML = "Invalid email address!";

        document.forms.email.focus();

        return false;

    }
    var object = {
        "data": {
            "type": "Member",
            "attributes": {
                "username": username,
                "password": password,
                "email": email,
            }
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", MEMBER_API, true);
    xhr.send(JSON.stringify(object));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
            document.getElementById("total-msg").classList = "success-msg";
            document.getElementById("total-msg").innerHTML = "success register";
        }else {
            if (xhr.readyState === XMLHttpRequest.DONE){
                var responseObject = JSON.parse(xhr.responseText);
                document.getElementById("total-msg").classList = "error-msg";
                document.getElementById("total-msg").innerHTML =
                    responseObject.errors[0].title + "" + responseObject.errors[0].detail;
            }
        }
    };
}