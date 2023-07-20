function displayUserInfo(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    const userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) {
        userInfoDiv.innerHTML = `<p><strong>Username:</strong> ${username}</p>`;
    }
}

displayUserInfo();
