import "../app.js"
import { changeCurrentUserPassword, getCurrentUser, updateCurrentUser } from "../models/user.js";


window.addEventListener('load', function () {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location = './login.html';
        return;
    }

    const $profileForm = document.getElementById('profile-form');
    const $fullnameError = document.getElementById('fullname-error');

    $profileForm.onsubmit = function (event) {
        event.preventDefault();

        $fullnameError.innerHTML = '';

        let name = $profileForm.fullname.value.trim();
        let age = $profileForm.age.value;
        let gender = $profileForm.gender.value;
        let purposes = [...$profileForm.purposes.options].filter(option => option.selected).map(option => option.value);

        if (name == '') {
            $fullnameError.innerHTML = 'Nhập vào họ và tên';
            return;
        }

        const newData = {
            name,
            age,
            gender,
            purposes,
            email: currentUser.email,
            photoURL: ""
        };
        updateCurrentUser(newData).then(function () {
            window.location = './exercise_list.html';
        });
    }

    // fill các giá trị vào trường thông tin tương ứng
    $profileForm.fullname.value = currentUser.name;
    $profileForm.age.value = currentUser.age;
    $profileForm.gender.value = currentUser.gender;
    for (const option of $profileForm.purposes.options) {
        option.selected = currentUser.purposes.includes(option.value);
    }

    $profileForm.email.value = currentUser.email;

    const $changePasswordForm = document.getElementById('change-password-form');
    const $newPasswordError = document.getElementById('new-password-error');
    const $confirmNewPasswordError = document.getElementById('confirm-new-password-error');
    $changePasswordForm.onsubmit = function (event) {
        event.preventDefault();

        let newPassword = $changePasswordForm.newPassword.value.trim();
        let confirmNewPassword = $changePasswordForm.confirmNewPassword.value.trim();

        let isPassed = true;

        if (!newPassword) {
            isPassed = false;
            $newPasswordError.innerHTML = 'Nhập vào mật khẩu mới';
        }

        if (!confirmNewPassword) {
            isPassed = false;
            $newPasswordError.innerHTML = 'Nhập vào mật khẩu mới';
        }

        if (isPassed) {
            changeCurrentUserPassword(newPassword).then(function () {

            });
        }
    }
});