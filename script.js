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
/* ==========================================
   FOCUS PROFESSIONALS FREE CHAT ASSISTANT
   Scripted business support — no API required
   ========================================== */

(function () {
  "use strict";

  const toggle = document.getElementById("fpChatToggle");
  const close = document.getElementById("fpChatClose");
  const windowBox = document.getElementById("fpChatWindow");
  const messages = document.getElementById("fpChatMessages");
  const form = document.getElementById("fpChatForm");
  const input = document.getElementById("fpChatInput");
  const options = document.getElementById("fpChatOptions");

  if (!toggle || !close || !windowBox || !messages || !form || !input || !options) {
    return;
  }

  function openChat() {
    windowBox.classList.add("active");
    windowBox.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function closeChat() {
    windowBox.classList.remove("active");
    windowBox.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    if (windowBox.classList.contains("active")) {
      closeChat();
    } else {
      openChat();
    }
  });

  close.addEventListener("click", closeChat);

  function addMessage(message, sender) {
    const bubble = document.createElement("div");
    bubble.className = "fp-chat-message " + sender;
    bubble.textContent = message;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function getReply(question) {
    const text = question.toLowerCase();

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("good morning") ||
      text.includes("good afternoon")
    ) {
      return "Welcome to FOCUS PROFESSIONALS! How can I assist you today?";
    }

    if (
      text.includes("service") ||
      text.includes("what do you do") ||
      text.includes("offer")
    ) {
      return "FOCUS PROFESSIONALS provides:\n\n• Website and web application development\n• E-commerce solutions\n• Cloud solutions and engineering\n• AI automation\n• Digital business systems\n\nWhich service would you like to discuss?";
    }

    if (
      text.includes("package") ||
      text.includes("pricing") ||
      text.includes("price") ||
      text.includes("cost")
    ) {
      return "We offer three service packages on our website. Our projects are quotation-based, so the cost depends on your requirements.\n\nVisit our Packages section to explore the options, or request a quotation through our contact form.";
    }

    if (
      text.includes("quotation") ||
      text.includes("quote") ||
      text.includes("hire") ||
      text.includes("start a project")
    ) {
      return "We would be happy to discuss your project!\n\nPlease visit the Contact section of our website and complete the project enquiry form. Include your requirements so our team can understand what you need.";
    }

    if (
      text.includes("contact") ||
      text.includes("whatsapp") ||
      text.includes("phone") ||
      text.includes("email")
    ) {
      return "You can reach FOCUS PROFESSIONALS through:\n\nWhatsApp: +233 204 402 577\nEmail: focusprofessionals1@gmail.com\n\nOur team will be happy to hear from you.";
    }

    if (
      text.includes("location") ||
      text.includes("where are you") ||
      text.includes("country")
    ) {
      return "FOCUS PROFESSIONALS is based in Ghana and provides digital services to clients beyond Ghana. Please contact our team for more information.";
    }

    if (
      text.includes("portfolio") ||
      text.includes("projects") ||
      text.includes("work")
    ) {
      return "You can explore our completed and featured projects in the Portfolio section of our website.";
    }

    if (
      text.includes("thank")
    ) {
      return "You're welcome! Thank you for considering FOCUS PROFESSIONALS.";
    }

    return "Thank you for your question. I may not have that information yet.\n\nPlease contact our team through WhatsApp at +233 204 402 577 or email focusprofessionals1@gmail.com for assistance.";
  }

  function handleQuestion(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) return;

    addMessage(cleanQuestion, "user");

    const reply = getReply(cleanQuestion);

    addMessage(reply, "assistant");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = input.value.trim();

    if (!question) return;

    handleQuestion(question);
    input.value = "";
    input.focus();
  });

  options.addEventListener("click", function (event) {
    const button = event.target.closest("[data-question]");

    if (!button) return;

    const question = button.getAttribute("data-question");

    const quickQuestions = {
      services: "What services do you offer?",
      packages: "Tell me about your packages and pricing.",
      quotation: "I would like to request a quotation.",
      contact: "How can I contact your team?"
    };

    if (quickQuestions[question]) {
      handleQuestion(quickQuestions[question]);
    }
  });

  console.log("FOCUS PROFESSIONALS Chat Assistant is ready.");
})();