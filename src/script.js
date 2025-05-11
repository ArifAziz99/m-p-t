// navbar mobile
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

function openContactModal() {
  document.getElementById('contactModal').classList.remove('hidden')
}

function closeContactModal() {
  document.getElementById('contactModal').classList.add('hidden')
}


//  mouse dot
const mouseDot = document.querySelector('.mouse-dot');

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX + 80;
    mouseY = event.clientY + 80;
});

function animate() {
    // Move the dot gradually toward the mouse position
    dotX += (mouseX - dotX) * 0.05;
    dotY += (mouseY - dotY) * 0.05;

    mouseDot.style.left = `${dotX}px`;
    mouseDot.style.top = `${dotY}px`;

    requestAnimationFrame(animate);
}

animate();


// Set up IntersectionObserver to detect when sections come into view
const sections = document.querySelectorAll(".content1");

const observerOptions = {
	root: null, // Use the viewport as the root
	threshold: 0.1 // Trigger when at least 10% of the element is in view
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible1"); // Add visible class
			observer.unobserve(entry.target); // Stop observing once the element has appeared
		}
	});
}, observerOptions);

// Observe each content section
sections.forEach((section) => {
	observer.observe(section);
});


// auto hide navbar on scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.style.top = "-80px"; // Hide the navbar
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }
  lastScrollY = window.scrollY;
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  syncTouch: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});