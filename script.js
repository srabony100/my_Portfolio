// Add a class to the active navigation link based on the current section in view
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find the corresponding link and add active class
                const targetLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: "-50px 0px -50px 0px" // Adjust the boundaries for triggering
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Optional: Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});