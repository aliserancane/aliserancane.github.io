// Navigation, selected-works dropdown and footer year.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector("#navigation");
  const worksLink = document.querySelector(".works-nav-link");
  const worksPanel = document.querySelector(".hero-works");

  // Mobile navigation
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
  }

  // Desktop selected-works dropdown. On touch/mobile, Works remains a normal link.
  if (worksLink && worksPanel) {
    let closeTimer;

    const isDesktop = () => window.matchMedia("(min-width: 801px)").matches;

    const openPanel = () => {
      if (!isDesktop()) return;
      window.clearTimeout(closeTimer);
      worksPanel.classList.add("is-open");
      worksLink.setAttribute("aria-expanded", "true");
    };

    const closePanel = () => {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        worksPanel.classList.remove("is-open");
        worksLink.setAttribute("aria-expanded", "false");
      }, 180);
    };

    worksLink.addEventListener("mouseenter", openPanel);
    worksLink.addEventListener("focus", openPanel);
    worksLink.addEventListener("mouseleave", closePanel);
    worksLink.addEventListener("blur", closePanel);
    worksPanel.addEventListener("mouseenter", openPanel);
    worksPanel.addEventListener("mouseleave", closePanel);

    worksLink.addEventListener("click", (event) => {
      if (isDesktop() && worksPanel.classList.contains("is-open")) {
        // Keep the link usable: clicking Works still opens works.html.
        return;
      }
      // On touch devices, allow normal navigation to works.html.
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        worksPanel.classList.remove("is-open");
        worksLink.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", () => {
      if (!isDesktop()) {
        worksPanel.classList.remove("is-open");
        worksLink.setAttribute("aria-expanded", "false");
      }
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
