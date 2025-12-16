const accountDetails = document.getElementById('account-details');
const logoutButton = document.getElementById('logout');

const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    const userData = localStorage.getItem(currentUser);
    if (userData) {
        const user = JSON.parse(userData);
        accountDetails.innerHTML = `نام: ${user.firstName}<br>نام خانوادگی: ${user.lastName}<br>شماره تماس: ${user.phone}<br>نام کاربری: ${user.username}`;
    }
} else {
    window.location.href = 'login.html'; // اگر کاربر وارد نشده، برگشت به ورود
}

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html'; // خروج و برگشت به صفحه ورود
});
// گرفتن عناصر
const openProject = document.getElementById("open-project");

// باز کردن project.html
openProject.addEventListener("click", () => {
    window.location.href = "../project/project.html";
});

