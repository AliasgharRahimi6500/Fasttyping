// تابع برای نمایش/مخفی کردن رمز عبور
function togglePassword(id) {
    const input = document.getElementById(id);
    const toggle = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = '🙈';
    } else {
        input.type = 'password';
        toggle.textContent = '👁️';
    }
}

const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const userData = localStorage.getItem(username);

    if (userData) {
        const user = JSON.parse(userData);
        if (user.password === password) {
            // ذخیره نام کاربری فعلی برای صفحه حساب
            localStorage.setItem('currentUser', username);
            window.location.href = 'account.html'; // هدایت به صفحه حساب
            loginError.textContent = '';
        } else {
            loginError.textContent = 'رمز عبور اشتباه است!';
        }
    } else {
        loginError.textContent = 'نام کاربری یافت نشد!';
    }
});