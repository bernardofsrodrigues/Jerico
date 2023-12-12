async function logar() {

  // Mostra o loading quando o botão é clicado
  document.getElementById("loading").style.display = "block";

  // Restante do seu código de login
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const url = 'http://carlosjunior007-001-site1.etempurl.com/api/identidade/autenticar';

  const data = {
      "email": email,
      "senha": senha
  };
  
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (response.status == 200) {
          // Login bem-sucedido, salvar a sessão
          const usuario = await response.json();
          iniciarSessao(usuario);
          setCookie("token",usuario.accessToken,3600);
          window.location.href = "blank_page.html";
      } else {
          var errorMessage = document.getElementById("msgErro");
          errorMessage.classList.remove("d-none");
          setTimeout(() => {
            errorMessage.classList.add("d-none");
        }, 30000);
      }
  } catch (error) {
      console.error('Erro:', error);
  } finally {
      // Esconde o loading após a conclusão (seja sucesso ou falha)
      document.getElementById("loading").style.display = "none";
  }
}

function iniciarSessao(usuario) {
  // Salvar informações do usuário e indicar que está autenticado
  localStorage.setItem('usuario', JSON.stringify(usuario));
  localStorage.setItem('autenticado', 'true');
}

//funçao que deixei para os cookies

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

