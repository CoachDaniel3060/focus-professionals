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
    menuToggle.setAttribute("aria-expanded", String(isOpen));
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

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const service = document.getElementById("contactService").value;
    const message = document.getElementById("contactMessage").value.trim();

    const budgetField = document.getElementById("contactBudget");
    const timelineField = document.getElementById("contactTimeline");

    const budget = budgetField ? budgetField.value : "";
    const timeline = timelineField ? timelineField.value : "";

    if (!name || !email || !service || !message) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

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
      "\n\nI look forward to hearing from you.\n\nThank you.";

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
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
// FOCUS PROFESSIONALS CHAT ASSISTANT
// FREE SCRIPTED BUSINESS SUPPORT
// ==========================================

(function () {
  "use strict";

  const toggle = document.getElementById("fpChatToggle");
  const close = document.getElementById("fpChatClose");
  const windowBox = document.getElementById("fpChatWindow");
  const messages = document.getElementById("fpChatMessages");
  const form = document.getElementById("fpChatForm");
  const input = document.getElementById("fpChatInput");
  const options = document.getElementById("fpChatOptions");

  if (!toggle || !close || !windowBox || !messages ||
      !form || !input || !options) {
    return;
  }

  // ENQUIRY INFORMATION
  let enquiryStep = 0;

  let enquiryDetails = {
    name: "",
    service: "",
    project: ""
  };

  // OPEN CHAT
  function openChat() {
    windowBox.classList.add("active");
    windowBox.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
  }

  // CLOSE CHAT
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

  // DISPLAY CHAT MESSAGE SAFELY
  function addMessage(message, sender) {
    const bubble = document.createElement("div");

    bubble.className = "fp-chat-message " + sender;
    bubble.textContent = message;

    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  // RESET ENQUIRY
  function resetEnquiry() {
    enquiryStep = 0;

    enquiryDetails = {
      name: "",
      service: "",
      project: ""
    };
  }

  // PREPARE WHATSAPP ENQUIRY
  function sendProjectEnquiry() {
    const whatsappMessage =
      "NEW PROJECT ENQUIRY - FOCUS PROFESSIONALS\n\n" +
      "Customer Name: " + enquiryDetails.name + "\n" +
      "Service Required: " + enquiryDetails.service + "\n" +
      "Project Description: " + enquiryDetails.project + "\n\n" +
      "Sent through the FOCUS PROFESSIONALS website assistant.";

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    addMessage(
      "Thank you for providing your project details!\n\n" +
      "Your enquiry is ready. WhatsApp will open so you can review " +
      "the message and send it to our team.",
      "assistant"
    );

    resetEnquiry();

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  // EXISTING BUSINESS ANSWERS
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
      return "FOCUS PROFESSIONALS provides:\n\n" +
        "• Website and web application development\n" +
        "• E-commerce solutions\n" +
        "• Cloud solutions and engineering\n" +
        "• AI automation\n" +
        "• Digital business systems\n\n" +
        "Which service would you like to discuss?";
    }

    if (
      text.includes("package") ||
      text.includes("pricing") ||
      text.includes("price") ||
      text.includes("cost")
    ) {
      return "We offer three service packages on our website. " +
        "Our projects are quotation-based, so the cost depends " +
        "on your requirements.\n\n" +
        "Visit our Packages section to explore the options, " +
        "or request a quotation through our assistant.";
    }

    if (
      text.includes("quotation") ||
      text.includes("quote") ||
      text.includes("hire") ||
      text.includes("start a project")
    ) {
      return "We would be happy to discuss your project! " +
        "I can collect a few details and prepare a WhatsApp enquiry for you.";
    }

    if (
      text.includes("contact") ||
      text.includes("whatsapp") ||
      text.includes("phone") ||
      text.includes("email")
    ) {
      return "You can reach FOCUS PROFESSIONALS through:\n\n" +
        "WhatsApp: +233 204 402 577\n" +
        "Email: focusprofessionals1@gmail.com\n\n" +
        "Our team will be happy to hear from you.";
    }

    if (
      text.includes("location") ||
      text.includes("where are you") ||
      text.includes("country")
    ) {
      return "FOCUS PROFESSIONALS is based in Ghana and provides " +
        "digital services to clients beyond Ghana. " +
        "Please contact our team for more information.";
    }

    if (
      text.includes("portfolio") ||
      text.includes("projects") ||
      text.includes("work")
    ) {
      return "You can explore our completed and featured projects " +
        "in the Portfolio section of our website.";
    }

    if (text.includes("thank")) {
      return "You're welcome! Thank you for considering FOCUS PROFESSIONALS.";
    }

    return "Thank you for your question. I may not have that information yet.\n\n" +
      "Please contact our team through WhatsApp at +233 204 402 577 " +
      "or email focusprofessionals1@gmail.com for assistance.";
  }

  // HANDLE CUSTOMER QUESTIONS AND ENQUIRIES
  function handleQuestion(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) return;

    const text = cleanQuestion.toLowerCase();

    addMessage(cleanQuestion, "user");

    // ALLOW CUSTOMER TO CANCEL AN ENQUIRY
    if (
      enquiryStep > 0 &&
      (text === "cancel" || text === "stop" || text === "start over")
    ) {
      resetEnquiry();

      addMessage(
        "Your project enquiry has been cancelled. " +
        "You can start a new enquiry whenever you're ready.",
        "assistant"
      );

      return;
    }

    // START ENQUIRY
    if (enquiryStep === 0) {
      if (
        text.includes("quotation") ||
        text.includes("quote") ||
        text.includes("hire") ||
        text.includes("start a project")
      ) {
        enquiryStep = 1;

        addMessage(
          "Excellent! Let's prepare your project enquiry.\n\n" +
          "First, what is your full name?",
          "assistant"
        );

        return;
      }

      addMessage(getReply(cleanQuestion), "assistant");
      return;
    }

    // COLLECT CUSTOMER NAME
    if (enquiryStep === 1) {
      if (cleanQuestion.length < 2) {
        addMessage("Please enter your name so we can continue.", "assistant");
        return;
      }

      enquiryDetails.name = cleanQuestion;
      enquiryStep = 2;

      addMessage(
        "Thank you, " + enquiryDetails.name + "!\n\n" +
        "Which service are you interested in?\n\n" +
        "For example: Website Development, E-commerce, " +
        "Cloud Solutions or AI Automation.",
        "assistant"
      );

      return;
    }

    // COLLECT SERVICE
    if (enquiryStep === 2) {
      enquiryDetails.service = cleanQuestion;
      enquiryStep = 3;

      addMessage(
        "Great! Now briefly describe the project you want " +
        "us to build or help you with.",
        "assistant"
      );

      return;
    }

    // COLLECT PROJECT DESCRIPTION
    if (enquiryStep === 3) {
      enquiryDetails.project = cleanQuestion;

      sendProjectEnquiry();
    }
  }

  // CHAT FORM SUBMISSION
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = input.value.trim();

    if (!question) return;

    handleQuestion(question);

    input.value = "";
    input.focus();
  });

  // QUICK QUESTION BUTTONS
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