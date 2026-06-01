// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form validation (frontend only; replace with your backend)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const agree = document.getElementById('agree');

    // Simple validation
    let ok = true;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const setErr = (el, msg) => {
      const err = el.parentElement.querySelector('.error');
      if (err) err.textContent = msg || '';
    };

    if (!name.value.trim()) { setErr(name, 'Укажите имя'); ok = false; } else setErr(name);
    if (!emailRe.test(email.value)) { setErr(email, 'Некорректный email'); ok = false; } else setErr(email);
    if (!message.value.trim()) { setErr(message, 'Напишите сообщение'); ok = false; } else setErr(message);
    if (!agree.checked) { ok = false; alert('Нужно согласиться с политикой конфиденциальности'); }

    if (!ok) return;

    // Fake submit (replace with real endpoint)
    status.textContent = 'Отправляем...';
    try {
      await new Promise(r => setTimeout(r, 800));
      status.textContent = 'Спасибо! Ваша заявка отправлена.';
      form.reset();
    } catch (e) {
      status.textContent = 'Ошибка отправки. Попробуйте снова.';
    }
  });
}