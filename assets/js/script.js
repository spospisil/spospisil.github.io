// ===========================
// Filter Functionality
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Filter projects by category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    // Add animation
                    card.style.animation = 'fadeIn 0.6s ease';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ===========================
    // Smooth Scrolling
    // ===========================
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===========================
    // Intersection Observer for Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe all project cards
    projectCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // ===========================
    // Navbar Background on Scroll
    // ===========================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // Project Card Details (Modal functionality - optional)
    // ===========================
    const detailButtons = document.querySelectorAll('.btn-secondary');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectCard = button.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            const projectDescription = projectCard.querySelector('.project-description').textContent;
            
            // You can implement a modal here or redirect to a detail page
            console.log('Project Details:', { projectTitle, projectDescription });
            
            // Example: Alert (replace with modal in production)
            alert(`${projectTitle}\n\n${projectDescription}`);
        });
    });

    // ===========================
    // Dynamic Year in Footer
    // ===========================
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} My Portfolio. All rights reserved.`;
    }

    // ===========================
    // Lazy Loading Images (Performance)
    // ===========================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }

    // ===========================
    // Active Section Highlight in Nav
    // ===========================
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.backgroundColor = 'var(--bg-light)';
                        link.style.color = 'var(--primary-color)';
                    } else {
                        link.style.backgroundColor = '';
                        link.style.color = '';
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    // ===========================
    // Search/Filter Animation Delay
    // ===========================
    const staggerAnimation = () => {
        const visibleCards = document.querySelectorAll('.project-card:not(.hidden)');
        visibleCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', staggerAnimation);
    });

    // Initial stagger on load
    staggerAnimation();

    // ===========================
    // Back to Top Button (Optional)
    // ===========================
    const createBackToTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'back-to-top';
        button.setAttribute('aria-label', 'Back to top');
        
        // Add styles dynamically
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        `;
        
        document.body.appendChild(button);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top on click
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    };

    createBackToTopButton();

    // ===========================
    // Console Welcome Message
    // ===========================
    console.log('%c Welcome to My Portfolio! ', 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('Built with HTML, CSS, and JavaScript');
});
