window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        navLinks.forEach((link) => {
            const letters = link.textContent.split("");
            link.innerHTML = ""; // Clear the link content
            letters.forEach((letter) => {
                const span = document.createElement('span');
                span.textContent = letter;
                
                // Detect the middle of the section to change colors
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    span.style.color = section.classList.contains('dark-section') ? '#fff' : '#000';
                } else {
                    span.style.color = ''; // Reset color when not in section
                }
                link.appendChild(span);
            });
        });
    });
});
