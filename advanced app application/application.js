document.addEventListener('DOMContentLoaded', function() {
    const housingForm = document.getElementById('housingForm');
    
    if (housingForm) {
        housingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Gather form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                studentNumber: document.getElementById('studentNumber').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                gender: document.getElementById('gender').value,
                faculty: document.getElementById('faculty').value,
                year: document.getElementById('year').value,
                residenceType: document.getElementById('residenceType').value,
                preferredResidence: document.getElementById('preferredResidence').value,
                specialNeeds: document.getElementById('specialNeeds').value
            };
            
            // In a real app, you would send this to your backend
            console.log('Form submitted:', formData);
            
            // Store application in localStorage (for demo purposes)
            localStorage.setItem('housingApplication', JSON.stringify(formData));
            localStorage.setItem('applicationSubmitted', 'true');
            
            // Show success message
            alert('Application submitted successfully!');
            
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }
});