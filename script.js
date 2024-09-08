document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            this.click();
        }
    });
    
    card.addEventListener('mousemove', function(e) {
        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
        
        let dx = x / rect.width - 0.5;
        let dy = y / rect.height - 0.5;
        
        this.style.transform = `
            perspective(1000px)
            rotateY(${dx * 20}deg)
            rotateX(${-dy * 20}deg)
            translateZ(10px)
        `;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('floating');
        } else {
            entry.target.classList.remove('floating');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
