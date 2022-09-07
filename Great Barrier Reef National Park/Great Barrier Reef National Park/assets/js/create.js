
var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function (){
        validateForm();
    }
}
function validateForm(){
    var usernameInput = document.forms["member"].elements["nameblog"];
    var username = usernameInput.value;
    if (username.length == 0){
        usernameInput.nextElementSibling.innerHTML = "Invalid name blog!";

    }else {
        usernameInput.nextElementSibling.innerHTML = "";

    }
    var titleInput = document.forms["member"].elements["title"];
    var title = titleInput.value;
    if (title.length == 0){
        titleInput.nextElementSibling.innerHTML = "Invalid title blog!";

    }else {
        titleInput.nextElementSibling.innerHTML = "";

    }
    var contentInput = document.forms["member"].elements["content"];
    var content = contentInput.value;
    if (content.length == 0){
        contentInput.nextElementSibling.innerHTML = "Invalid content blog!";

    }else {
        contentInput.nextElementSibling.innerHTML = "";

    }
    var authorInput = document.forms["member"].elements["author"];
    var author = authorInput.value;
    if (author.length == 0){
        authorInput.nextElementSibling.innerHTML = "Invalid author blog!";

    }else {
        authorInput.nextElementSibling.innerHTML = "";

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
    var emailInput = document.forms["member"].elements["email"];
    var email = emailInput.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validRegex)) {
        emailInput.nextElementSibling.innerHTML = "";

        document.forms.email.focus();


    } else {
        emailInput.nextElementSibling.innerHTML = "Invalid email address!";

        document.forms.email.focus();

        return false;

    }
    return true;

}