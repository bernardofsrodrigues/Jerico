document.getElementById('sair').addEventListener('click', function() {
    // Chama a função para encerrar a sessão
    encerrarSessao();
});

function encerrarSessao() {
    // Limpar informações do usuário e indicar que não está autenticado
    localStorage.removeItem('usuario');
    localStorage.removeItem('autenticado');

    console.log("Sessão encerrada");
  
    // Redirecionar para a página de login ou outra página desejada
    window.location.href = "../../pages/samples/login.html";
  }
