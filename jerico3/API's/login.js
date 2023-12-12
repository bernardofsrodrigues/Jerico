async function logar() {
  /*
  const email = "email@getMaxListeners.com";
  const senha = "senhaayi12348";

  */

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value

  const url = 'https://consultconsig.azurewebsites.net/api/identidade/autenticar';

  const data = {
    "email": email,
    "senha": senha
  };
  
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
  }


  const text = await response.text();
  console.log(text);
  console.log('status: ',response.status);
  /*
    const data = `{
    "email": "admin@teste.com.br",
    "senha": "Teste@123"
  }`;*/

}

function iniciarSessao(usuario) {
  // Salvar informações do usuário e indicar que está autenticado
  localStorage.setItem('usuario', JSON.stringify(usuario));
  localStorage.setItem('autenticado', 'true');
}

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