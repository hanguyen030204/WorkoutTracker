import { auth } from "../init.js";
import { autoLogin, login, logout, loadCurrentUserData } from "../models/user.js";

// tự động đăng nhập
autoLogin();

// truy xuất form đăng nhập
const $loginForm = document.getElementById('login-form');

// truy xuất các thẻ báo lỗi
const $emailError = document.getElementById('email-error');
const $passwordError = document.getElementById('password-error');

// xử lý khi form đăng nhập được submit
$loginForm.onsubmit = function (event) {
    // chặn gửi dữ liệu đến action của form -> xử lý dữ liệu của form ngay trên trang web
    event.preventDefault();

    // lấy dữ liệu người dùng nhập vào các ô input, select
    let email = $loginForm.email.value;
    let password = $loginForm.password.value;

    // xóa nội dung của các thẻ thông báo lỗi
    $emailError.innerHTML = '';
    $passwordError.innerHTML = '';

    // kiểm tra tính hợp lệ của dữ liệu nhập vào
    let isPassed = true;

    if (email == '') {
        isPassed = false;
        $emailError.innerHTML = 'Email không được bỏ trống';
    }

    if (password == '') {
        isPassed = false;
        $passwordError.innerHTML = 'Mật khẩu không được bỏ trống';
    }

    if (isPassed) {
        login(email, password).then(function () {
            loadCurrentUserData().then(function () {
                // chuyển hướng sang trang danh sách bài tập
                window.location = './exercise_list.html';
            });
        }).catch(function (error) {
            console.log(error.message);
            if (error.message.includes('auth/wrong-password') || error.message.includes('auth/user-not-found'))
                $emailError.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác!';
        });

    }
}