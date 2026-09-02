document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' }));
});

document.getElementById('rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get('name');
  document.getElementById('form-status').textContent = `Cảm ơn ${name}! Chúng mình đã nhận được lời hồi đáp của bạn.`;
  form.reset();
});
