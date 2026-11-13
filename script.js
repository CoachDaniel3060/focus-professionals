"use strict";

/* ==========================================
   FOCUS PROFESSIONALS 2.0
   WEBSITE INTERACTIONS
   ========================================== */

// BUSINESS WHATSAPP NUMBER
const WHATSAPP_NUMBER = "233204402577";


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMobileMenu() {

  if (!navLinks || !menuToggle) return;

  navLinks.classList.remove("active");

  menuToggle.textContent = "☰";

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.setAttribute("aria-label", "Open navigation");

}


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


  navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", closeMobileMenu);

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
// PACKAGE ENQUIRY SHORTCUTS
// ==========================================

const packageButtons = document.querySelectorAll("[data-package]");

packageButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const packageName = button.getAttribute("data-package");

    const messageField = document.getElementById("contactMessage");

    if (messageField && packageName && !messageField.value.trim()) {

      messageField.value =
        "I am interested in the " +
        packageName +
        " package. Please provide more information.";

    }

  });

});


// ==========================================
// WHATSAPP PROJECT ENQUIRY FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // REQUIRED FIELDS

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


    // OPTIONAL FIELDS

    const budgetField = document.getElementById("contactBudget");

    const timelineField = document.getElementById("contactTimeline");

    const budget = budgetField ? budgetField.value : "";

    const timeline = timelineField ? timelineField.value : "";


    // VALIDATION

    if (!name || !email || !service || !message) {

      alert("Please complete all required fields before submitting.");

      return;

    }


    // EMAIL VALIDATION

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      alert("Please enter a valid email address.");

      return;

    }


    // BUILD WHATSAPP MESSAGE

    let whatsappMessage =

      "Hello FOCUS PROFESSIONALS,\n\n" +

      "I would like to make a project enquiry.\n\n" +

      "Name: " + name + "\n" +

      "Email: " + email + "\n" +

      "Service Required: " + service + "\n";


    if (budget) {

      whatsappMessage += "Estimated Budget: " + budget + "\n";

    }


    if (timeline) {

      whatsappMessage += "Expected Timeline: " + timeline + "\n";

    }


    whatsappMessage +=

      "\nProject Details:\n" +

      message +

      "\n\nI look forward to hearing from you.\n\n" +

      "Thank you.";


    // ENCODE MESSAGE

    const encodedMessage = encodeURIComponent(whatsappMessage);


    // OPEN WHATSAPP

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

  if (event.key === "Escape") {

    closeMobileMenu();

  }

});


// ==========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function (event) {

  if (!navLinks || !menuToggle) return;

  const clickedInsideMenu = navLinks.contains(event.target);

  const clickedMenuButton = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {

    closeMobileMenu();

  }

});


// ==========================================
// RESET MOBILE MENU ON DESKTOP
// ==========================================

window.addEventListener("resize", function () {

  if (window.innerWidth > 760) {

    closeMobileMenu();

  }

});


// ==========================================
// WEBSITE INITIALIZATION
// ==========================================

console.log(
  "FOCUS PROFESSIONALS 2.0 website loaded successfully."
);

console.log(
  "WhatsApp contact:",
  WHATSAPP_NUMBER
);