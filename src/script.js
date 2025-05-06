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
