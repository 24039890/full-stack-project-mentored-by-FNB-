document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const studentNumber = document.getElementById('studentNumber').value;
            const password = document.getElementById('password').value;
            
            // In a real app, you would send this to your backend
            console.log('Login attempt:', { studentNumber, password });
            
            // Simulate authentication
            if (studentNumber && password) {
                // Store user session (in a real app, use proper session management)
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('studentNumber', studentNumber);
                
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both student number and password');
            }
        });
    }
    
    // Check if user is logged in when accessing protected pages
    if (window.location.pathname.includes('dashboard.html') {
        const isLoggedIn = localStorage.getItem('loggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
});