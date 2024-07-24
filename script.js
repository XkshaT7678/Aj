const correctPassword = '1234';

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const loginContainer = document.getElementById('login-container');
    const videoContainer = document.getElementById('video-container');
    const errorMsg = document.getElementById('error-msg');

    if (passwordInput === correctPassword) {
        loginContainer.style.display = 'none';
        videoContainer.style.display = 'block';
    } else {
        errorMsg.textContent = 'Incorrect password. Please try again.';
    }
}
