import { register } from "../models/user.js";

// truy xuất form đăng ký
const $registerForm = document.getElementById('register-form');

// truy xuất các thẻ báo lỗi
const $fullnameError = document.getElementById('fullname-error');
const $emailError = document.getElementById('email-error');
const $passwordError = document.getElementById('password-error');
const $passwordConfirmationError = document.getElementById('password-confirmation-error');

// xử lý khi form đăng ký được submit
$registerForm.onsubmit = function (event) {
    // chặn gửi dữ liệu đến action của form -> xử lý dữ liệu của form ngay trên trang web
    event.preventDefault();

    // lấy dữ liệu người dùng nhập vào các ô input, select
    let fullname = $registerForm.fullname.value;
    let age = $registerForm.age.value;
    let gender = $registerForm.gender.value;

    // lấy options được chọn của mục đích tập luyện
    // b1: lấy toàn bộ option và chuyển đổi về 1 mảng
    let $purposeOptions = [...$registerForm.purposes.options];
    // b2: lọc những option được lựa chọn
    let $selectedPurposeOptions = $purposeOptions.filter(option => option.selected);
    // b3: biến đổi option về giá trị text của nó
    let purposes = $selectedPurposeOptions.map(option => option.value);

    let email = $registerForm.email.value;
    let password = $registerForm.password.value;
    let passwordConfirmation = $registerForm.passwordConfirmation.value;

    // xóa nội dung của các thẻ thông báo lỗi
    $fullnameError.innerHTML = '';
    $emailError.innerHTML = '';
    $passwordError.innerHTML = '';
    $passwordConfirmationError.innerHTML = '';

    // kiểm tra tính hợp lệ của dữ liệu nhập vào
    let isPassed = true;

    if (fullname == '') {
        isPassed = false;
        $fullnameError.innerHTML = 'Họ và tên không được bỏ trống';
    }

    if (email == '') {
        isPassed = false;
        $emailError.innerHTML = 'Email không được bỏ trống';
    }

    if (password == '') {
        isPassed = false;
        $passwordError.innerHTML = 'Mật khẩu không được bỏ trống';
    }

    if (passwordConfirmation == '') {
        isPassed = false;
        $passwordConfirmationError.innerHTML = 'Xác nhận mật khẩu không được bỏ trống';
    }

    if (password != '' && passwordConfirmation != '' && password != passwordConfirmation) {
        isPassed = false;
        $passwordConfirmationError.innerHTML = 'Xác nhận mật khẩu không đúng';
    }

    // nếu toàn bộ dữ liệu nhập vào đều hợp lệ -> thực hiện đăng ký tài khoản
    if (isPassed) {
        register(fullname, email, password, {
            age: age,
            gender: gender,
            purposes: purposes
        }).then(function () {
            alert('Đăng ký tài khoản thành công');
        }).catch(function (error) {
            if (error.message.includes('email-already-in-use')) $emailError.innerHTML = 'Email này đã tồn tại. Vui lòng lựa chọn email khác!';
        });

    }

    // register thực thi bất đồng bộ -> cần phải có "then" để thực hiện sau khi chạy register xong
    // catch thực hiện việc bắt & xử lý lỗi nếu có khi đăng ký tài khoản

}