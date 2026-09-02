document.getElementById('rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get('name');
  document.getElementById('status').textContent = `Cảm ơn ${name}! Chúng mình đã nhận được lời hồi âm của bạn.`;
  form.reset();
});
