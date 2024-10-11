document.addEventListener('mousemove', (e) => {
    const circle = document.querySelector('.mouse-circle');
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
});

// Smooth Scroll Behavior for Navbar
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
