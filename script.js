// ==================== MOBILE MENU ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==================== TYPING ANIMATION ====================
const roles = [
    'Machine Learning Engineer',
    'Data Engineer',
    'Product Analyst',
    'NLP Specialist',
    'Data Scientist'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.querySelector('.typing-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeRole, speed);
}

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(typeRole, 1000);
});

// ==================== SKILL BARS ANIMATION ====================
const observeSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.getAttribute('data-width');
            const barFill = skillBar.querySelector('.bar-fill');
            
            setTimeout(() => {
                barFill.style.width = width + '%';
            }, 200);
            
            observeSkills.unobserve(skillBar);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.skill-bar').forEach(bar => {
    observeSkills.observe(bar);
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="btn-text">[ SENDING... ]</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span class="btn-text green">[ MESSAGE_SENT ✓ ]</span>';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// ==================== FADE IN ANIMATION ====================
const observeFade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.terminal-box, .project-card, .timeline-item, .cert-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observeFade.observe(el);
});

// ==================== CONSOLE EASTER EGG ====================
console.log('%c> Connection established...', 'color: #00ff00; font-family: monospace; font-size: 14px;');
console.log('%c> Welcome to Manjunath\'s Terminal Portfolio', 'color: #00bfff; font-family: monospace; font-size: 14px;');
console.log('%c> Type "help" for available commands', 'color: #ffff00; font-family: monospace; font-size: 14px;');
console.log('%c> Email: manjuss0409@gmail.com', 'color: #00ff00; font-family: monospace; font-size: 12px;');

// Easter egg commands
window.help = function() {
    console.log('%cAvailable commands:\n  - about()\n  - skills()\n  - contact()\n  - hire()', 'color: #00ffff; font-family: monospace;');
};

window.about = function() {
    console.log('%cManjunath S - ML & Data Engineer\nB.E. Information Science | 2026\nBengaluru, India', 'color: #00ff00; font-family: monospace;');
};

window.skills = function() {
    console.log('%cSkills: Python, SQL, Java, NLP, ML, Data Engineering, AWS', 'color: #00ff00; font-family: monospace;');
};

window.contact = function() {
    console.log('%c📧 manjuss0409@gmail.com\n📱 +91 95350-62855\n📍 Bengaluru, India', 'color: #ffff00; font-family: monospace;');
};

window.hire = function() {
    console.log('%c💼 I\'m available for opportunities! Reach out via email.', 'color: #00ff00; font-family: monospace;');
};

// ==================== CURSOR TRAIL EFFECT (OPTIONAL) ====================
// Uncomment to enable
/*
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    // Create trail effect here if desired
    
    requestAnimationFrame(animateTrail);
}

animateTrail();
*/