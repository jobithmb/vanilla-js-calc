// toggle theme
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
});