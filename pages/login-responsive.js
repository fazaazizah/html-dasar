document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("Username").value;
        const password = document.getElementById("password").value;

        // Contoh validasi sederhana
        if (username === "username" && password === "password") {
            alert("Login berhasil!");
            // Redirect ke halaman setelah login
            window.location.href = "halaman_setelah_login.html";
        } else {
            alert("Login gagal. Silakan cek kembali username dan password Anda.");
        }
    });
});