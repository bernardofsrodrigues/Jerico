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

async function obterClientes() {
  const url = 'http://carlosjunior007-001-site1.etempurl.com/api/clientes/obter-cliente/c1d36534-f386-4867-a392-46ac915fc724';

    try {

        var token = getCookie("token");
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });
    
        const data = await response.json(); // Assumindo que a resposta da API é JSON
        const dataArray = data.consignatarias;

        console.log(data);
    
        if (response.status === 200) {
          const tabela = document.getElementById('tabela-clientes');
    
          dataArray.forEach((clientes, index) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td class="nome">${clientes.Nome}</td>
                <td class="codigo">${clientes.CPF}</td>
                <td class="usuario">${clientes.Consignatária}</td>
                <td class="senha">${clientes.ProcessamentoID}</td>
                <td class="dataCriacao">${clientes.Status}</td>
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

obterClientes();
