var API = "http://localhost:3000/User";
var validateForm = () => {
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
            else {
                document.getElementById('form-fill').submit();
            }
        })
    return false;
};
