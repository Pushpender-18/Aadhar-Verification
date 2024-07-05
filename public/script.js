document.getElementById('aadhaar-login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const otp = document.getElementById('otp-input-group');
    if (otp.style.display == 'none') {
        otp.style.display = 'block';
        otp.required = true;
    } else {
        window.location.href = 'smart-name.html';
    }
});
