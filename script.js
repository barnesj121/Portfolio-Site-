// Array of project objects
const projects = [
    {
        title: "2D Pong Game",
        description: "Players can control the paddles to deflect the ball and score points against their opponent. The game is designed to be minimalistic and immersive, focusing on fluid gameplay mechanics. Optional sound effects enhance the experience but can be toggled off for a quieter game. This project demonstrates foundational programming skills, animation handling, and a focus on user experience in game development.",
        link: "https://github.com/barnesj121/Pong-Game-/tree/main",
    },
    {
        title: "File Automation Script",
        description: "This script automates the organization of files in a specified directory by moving them into categorized folders based on their file types. It helps streamline file management, making it easier to locate specific files.",
        link: "https://github.com/barnesj121/automation_script/blob/main/automation_script/organize_files.py",
    },
];

// Function to render projects dynamically
function renderProjects() {
    const projectContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectDiv);
    });
}

// Call the function to render projects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link
function highlightNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Add event listener to call highlightNav on scroll
window.addEventListener('scroll', highlightNav);

// Toggle the navigation menu on smaller screens
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Create a scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button when scrolled down
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to top function
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Clear the form fields
});
