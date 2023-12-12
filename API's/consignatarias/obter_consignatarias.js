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

async function obterConsignatarias() {
    const url = 'http://carlosjunior007-001-site1.etempurl.com/api/consignatarias';

    
    try {

      let token = getCookie("token");
      const response = await fetch(url, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.status === 200) {
        const tabela = document.getElementById('tabela-consignatarias');
  
        data.forEach((consignataria, index) => {
          const novaLinha = document.createElement('tr');
          novaLinha.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td class="nome">${consignataria.nome}</td>
            <td class="codigo">${consignataria.codigo}</td>
            <td class="usuario">${consignataria.usuario}</td>
            <td class="senha">${consignataria.senha}</td>
            <td class="dataCriacao">${consignataria.dataCriacao}</td>
            <td class="usuarioCriacao">${consignataria.usuarioCriacao}</td>
            <td class="dataAlteracao">${consignataria.dataAlteracao}</td>
            <td class="usuarioAlteracao">${consignataria.usuarioAlteracao}</td>
            <td class="ativo">${consignataria.ativo}</td>
          `;
          tabela.querySelector('tbody').appendChild(novaLinha);
        });
      } else {
        console.error('Erro na requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  obterConsignatarias();
  
