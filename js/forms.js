// Учебная демонстрация без отправки персональных данных.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
  const status = document.createElement('p');
  status.className = 'alert alert-success mt-3 d-none';
  status.setAttribute('role', 'status');
  form.append(status);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Поля заполнены верно. Это учебная демонстрация: заявка не отправлена.';
    status.classList.remove('d-none');
  });
  const hideStatus = () => status.classList.add('d-none');
  form.addEventListener('reset', hideStatus);
  form.addEventListener('input', hideStatus);
});
