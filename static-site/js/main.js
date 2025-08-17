// Global JS for the static site

// Lucide icons init (if lucide is loaded)
window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Contact form handler (shows toast instead of submit)
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(
        "Form not available. Please email contact@zellionhomes.com or call +260 972 841 363."
      );
    });
  }
});

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}
