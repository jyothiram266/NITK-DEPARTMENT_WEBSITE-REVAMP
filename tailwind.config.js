// dark-mode.js
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        darkModeStylesheet.setAttribute('href', 'dark-mode.css');
    } else {
        darkModeStylesheet.setAttribute('href', ''); // Remove the dark mode stylesheet
    }
});
