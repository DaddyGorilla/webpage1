document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section');

    // Function to show a specific section
    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default behavior
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                showSection(targetId);
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Show home section by default
    showSection('home');
});