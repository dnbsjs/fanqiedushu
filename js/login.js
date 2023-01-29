var error = document.getElementsByClassName("error");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");

email.onchange = checkEmail;
pwd.onchange = checkPwd;

function checkEmail() {
    if (email.value.indexOf("@") != -1) {
        error[0].style.display = "none";
        return 1;
    }
    else {
        error[0].style.display = "block";
        return 0;
    }
}
function checkPwd() {
    if (pwd.value.length >= 8 && pwd.value.length <= 16) {
        error[1].style.display = "none";
        return 1;
    }
    else {
        error[1].style.display = "block";
        return 0;
    }
}

function login() {
    if (checkEmail() && checkPwd()) {
        alert("登录成功");
    }
}