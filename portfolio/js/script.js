/* ===========================
   DARK / LIGHT THEME
=========================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-theme");
        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";

        }

    });

}

/* ===========================
   TYPING EFFECT
=========================== */

const typingElement = document.getElementById("typing-text");

if (typingElement) {

    const words = [

        "Aspiring Full Stack Developer",

        "Java Programmer",

        "Web Developer",

        "Problem Solver",

        "Tech Enthusiast"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1200);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}

/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(

    ".overview-card, .project-card, .about-card, .education-card, .goal-card, .tech-card, .contact-info, .contact-form"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.8s ease";

    observer.observe(element);

});

/* ===========================
   CONTACT FORM
=========================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send(

            "service_n6a3wfa",

            "template_te76jea",

            {

                from_name: document.getElementById("from_name").value,

                from_email: document.getElementById("from_email").value,

                subject: document.getElementById("subject").value,

                message: document.getElementById("message").value

            }

        ).then(function () {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        }).catch(function (error) {

            alert("❌ Failed to send message.");

            console.log(error);

        });

    });

}

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});