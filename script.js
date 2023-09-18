document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const alertMessage = document.getElementById("alert-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // รับค่าชื่อผู้ใช้และรหัสผ่านจากฟอร์ม
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // เช็คความถูกต้อง (ตัวอย่างการเช็ค)
        if (username === "Teeraphat" && password === "1234") {
            alertMessage.textContent = "your username and password are correct! you are logged in"; // ลบข้อความแจ้งเตือนเก่า (ถ้ามี)
        } else {
            // แสดง Alert และข้อความแจ้งเตือนด้านบนสุดของ login-container
            alertMessage.textContent = "your username or password is incorrect! please try again.";
        }
    });
});
