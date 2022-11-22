import {
    auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,
    setDoc, doc, db, getDocs, onAuthStateChanged
} from "../init.js";

// cú pháp của function
/*
    function <tên_hàm> (<tham số 1>, ...) {
        <code của function ở đây>
    }

    <tên_hàm>(<giá trị 1>, ...);
*/

/**
 * Đăng nhập với email và password
 * @param {string} email 
 * @param {string} password
 * @returns {Promise}
 */
function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Đăng ký với tên, email, password. Ngoài ra có thêm các thông tin khác: tuổi, giới tính, mục đích tập luyện, ...
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @param {object} otherInfo 
 * @returns {Promise}
 */
function register(name, email, password, otherInfo) {
    return createUserWithEmailAndPassword(auth, email, password).then(function (response) {
        // lấy user từ response
        const user = response.user;

        // cập nhật profile user: tên hiển thị
        updateProfile(user, {
            displayName: name
        });

        // lưu otherInfo vào firestore với ID user tương ứng
        setDoc(doc(db, "users", user.uid), otherInfo);
    });
}

/**
 * Lấy thông tin tài khoản hiện tại
 * @returns {object}
 */
function getCurrentUser() {
    return auth.currentUser;
}

/**
 * Đăng xuất tài khoản hiện tại
 */
function logout() {
    auth.signOut();
}

/**
 * Tự động kiểm tra trạng thái đăng nhập của người dùng
 */
function autoLogin() {
    onAuthStateChanged(auth, function (user) {
        // code được thực thi khi: đăng nhập, đăng ký, đăng xuất
        if (user != null) {
            // khi user đã đăng nhập -> chuyển hướng sang màn hình danh sách bài tập
            window.location = './exercise_list.html';
        } else {
            if (window.location.pathname != '/login.html') {
                // khi user chưa đăng nhập -> chuyển hướng sang màn hình đăng nhập
                window.location = './login.html';
            }
        }
    });
}

export { login, register, getCurrentUser, logout, autoLogin };