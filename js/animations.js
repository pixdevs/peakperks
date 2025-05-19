// Additional animations and effects

// Parallax Scrolling for Hero and CTA backgrounds
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    // Hero parallax
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    }
    
    // CTA parallax
    const ctaSection = document.querySelector('.cta');
    if (ctaSection) {
        const ctaPosition = ctaSection.offsetTop;
        const ctaParallax = (scrollPosition - ctaPosition) * 0.4;
        if (scrollPosition > ctaPosition - window.innerHeight) {
            ctaSection.style.backgroundPositionY = `${ctaParallax}px`;
        }
    }
});

// Text animation for testimonials
const animateTestimonials = () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.classList.add('active');
        }, index * 200);
    });
};

// Image hover effects
const destinationCards = document.querySelectorAll('.destination-card');

destinationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const img = card.querySelector('img');
        img.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const img = card.querySelector('img');
        img.style.transform = 'scale(1)';
    });
});

// Counter animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
};

// Animate elements when they come into view
const observeElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(section);
    });
};

// Button hover effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const x = e.clientX - button.getBoundingClientRect().left;
        const y = e.clientY - button.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Animated underline for section headers
const animateHeaders = () => {
    const headers = document.querySelectorAll('.section-header h2');
    
    headers.forEach(header => {
        const underline = document.createElement('span');
        underline.classList.add('animated-underline');
        header.appendChild(underline);
    });
};

// Staggered animation for grid items
const staggerGrid = (gridSelector, itemSelector) => {
    const grid = document.querySelector(gridSelector);
    
    if (grid) {
        const items = grid.querySelectorAll(itemSelector);
        
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Run animations when DOM is loaded
    staggerGrid('.features-grid', '.feature-card');
    staggerGrid('.destinations-wrapper', '.destination-item');
    staggerGrid('.team-grid', '.team-member');
    staggerGrid('.values-grid', '.value-card');
    
    // Trigger animations that require scrolling
    fadeInOnScroll();
    
    // Animate testimonials on page load if they exist
    if (document.querySelector('.testimonial-card')) {
        animateTestimonials();
    }
    
    // Add class to body when page is loaded
    document.body.classList.add('loaded');
});