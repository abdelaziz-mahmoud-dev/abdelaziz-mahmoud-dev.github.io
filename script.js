/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typing-text");

const roles = [
  "Backend Developer",
  "Node.js Developer",
  "Software Engineering Student",
  "AI & RAG Explorer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeRole() {

  const currentRole = roles[roleIndex];

  if (!deleting) {

    typingText.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {

      deleting = true;

      setTimeout(typeRole, 1800);

      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

    }

  }

  setTimeout(
    typeRole,
    deleting ? 45 : 75
  );
}


typeRole();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  observer.observe(element);

});


/* =========================
   NAVBAR ACTIVE SECTION
========================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

});