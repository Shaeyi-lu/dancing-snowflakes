//Confirm password
var pass = document.getElementById("pass");
var confirmpass = document.getElementById("confirmpass");

console.log(pass, confirmpass);

function validatePass() {
    if (pass.value != confirmpass.value) {
        confirmpass.setCustomValidity("Passwords Don't Match");
    } else {
        confirmpass.setCustomValidity("");
    }
}