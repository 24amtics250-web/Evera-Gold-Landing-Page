const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

document.querySelectorAll(".wishlist").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.textContent = button.classList.contains("active") ? "♥" : "♡";
    button.setAttribute(
      "aria-label",
      button.classList.contains("active") ? "Remove from favourites" : "Add to favourites"
    );
  });
});

const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thank you! This demo form is ready for a real newsletter integration.";
    newsletterForm.reset();
  });
}
