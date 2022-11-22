// thiết lập kết nối firebase
// để 1 tính năng: biến, hàm, class sử dụng ở 1 module khác --> export
// để sử dụng tính năng ở module khác --> import

// Về phần firebase auth, sử dụng tính năng: đăng ký, đăng nhập, đăng xuất, thay đổi thông tin, lấy người dùng hiện tại
// Về phần firebase firestore, import vào trước đã, sau đấy vào doc xem thôi :v
// dùng firestore trong project này đơn giản là lấy dữ liệu và tạo thêm dữ liệu mới thôi, còn sửa vs xóa thì để sau nhé (đơn giản như lúc thêm mới thôi :v)
// để lấy dữ liệu thì import collection, getDocs
// bây h dữ liệu trong ứng dụng liên quan đến bài tập mà hôm nọ Hà tạo rồi đấy,
// nó nằm trong collection exercises, h chỉ việc lấy đống này ra thôi
// để thao tác với đống exercises thì a sẽ tạo thêm 1 file mới trong models

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore, collection, doc, getDocs, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhsjfAMsm6nf1zAId5AGuiXXh9eVtU1h8",
    authDomain: "workout-tracker-b5c81.firebaseapp.com",
    projectId: "workout-tracker-b5c81",
    storageBucket: "workout-tracker-b5c81.appspot.com",
    messagingSenderId: "156875323406",
    appId: "1:156875323406:web:0f4f4157fb4a9a3a6e245f"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged,
    db, collection, doc, getDocs, addDoc, setDoc
}; // cú pháp export { <tên biến>, ... }