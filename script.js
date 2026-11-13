"use strict";

// FOCUS PROFESSIONALS website functionality
const WHATSAPP_NUMBER = "233204402577";

const getElement = (id) => document.getElementById(id);

// Set current year
const yearElement = getElement("currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// MOBILE NAVIGATION
const menuToggle = getElement("menuToggle");
const navLinks = getElement("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// CONTACT FORM
const contactForm = getElement("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = getElement("contactName")?.value.trim() || "";
    const email = getElement("contactEmail")?.value.trim() || "";
    const service = getElement("contactService")?.value || "";
    const budget = getElement("contactBudget")?.value || "Not specified";
    const timeline = getElement("contactTimeline")?.value || "Not specified";
    const message = getElement("contactMessage")?.value.trim() || "";

    if (!name || !email || !service || !message) {
      alert("Please complete all required fields.");
      return;
    }

    const enquiry = `
FOCUS PROFESSIONALS - NEW PROJECT ENQUIRY

Name: ${name}
Email: ${email}
Service Required: ${service}
Budget: ${budget}
Timeline: ${timeline}

Project Details:
${message}

POWERED BY FOCUS PROFESSIONALS
    `.trim();

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}

// WEBSITE CHATBOT
const chatToggle = getElement("fpChatToggle");
const chatClose = getElement("fpChatClose");
const chatWindow = getElement("fpChatWindow");
const chatMessages = getElement("fpChatMessages");
const chatForm = getElement("fpChatForm");
const chatInput = getElement("fpChatInput");
const chatOptions = getElement("fpChatOptions");

let leadCollection = {
  active: false,
  step: 0,
  name: "",
  service: "",
  details: ""
};

function openChat() {
  if (chatWindow) {
    chatWindow.classList.add("active");
    chatInput?.focus();
  }
}

function closeChat() {
  chatWindow?.classList.remove("active");
}

chatToggle?.addEventListener("click", openChat);
chatClose?.addEventListener("click", closeChat);

function addChatMessage(message, sender = "bot") {
  if (!chatMessages) return;

  const messageElement = document.createElement("div");
  messageElement.className =
    sender === "user"
      ? "chat-message user-message"
      : "chat-message bot-message";

  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addWhatsAppLink(message) {
  if (!chatMessages) return;

  const wrapper = document.createElement("div");
  wrapper.className = "chat-message bot-message";

  const text = document.createElement("p");
  text.textContent = message;

  const link = document.createElement("a");
  link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Chat with FOCUS PROFESSIONALS on WhatsApp";

  wrapper.appendChild(text);
  wrapper.appendChild(link);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function beginLeadCollection() {
  leadCollection = {
    active: true,
    step: 1,
    name: "",
    service: "",
    details: ""
  };

  addChatMessage(
    "Excellent! Let's prepare your project enquiry. What is your full name?"
  );
}

function handleLeadCollection(message) {
  if (leadCollection.step === 1) {
    leadCollection.name = message;
    leadCollection.step = 2;
    addChatMessage(
      `Thank you, ${message}! Which service do you need? For example, website development, e-commerce, cloud solutions or AI automation.`
    );
    return;
  }

  if (leadCollection.step === 2) {
    leadCollection.service = message;
    leadCollection.step = 3;
    addChatMessage(
      "Please describe what you want us to build or help you achieve."
    );
    return;
  }

  if (leadCollection.step === 3) {
    leadCollection.details = message;
    leadCollection.active = false;

    const enquiry = `
FOCUS PROFESSIONALS - PROJECT ENQUIRY

Name: ${leadCollection.name}
Service: ${leadCollection.service}

Project Details:
${leadCollection.details}

POWERED BY FOCUS PROFESSIONALS
    `.trim();

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

    addChatMessage(
      "Your project enquiry is ready! Tap the WhatsApp link below to send it to our team."
    );

    const wrapper = document.createElement("div");
    wrapper.className = "chat-message bot-message";

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Send project enquiry on WhatsApp";

    wrapper.appendChild(link);
    chatMessages?.appendChild(wrapper);

    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}

function getBotResponse(message) {
  const text = message.toLowerCase();

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("quotation") ||
    text.includes("quote") ||
    text.includes("hire") ||
    text.includes("start a project")
  ) {
    beginLeadCollection();
    return null;
  }

  if (
    text.includes("service") ||
    text.includes("what do you do")
  ) {
    return `FOCUS PROFESSIONALS offers:

• Professional website development
• E-commerce websites
• Custom web applications
• Cloud engineering and solutions
• AI automation
• Business management systems
• Website maintenance and support
• Digital consulting

Which service would you like to discuss?`;
  }

  if (
    text.includes("website") ||
    text.includes("web development") ||
    text.includes("online store") ||
    text.includes("ecommerce") ||
    text.includes("e-commerce")
  ) {
    return "We build professional, responsive websites, online stores and custom digital platforms designed around your business needs. Would you like to request a quotation?";
  }

  if (
    text.includes("cloud") ||
    text.includes("server") ||
    text.includes("hosting")
  ) {
    return "Our cloud solutions include cloud engineering, deployment support, hosting guidance and business infrastructure solutions. Would you like to discuss a cloud project?";
  }

  if (
    text.includes("ai") ||
    text.includes("automation") ||
    text.includes("chatbot")
  ) {
    return "We help businesses explore AI automation, customer-support chatbots and smarter digital workflows. Tell us what you want to automate.";
  }

  if (
    text.includes("package") ||
    text.includes("plan")
  ) {
    return "We offer three project approaches:\n\n1. Launch – for essential business websites.\n2. Business – for growing businesses that need more features.\n3. Custom – for advanced applications and tailored systems.\n\nFinal pricing depends on your project requirements.";
  }

  if (
    text.includes("contact") ||
    text.includes("whatsapp") ||
    text.includes("phone")
  ) {
    addWhatsAppLink(
      "You can reach our team directly using the WhatsApp link below. You can also email focusprofessionals1@gmail.com."
    );
    return null;
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("good morning") ||
    text.includes("good afternoon") ||
    text.includes("good evening")
  ) {
    return "Hello! Welcome to FOCUS PROFESSIONALS. How can we help you today? You can ask about our services, packages or project quotations.";
  }

  return "Thank you for your message. I can help with information about our services, packages and project enquiries. You can also request a quotation or contact our team directly.";
}

function handleChatMessage(message) {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;

  addChatMessage(cleanMessage, "user");

  if (leadCollection.active) {
    handleLeadCollection(cleanMessage);
    return;
  }

  const response = getBotResponse(cleanMessage);

  if (response) {
    addChatMessage(response);
  }
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = chatInput?.value.trim();

  if (!message) return;

  handleChatMessage(message);
  chatInput.value = "";
});

chatOptions?.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.dataset.question;

    const quickQuestions = {
      services: "What services do you offer?",
      packages: "Tell me about your packages.",
      quotation: "I want a quotation for a project.",
      contact: "How can I contact your team?"
    };

    openChat();

    if (quickQuestions[question]) {
      handleChatMessage(quickQuestions[question]);
    }
  });
});
