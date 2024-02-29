var API = "http://localhost:3000/User";

var validateLogin = () => {
    let username = document.forms["form-login"]["username"].value;
    let password = document.forms["form-login"]["password"].value;
    let nameError = document.getElementById("username__error");
    let passwordError = document.getElementById("password__error");
    let accountError = document.getElementById("account__error");

    // Khi submit thì dòng thông báo biến mất
    nameError.innerHTML = "";
    passwordError.innerHTML = "";
    accountError.innerHTML = "";

    if (username === "") {
        nameError.innerHTML = "Vui lòng điền tài khoản";
        return false;
    }
    if (password === "") {
        passwordError.innerHTML = "Vui lòng điền mật khẩu";
        return false;
    }
    // GET API
    fetch(API)
        .then(response => response.json())
        .then(listUser => {
            isValid = listUser.some((user) => {
                return user.username === username && user.password === password;
            });
            console.log(isValid)
            if (!isValid) {
                accountError.innerHTML = "Tài khoản hoặc mật khẩu không hợp lệ";
            }
        })
    return false;
};
var validateSignup = () => {
    let username = document.forms["form-register"]["username"].value;
    let email = document.forms["form-register"]["email"].value;
    let password = document.forms["form-register"]["password"].value;
    let passwordChecked = document.forms["form-register"]["password-checked"].value;

    let nameError = document.querySelector(".form-register #username__error");
    let emailError = document.querySelector(".form-register #email__error");
    let passwordError = document.querySelector(".form-register #password__error");
    let passwordCheckedError = document.querySelector(".form-register #password__error-checked");
    // Khi submit thì dòng thông báo biến mất
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    passwordCheckedError.innerHTML = "";
    if (username === "") {
        nameError.innerHTML = "Vui lòng điền tài khoản";
        return false;
    }
    if (email === "") {
        emailError.innerHTML = "Vui lòng điền email";
        return false;
    }
    if (password === "") {
        passwordError.innerHTML = "Vui lòng điền mật khẩu";
        return false;
    }
    if (passwordChecked === "") {
        passwordCheckedError.innerHTML = "Vui lòng điền mật khẩu";
        return false;
    }
    if (passwordChecked != password) {
        passwordCheckedError.innerHTML = "Mật khẩu không trùng khớp";
        return false;
    }
    // GET API
    fetch(API)
        .then(response => response.json())
        .then(listUser => {
            isValid = listUser.some((user) => {
                return user.username === username && user.password === password;
            });
            console.log(isValid)
            if (!isValid) {
                accountError.innerHTML = "Tài khoản hoặc mật khẩu không hợp lệ";
            }
        })
    return false;
}