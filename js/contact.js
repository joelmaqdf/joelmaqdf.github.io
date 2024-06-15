/*
 * Require the apiKeys file, edit _apiKeys.js
 * The EMAIL_USER_ID contain the '/api.emailjs.com' secret key
 */
let EMAIL_USER_ID;
let EMAIL;
import("./env.js").then((keySecret) => {
  EMAIL_USER_ID = keySecret.default.emailSecretKey || undefined;
  EMAIL = keySecret.default.email || undefined;
});

const notificationRef = document.getElementById("notification");
const notificationMessageRef = document.getElementById("noticationMessage");
const notificationCloseBtnRef = document.getElementById("notificationCloseBtn");
const spinner = document.getElementById("spinner");
const form = document.getElementById("contactForm");

notificationCloseBtnRef.addEventListener("click", () => {
  notificationRef.style.display = "none";
});

function showNotification(type, message) {
  notificationRef.className = type || "";
  notificationMessageRef.innerHTML = message;
  notificationRef.style.display = "flex";
  spinner.style.display = "none";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  spinner.style.display = "inline-block";
  var formData = new FormData(this);
  const name = formData.get("name");
  const message = formData.get("message");
  const email = formData.get("email");

  if (!EMAIL_USER_ID) {
    // Follow with the user app email
    event.preventDefault();
    window.open(`mailto:${EMAIL || ""}?subject=${name}&body=${message}`);
    return;
  }

  // Use the email service request
  var data = {
    service_id: "gmailMessage",
    template_id: "template_oouvpia",
    user_id: EMAIL_USER_ID,
    template_params: {
      username: name,
      email: email,
      message: message,
    },
  };

  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        showNotification("success", "Your email was sent!");
        form.reset();
      } else {
        showNotification("error", "Oops... " + response.statusText);
      }
    })
    .catch(function (error) {
      showNotification("error", "Oops... " + error);
    });
});
