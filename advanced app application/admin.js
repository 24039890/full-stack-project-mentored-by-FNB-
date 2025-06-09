document.addEventListener('DOMContentLoaded', function() {
    // Check if admin is logged in (in a real app, you'd have proper authentication)
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
    
    if (!isAdminLoggedIn && window.location.pathname.includes('admin.html')) {
        window.location.href = 'index.html';
    }
    
    // Sample data for demo purposes
    const applications = [
        {
            studentNumber: '12345678',
            name: 'John Doe',
            residence: 'Nelson Residence',
            status: 'pending'
        },
        {
            studentNumber: '23456789',
            name: 'Jane Smith',
            residence: 'Mandela Hall',
            status: 'approved'
        },
        {
            studentNumber: '34567890',
            name: 'Mike Johnson',
            residence: 'Freedom Apartments',
            status: 'pending'
        }
    ];
    
    // Populate stats
    document.getElementById('totalApplications').textContent = applications.length;
    document.getElementById('pendingApplications').textContent = applications.filter(app => app.status === 'pending').length;
    document.getElementById('approvedApplications').textContent = applications.filter(app => app.status === 'approved').length;
    document.getElementById('totalResidences').textContent = 3;
    
    // Populate applications table
    const tableBody = document.querySelector('#applicationsTable tbody');
    
    applications.forEach(application => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${application.studentNumber}</td>
            <td>${application.name}</td>
            <td>${application.residence}</td>
            <td><span class="status ${application.status}">${application.status.charAt(0).toUpperCase() + application.status.slice(1)}</span></td>
            <td><button class="btn btn-sm">View</button></td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('adminLoggedIn');
            window.location.href = 'index.html';
        });
    }
});