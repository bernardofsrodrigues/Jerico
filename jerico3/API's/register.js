  const novoUsuario = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    senha: document.getElementById('senha').value,
    confirmasenha: document.getElementById('confirmasenha').value
  }
  
  if (novoUsuario.senha != novoUsuario.confirmasenha) {
    alert('As senhas não coincidem.');
  }
  
  console.log(novoUsuario);
  cadastrar(novoUsuario);


async function cadastrar(novoUsuario) {
const url = 'https://consultconsig.azurewebsites.net/api/identidade/nova-conta';

const data = JSON.stringify({
  nome: novoUsuario.username,
  email: novoUsuario.email,
  senha: novoUsuario.senha,
  senhaConfirmacao: novoUsuario.confirmasenha,
  isAdmin: true, 
  isActive: true, 
});

const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: data,
});

const text = await response.text();

console.log(text);

}