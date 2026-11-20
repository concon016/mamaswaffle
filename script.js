const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger?.classList.remove('open');
}));

// İletişim formu: /api/iletisim ile gerçek e-postaya gider
document.querySelectorAll('.js-form').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    const btn = form.querySelector('button[type="submit"]');
    const veri = Object.fromEntries(new FormData(form));
    btn.disabled = true;
    try {
      const r = await fetch('/api/iletisim', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(veri) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.hata || 'Mesaj gönderilemedi, lütfen tekrar dene.');
      msg.textContent = form.dataset.msg;
      form.reset();
    } catch (err) {
      msg.textContent = err.message;
    }
    msg.classList.add('show');
    btn.disabled = false;
  });
});

// Kaydırınca beliren bölümler
const io = 'IntersectionObserver' in window && new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

// Menü sekmeleri: görünen bölümü vurgula
const tabs = document.querySelectorAll('.tabs a');
if (tabs.length && 'IntersectionObserver' in window) {
  const tio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) tabs.forEach(t => t.classList.toggle('on', t.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('.menu-sec').forEach(s => tio.observe(s));
}
