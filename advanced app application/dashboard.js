document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('loggedIn');
    const studentNumber = localStorage.getItem('studentNumber');
    
    if (!isLoggedIn || !studentNumber) {
        window.location.href = 'login.html';
        return;
    }
    
    // Display student number
    const studentNumberElement = document.getElementById('studentNumberDisplay');
    if (studentNumberElement) {
        studentNumberElement.textContent = studentNumber;
    }
    
    // Check if application exists
    const application = JSON.parse(localStorage.getItem('housingApplication'));
    const applicationStatus = document.getElementById('applicationStatus');
    
    if (application) {
        // Display application details
        document.getElementById('nameDisplay').textContent = `${application.firstName} ${application.lastName}`;
        document.getElementById('emailDisplay').textContent = application.email;
        document.getElementById('phoneDisplay').textContent = application.phone;
        document.getElementById('residenceDisplay').textContent = application.preferredResidence;
        
        // Set status based on whether application is submitted
        if (localStorage.getItem('applicationSubmitted')) {
            applicationStatus.textContent = 'Submitted - Under Review';
            applicationStatus.className = 'status under-review';
        } else {
            applicationStatus.textContent = 'Draft - Not Submitted';
            applicationStatus.className = 'status draft';
        }
    } else {
        // No application found
        document.getElementById('applicationDetails').style.display = 'none';
        document.getElementById('noApplication').style.display = 'block';
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('studentNumber');
            window.location.href = 'index.html';
        });
    }
});