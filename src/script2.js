// read more to show less 
function toggleBlog(button) {
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
    button.textContent = content.classList.contains('hidden') ? 'Read More' : 'Show Less';
  }

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
