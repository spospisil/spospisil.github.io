document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  const currentYear = document.querySelector("[data-current-year]");
  const contactForm = document.querySelector("[data-contact-form]");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("nav-open");

    const icon = menuToggle.querySelector("svg");
    if (icon) {
      icon.outerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
      window.lucide?.createIcons();
    }
  };

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
        return;
      }

      navigation.classList.add("is-open");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Close navigation");
      document.body.classList.add("nav-open");

      const icon = menuToggle.querySelector("svg");
      if (icon) {
        icon.outerHTML = '<i data-lucide="x" aria-hidden="true"></i>';
        window.lucide?.createIcons();
      }
    });

    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  if (header) {
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 42);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  if (contactForm) {
    const requestedService = new URLSearchParams(location.search).get("service");
    const serviceSelect = contactForm.querySelector("#service");

    if (requestedService && serviceSelect) {
      const hasMatchingOption = Array.from(serviceSelect.options).some((option) => option.value === requestedService);
      if (hasMatchingOption) serviceSelect.value = requestedService;
    }

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const successMessage = contactForm.querySelector("[data-form-success]");
      const submitButton = contactForm.querySelector('button[type="submit"]');

      contactForm.reset();
      successMessage?.classList.add("is-visible");
      successMessage?.focus();
      if (submitButton) submitButton.disabled = true;
    });
  }
});