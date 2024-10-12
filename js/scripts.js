document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');
        
        if (href.startsWith('#')) {
            // Only prevent default for in-page links
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // For external pages, allow navigation
            window.location.href = href;
        }
    });
});
