

// Initialize EmailJS with your Public Key (replace with your actual key)
emailjs.init("XZWHNipaCiuHPIjJz");


const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_jaqkyql", "template_w5x5v3r", this)
            .then(function () {
                alert("Message sent successfully!");
                contactForm.reset();  // Clear form after successful send
            }, function (error) {
                alert("Failed to send message: " + JSON.stringify(error));
            });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stickeyfooter h1");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 100; // lower = faster

      let count = 0;

      const updateCount = () => {
        const increment = target / speed;

        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });
  });
const element = document.getElementById("typingText");
  const texts = ["MERN Stack Developer", "Front End Developer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentText = texts[textIndex];
    const visibleText = currentText.substring(0, charIndex);
    element.textContent = visibleText;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        charIndex++;
        delay = 100;
      } else {
        isDeleting = true;
        delay = 1000; // wait before deleting
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        delay = 50;
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 300;
      }
    }

    setTimeout(type, delay);
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });
