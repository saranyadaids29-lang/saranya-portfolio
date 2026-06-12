// A. DARK/LIGHT CORE TOGGLE MECHANISM
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🔆';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙';
    }
});

// B. PROGRESS BAR ANIMATION
window.addEventListener('DOMContentLoaded', () => {
    const fills = document.querySelectorAll('.progress-fill');
    setTimeout(() => {
        fills.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 200);
});

// C. PROJECTS SHOW MORE TOGGLE
const projectToggleBtn = document.getElementById('projectToggleBtn');
const hiddenProjects = document.querySelectorAll('.hidden-project');
let projectsVisible = false;

projectToggleBtn.addEventListener('click', () => {
    projectsVisible = !projectsVisible;
    hiddenProjects.forEach(project => {
        project.style.display = projectsVisible ? 'flex' : 'none';
    });
    projectToggleBtn.textContent = projectsVisible ? 'Show Less Projects' : 'Show More Projects';
});

// D. CERTIFICATES SHOW MORE TOGGLE
const certToggleBtn = document.getElementById('certToggleBtn');
const hiddenCerts = document.querySelectorAll('.certificate-card.hidden');
let certsVisible = false;

certToggleBtn.addEventListener('click', () => {
    certsVisible = !certsVisible;
    hiddenCerts.forEach(cert => {
        cert.style.display = certsVisible ? 'flex' : 'none';
    });
    certToggleBtn.textContent = certsVisible ? 'Show Less Certificates' : 'Show More Certificates';
});