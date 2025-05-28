document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const code = document.getElementById('code').value;

    // Simple validation and redirection (replace with actual login logic)
    if (username && password && code) {
        alert('Login successful! Redirecting...');
        window.location.href = 'index.html'; // Redirect to main introduction page
    } else {
        alert('Please fill in all fields.');
    }
});
