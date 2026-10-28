
// Shared site behaviour: navigation, works hover panel and current year.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector("#navigation");

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
      if (
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Open the homepage works list from the top navigation.
  const worksNavLink = document.querySelector(
    '#navigation a[href="works.html"]'
  );
  const worksPanel = document.querySelector(".hero-works");

  if (worksNavLink && worksPanel) {
    let closeTimer;

    const openWorks = () => {
      clearTimeout(closeTimer);
      worksPanel.classList.add("is-open");
    };

    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        worksPanel.classList.remove("is-open");
      }, 1200);
    };

    worksNavLink.addEventListener("mouseenter", openWorks);
    worksNavLink.addEventListener("focus", openWorks);
    worksNavLink.addEventListener("mouseleave", scheduleClose);
    worksNavLink.addEventListener("blur", scheduleClose);

    worksPanel.addEventListener("mouseenter", openWorks);
    worksPanel.addEventListener("mouseleave", scheduleClose);
  }

  // Current year in footer
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
