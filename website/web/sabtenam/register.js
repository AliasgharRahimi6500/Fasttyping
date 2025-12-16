// CAPTCHA ساده: یک سوال ریاضی تصادفی
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = `حاصل ${num1} + ${num2} چند است؟`;
    const answer = num1 + num2;
    document.getElementById('captcha-question').textContent = question;
    return answer;
}

let captchaAnswer = generateCaptcha();

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

const registerForm = document.getElementById('register-form');
const registerError = document.getElementById('register-error');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userCaptcha = parseInt(document.getElementById('captcha-answer').value);

    if (userCaptcha !== captchaAnswer) {
        registerError.textContent = 'پاسخ CAPTCHA اشتباه است!';
        return;
    }

    // بررسی اگر نام کاربری قبلاً وجود داشته باشد
    if (localStorage.getItem(username)) {
        registerError.textContent = 'نام کاربری قبلاً ثبت شده است!';
        return;
    }

    // ذخیره اطلاعات
    const user = { firstName, lastName, phone, username, password };
    localStorage.setItem(username, JSON.stringify(user));
    registerError.textContent = '';
    alert('ثبت‌نام موفق! حالا وارد شوید.');
    window.location.href = 'login.html'; // هدایت به صفحه ورود پس از ثبت‌نام موفق
});