// Typing Animation

const text = [
    "Aspiring Full Stack Developer",
    "Java Learner",
    "Web Developer",
    "DSA Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (charIndex < text[textIndex].length) {

        typingElement.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 1500);
    }
}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent =
            text[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (text.length) {
        setTimeout(typeText, 500);
    }

});


// Navbar Active Link Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, form"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});