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
