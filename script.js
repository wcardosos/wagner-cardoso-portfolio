// Função para pegar os dados dos inputs, mostrar um alerta na tela e limpar os inputs após o submit
function sendContact() {
  // Busca dos inputs
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const phoneInput = document.getElementById('phone-input');
  const messageInput = document.getElementById('message-input');

  // Construção da mensagem
  const message = `Obrigado pelo contato, ${nameInput.value}!`;
  alert(message);

  // Reset dos inputs
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  messageInput.value = '';
}
