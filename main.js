console.log("Global JS loaded");

document.addEventListener("DOMContentLoaded", () => {

  // Contact form handling (only if form exists)
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong");
      });
    });
  }

});
