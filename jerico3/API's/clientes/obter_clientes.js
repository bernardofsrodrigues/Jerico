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
    const url = 'https://consultconsig.azurewebsites.net/api/clientes/obter-cliente/44efadca-8e45-49fc-8b5a-a8f16562e488';

    var token = getCookie("token");
    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    const data = await response.json(); // Assumindo que a resposta da API é JSON

    // Exibindo os dados no console para verificar
    console.log(data);

    // Exibindo os dados na página HTML
    const resultadoDiv = document.getElementById('resultado');
    
    // Verifique se a resposta da API é um objeto JSON
    if (data && typeof data === 'object') {
        resultadoDiv.innerHTML = `<p>Consignatarias ${data.consignatarias}</p>
                                <p>Nome: ${data.nome}</p>
                                <p>CPF: ${data.cpf}</p>
                                <p>Consignatarias ${data.erro}</p>
                                <p>ProcessamentoID ${data.ProcessamentoID}</p>
                                <p>Status ${data.status}</p>`
                                
    } else {
        resultadoDiv.innerHTML = 'Erro ao obter dados da API.';
    }
}

obterClientes();