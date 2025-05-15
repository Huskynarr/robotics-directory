/**
 * Debug script for Robotics Directory website
 * This script helps diagnose issues with the website functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug script loaded!');
    
    // Check dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Update icon
        darkModeIcon.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
        
        // Update toggle
        if (darkModeToggle) {
            darkModeToggle.checked = isDark;
        }
        
        // Save preference
        localStorage.setItem('darkMode', isDark.toString());
        console.log('Dark mode set to:', isDark);
    }
    
    // Apply initial dark mode setting
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
        if (darkModeIcon) darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Add event listeners
    if (darkModeToggle) {
        console.log('Dark mode toggle found:', darkModeToggle);
        console.log('Dark mode checked state:', darkModeToggle.checked);
        
        // Current localStorage state
        console.log('Current localStorage darkMode value:', localStorage.getItem('darkMode'));
        
        // Add event listener for toggle
        darkModeToggle.addEventListener('change', function() {
            console.log('Dark mode toggle clicked!');
            console.log('New checked state:', this.checked);
            toggleDarkMode();
        });
        
        // Make the label more clickable
        const label = document.querySelector('label[for="darkModeToggle"]');
        if (label) {
            label.style.cursor = 'pointer';
            label.addEventListener('click', function(e) {
                console.log('Dark mode label clicked!');
                e.preventDefault(); // Prevent default to avoid double-toggling
                toggleDarkMode();
            });
        }
    } else {
        console.error('Dark mode toggle not found!');
    }
}); 