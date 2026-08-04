document.documentElement.classList.add("js");

const body = document.body;
const header = document.querySelector("[data-header]");
const navigationToggle = document.querySelector("[data-nav-toggle]");
const navigationPanel = document.querySelector("[data-nav-panel]");
const desktopNavigation = window.matchMedia("(min-width: 56.25rem)");

function setNavigation(open) {
    if (!navigationToggle || !navigationPanel) {
        return;
    }

    const isDesktop = desktopNavigation.matches;
    const shouldOpen = isDesktop || open;

    navigationToggle.setAttribute("aria-expanded", String(!isDesktop && open));
    navigationToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    body.classList.toggle("nav-open", !isDesktop && open);
    navigationPanel.toggleAttribute("inert", !shouldOpen);
    navigationPanel.setAttribute("aria-hidden", String(!shouldOpen));
}

if (navigationToggle && navigationPanel) {
    setNavigation(false);

    navigationToggle.addEventListener("click", () => {
        const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
        setNavigation(!isOpen);
    });

    navigationPanel.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setNavigation(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setNavigation(false);
            navigationToggle.focus();
        }
    });

    desktopNavigation.addEventListener("change", () => setNavigation(false));
}

function updateHeader() {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll("[data-year]").forEach((year) => {
    year.textContent = new Date().getFullYear();
});

const requestedProject = new URLSearchParams(window.location.search).get("project");
const projectSelect = document.querySelector("[data-project-select]");

if (projectSelect && requestedProject) {
    const matchingOption = Array.from(projectSelect.options).some((option) => option.value === requestedProject);

    if (matchingOption) {
        projectSelect.value = requestedProject;
    }
}

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        form.reset();

        if (status) {
            status.textContent = "Thanks. Your project details have been collected for review.";
            status.hidden = false;
        }
    });
});