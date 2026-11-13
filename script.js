"use strict";

/* ==========================================
   FOCUS PROFESSIONALS
   WEBSITE INTERACTIONS
   ========================================== */

// BUSINESS WHATSAPP NUMBER
const WHATSAPP_NUMBER = "233204402577";


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });


  // Close mobile menu after clicking a navigation link

  navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("active");

      menuToggle.textContent = "☰";

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

    });

  });

}


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// ==========================================
// WHATSAPP CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document
      .getElementById("contactName")
      .value
      .trim();

    const email = document
      .getElementById("contactEmail")
      .value
      .trim();

    const service = document
      .getElementById("contactService")
      .value;

    const message = document
      .getElementById("contactMessage")
      .value
      .trim();


    // Validate required information

    if (!name || !email || !service || !message) {

      alert("Please complete all fields before submitting.");

      return;

    }


    // Prepare the WhatsApp message

    const whatsappMessage =

      "Hello FOCUS PROFESSIONALS,\n\n" +

      "I would like to make a project enquiry.\n\n" +

      "Name: " + name + "\n" +

      "Email: " + email + "\n" +

      "Service Required: " + service + "\n\n" +

      "Project Details:\n" + message + "\n\n" +

      "I look forward to hearing from you.\n\n" +

      "Thank you.";


    // Encode message for WhatsApp

    const encodedMessage = encodeURIComponent(
      whatsappMessage
    );


    // Open direct WhatsApp conversation

    const whatsappURL =

      "https://wa.me/" +

      WHATSAPP_NUMBER +

      "?text=" +

      encodedMessage;


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });

}
// ==========================================
// CLOSE MOBILE MENU WITH ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape" && navLinks && menuToggle) {

    navLinks.classList.remove("active");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

  }

});


// ==========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function (event) {

  if (!navLinks || !menuToggle) {
    return;
  }

  const clickedInsideMenu = navLinks.contains(event.target);

  const clickedMenuButton = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {

    navLinks.classList.remove("active");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

  }

});


// ==========================================
// RESET MOBILE MENU ON DESKTOP
// ==========================================

window.addEventListener("resize", function () {

  if (window.innerWidth > 760 && navLinks && menuToggle) {

    navLinks.classList.remove("active");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

  }

});


// ==========================================
// WEBSITE INITIALIZATION
// ==========================================

console.log(
  "FOCUS PROFESSIONALS website loaded successfully."
);

console.log(
  "WhatsApp contact:",
  WHATSAPP_NUMBER
);
