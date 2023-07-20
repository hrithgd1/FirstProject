interface User {
    username: string;
    password: string;
}

function registerUser(username: string, password: string): void {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser: User = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

function handleSubmit(event: Event): void {
    event.preventDefault();
    const usernameInput: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
    const passwordInput: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput: HTMLInputElement = document.getElementById('confirmPassword') as HTMLInputElement;

    const username: string = usernameInput.value;
    const password: string = passwordInput.value;
    const confirmPassword: string = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    registerUser(username, password);

    window.location.href = `success.html?username=${username}`;
}

document.getElementById('registerForm')?.addEventListener('submit', handleSubmit);
