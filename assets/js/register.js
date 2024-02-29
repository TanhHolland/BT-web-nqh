// var checkAccount = (User) => {
//     let username = document.forms['form-login']['username']
//     let password = document.forms['form-login']['password']
//     if (username.value == User.username) {
//         if (password.value == User.password) {
//             return true
//         }
//     }
//     return false
// }
// var API = 'http://localhost:3000/User'
// fetch(API) 
//     .then((response) => response.json())
//     .then((listUser) => {
//         let username = document.forms['form-login']['username']
//         isSuccess = false;
//         for (let user in listUser) {
//             if (checkAccount(user)) {
//                 isSuccess = true
//             }
//             else {
//                 username.insertAdjacentText("afterend", 'Tai khoan khong dung');
//             }
//         }
//     })
let username = document.getElementsByClassName('username-login')
console.log(username.value)