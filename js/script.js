document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section');
    const servicesButton = document.getElementById('servicesButton');

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                e.preventDefault(); // Prevent default only for buttons with data-target
                showSection(targetId);
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Handle Services button click
    if (servicesButton) {
        servicesButton.addEventListener('click', function () {
            window.location.href = 'services.html'; // Navigate to services.html
        });
    }

    // Show home section by default
    showSection('home');
});