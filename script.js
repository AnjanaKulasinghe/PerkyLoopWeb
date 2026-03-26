// PerkyLoop Website JavaScript

// ===== Wait for DOM to be ready =====
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = this.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // ===== Smooth Scrolling for Anchor Links =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Navbar Scroll Effect =====
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries, obs) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card, .step, .pricing-card, .animate-on-scroll');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        // Reset index per section to avoid massive delays on large pages
        const rowPosition = index % 3; 
        card.style.transition = `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${rowPosition * 0.05}s`;
        observer.observe(card);
    });
    
    // ===== FAQ Accordion =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // ===== Stats Counter Animation =====
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateValue = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = end + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            }
        }, 16);
    };
    
    // Observe stats for animation
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                
                if (number) {
                    entry.target.textContent = '0';
                    animateValue(entry.target, 0, number, 2000);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ===== Dashboard Stat Animation =====
    const dashboardStats = document.querySelectorAll('.dashboard-stat .stat-value');
    
    dashboardStats.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ===== Parallax Effect for Hero Gradient =====
    const heroGradient = document.querySelector('.hero-gradient');
    const heroSection = document.querySelector('.hero');
    
    if (heroGradient && heroSection) {
        // Mouse parallax effect
        heroSection.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const moveX = (x - rect.width / 2) / 50;
            const moveY = (y - rect.height / 2) / 50;
            
            heroGradient.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
        
        // Scroll parallax
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroGradient.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
    
    // ===== Floating Shapes Parallax =====
    const shapes = document.querySelectorAll('.shape');
    
    if (shapes.length > 0 && heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const moveX = (x - rect.width / 2) / (100 / speed);
                const moveY = (y - rect.height / 2) / (100 / speed);
                
                shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
    
    // ===== Loyalty Card Animation =====
    const loyaltyCards = document.querySelectorAll('.loyalty-card');
    
    loyaltyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
    
    // ===== 3D Phone Tilt Effect =====
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (phoneMockup) {
        phoneMockup.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
        });
        
        phoneMockup.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    }
    
    // ===== Magnetic Button Effect =====
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // ===== Chart Bars Animation =====
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const chartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.chart-bar');
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.transition = 'height 0.8s ease, opacity 0.8s ease';
                        bar.style.height = bar.style.height;
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    const chartContainer = document.querySelector('.dashboard-chart');
    if (chartContainer) {
        chartObserver.observe(chartContainer);
    }
    
    // ===== Pricing Card Hover Effect =====
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Scale up slightly
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Return to normal (unless it's featured)
            if (!this.classList.contains('pricing-featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            } else {
                this.style.transform = 'translateY(-8px) scale(1)';
            }
        });
    });
    
    // ===== Store Button Ripple Effect =====
    const storeButtons = document.querySelectorAll('.store-button, .btn-primary, .btn-secondary');
    
    storeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if it's a coming-soon button
            if (this.classList.contains('coming-soon')) {
                e.preventDefault();
                showComingSoonToast();
                return;
            }

            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== Gradient Text Animation =====
    const gradientTexts = document.querySelectorAll('.gradient-text');
    
    gradientTexts.forEach(text => {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            // Create a subtle color shift effect
            const gradient = `linear-gradient(135deg, 
                hsl(${hue}, 70%, 60%) 0%, 
                hsl(${(hue + 60) % 360}, 70%, 60%) 50%, 
                hsl(${(hue + 120) % 360}, 70%, 60%) 100%)`;
            text.style.backgroundImage = gradient;
        }, 100);
    });
    
    // ===== Hero Spotlight Effect =====
    const heroSections = document.querySelectorAll('.hero');
    
    heroSections.forEach(hero => {
        // Create spotlight element
        const spotlight = document.createElement('div');
        spotlight.style.cssText = `
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease;
            mix-blend-mode: screen;
        `;
        hero.appendChild(spotlight);
        
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left - 300;
            const y = e.clientY - rect.top - 300;
            
            spotlight.style.left = x + 'px';
            spotlight.style.top = y + 'px';
            spotlight.style.opacity = '1';
        });
        
        hero.addEventListener('mouseleave', () => {
            spotlight.style.opacity = '0';
        });
        
        // Add sparkle effects
        setInterval(() => {
            if (Math.random() > 0.7) {
                createSparkle(hero);
            }
        }, 500);
    });
    
    // ===== Create Sparkle Function =====
    function createSparkle(container) {
        const sparkle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const x = Math.random() * container.offsetWidth;
        const y = Math.random() * (container.offsetHeight * 0.6);
        
        sparkle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 10;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
            animation: sparkleAnimation 1.5s ease-out forwards;
        `;
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
    
    // Add sparkle animation to CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleAnimation {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);
    
    // ===== Back to Top Button (Optional Enhancement) =====
    const createBackToTop = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%);
            color: white;
            font-size: 1.5rem;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        document.body.appendChild(button);
    };
    
    createBackToTop();
    
    // ===== Console Message =====
    console.log('%c PerkyLoop ', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%); color: white; padding: 10px 20px; border-radius: 8px;');
    console.log('%cDigital Loyalty Rewards Made for Kiwi Businesses', 'font-size: 14px; color: #6b7280; padding: 5px 0;');
    console.log('%cInterested in working with us? Email: hello@perkyloop.com', 'font-size: 12px; color: #8b5cf6; padding: 5px 0;');
    
    // ===== Coming Soon Toast Function =====
    function showComingSoonToast() {
        // Remove existing toast if any
        const existingToast = document.querySelector('.coming-soon-toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'coming-soon-toast';
        toast.innerHTML = `
            <div class="toast-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </div>
            <div class="toast-body">
                <div class="toast-title">Coming Very Soon!</div>
                <div class="toast-text">The PerkyLoop app is currently in the final stages of review. Stay tuned for our App Store and Google Play launch!</div>
            </div>
        `;

        // Style the toast
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 2000;
            border: 1px solid rgba(139, 92, 246, 0.2);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            max-width: 400px;
            width: 90%;
        `;

        // Add additional styles for toast content
        const titleStyle = toast.querySelector('.toast-title');
        titleStyle.style.cssText = `
            font-weight: 700;
            color: #1f2937;
            font-family: 'Outfit', sans-serif;
            font-size: 1.1rem;
        `;

        const textStyle = toast.querySelector('.toast-text');
        textStyle.style.cssText = `
            font-size: 0.9rem;
            color: #4b5563;
            line-height: 1.4;
        `;

        const iconStyle = toast.querySelector('.toast-icon');
        iconStyle.style.cssText = `
            font-size: 1.5rem;
        `;

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });

        // Auto remove
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    }
    
});

// ===== Add loading animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Handle External Links =====
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href && !e.target.href.startsWith(window.location.origin) && !e.target.href.startsWith('#')) {
        // Open external links in new tab
        e.target.setAttribute('target', '_blank');
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===== Form Validation (if forms are added later) =====
const handleFormSubmit = (formElement) => {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form submission logic here
        console.log('Form submitted');
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Thank you! We\'ll be in touch soon.';
        successMessage.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => successMessage.remove(), 300);
        }, 3000);
    });
};

// ===== Performance Optimization =====
// Debounce function for scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy operations
const optimizedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);
