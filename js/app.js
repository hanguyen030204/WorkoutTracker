import { autoLogin, getCurrentUser } from "./models/user.js";
autoLogin();

window.addEventListener('load', function () {

    const $navLoggedIn = document.getElementById('nav-logged-in');
    const $navNotLoggedIn = document.getElementById('nav-not-logged-in');
    const currentUser = getCurrentUser();

    if (currentUser) {
        $navLoggedIn.classList.remove('d-none');
        $navNotLoggedIn.classList.add('d-none');

        const $currentUserName = document.getElementById('current-user-name');
        $currentUserName.innerHTML = currentUser.name;
    } else {
        $navLoggedIn.classList.add('d-none');
        $navNotLoggedIn.classList.remove('d-none');
    }
});