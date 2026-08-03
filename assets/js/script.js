document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const nav = document.querySelector('.site-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const backToTop = document.querySelector('.back-to-top');
    const desktopNavigation = window.matchMedia('(min-width: 48rem)');

    const setMenuState = (isOpen) => {
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navList.classList.toggle('is-open', isOpen);
        navList.inert = !desktopNavigation.matches && !isOpen;
        body.classList.toggle('menu-open', isOpen && !desktopNavigation.matches);
    };

    navToggle.addEventListener('click', () => {
        setMenuState(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
            navToggle.focus();
        }
    });

    desktopNavigation.addEventListener('change', () => setMenuState(false));
    setMenuState(false);

    const updateScrollControls = () => {
        const hasScrolled = window.scrollY > 40;
        nav.classList.toggle('is-scrolled', hasScrolled);
        backToTop.classList.toggle('is-visible', window.scrollY > 600);
    };

    window.addEventListener('scroll', updateScrollControls, { passive: true });
    updateScrollControls();

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const year = document.querySelector('#current-year');
    year.textContent = new Date().getFullYear();

    const revealItems = document.querySelectorAll('[data-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

        revealItems.forEach((item) => revealObserver.observe(item));
    }

    const sections = document.querySelectorAll('main section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                link.classList.toggle('active', link.hash === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach((section) => sectionObserver.observe(section));
});
