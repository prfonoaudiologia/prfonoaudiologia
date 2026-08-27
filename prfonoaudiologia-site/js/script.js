// =========================================================
// Polyana Rosa Fonoaudiologia — interações do site
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Menu mobile ----
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link (útil no celular)
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- FAQ (acordeão) ----
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fecha os outros itens abertos (efeito acordeão)
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // ---- Ano atual no rodapé ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Formulário de contato (Formspree) ----
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (form.action.includes('SEU_ENDPOINT_AQUI')) {
        status.textContent = 'Formulário ainda não conectado — configure o Formspree (veja o README) ou fale direto pelo WhatsApp.';
        status.style.color = '#b5677d';
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      status.textContent = 'Enviando...';
      status.style.color = '#6b6570';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          status.textContent = 'Mensagem enviada! Retornaremos em breve.';
          status.style.color = '#3f8f6f';
          form.reset();
        } else {
          status.textContent = 'Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.';
          status.style.color = '#b5677d';
        }
      } catch (error) {
        status.textContent = 'Erro de conexão. Tente novamente ou chame no WhatsApp.';
        status.style.color = '#b5677d';
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  // ---- Destaca o link ativo no menu ao rolar a página ----
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
