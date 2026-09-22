document.getElementById('burger')?.addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.remove('open');
  });
});

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMsg').style.display = 'block';
    form.reset();
  });
}
