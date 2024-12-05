function sendContact() {
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const phoneInput = document.getElementById('phone-input');
  const messageInput = document.getElementById('message-input');

  const message = `Obrigado pelo contato, ${nameInput.value}!`;

  alert(message);

  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  messageInput.value = '';
}
