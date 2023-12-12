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

function excluirConsignataria(event) {
    if (event) {
        event.preventDefault(); // Evita que o formulário seja enviado
    }

    const removerConsignatariaData = {  // Renomeie para evitar conflito de nomes
        nome: document.getElementById('nnome').value,
        codigo: document.getElementById('ccodigo').value,
        senha: document.getElementById('ssenha').value
    }

    console.log(removerConsignatariaData);

    removerConsignataria(removerConsignatariaData);  // Chame a função correta
}


async function removerConsignataria(removerConsignataria) {
    const url = 'https://consultconsig.azurewebsites.net/api/consignatarias?Id=3fa85f64-5717-4562-b3fc-2c963f66afa6';

    const data = JSON.stringify({
        nome: removerConsignataria.nome,
        codigo: removerConsignataria.codigo,
        usuario: removerConsignataria.usuario,
        senha: removerConsignataria.senha,
        dataCriacao: removerConsignataria.dataCriacao,
        usuarioCriacao: removerConsignataria.usuarioCriacao,
        dataAlteracao: removerConsignataria.dataAlteracao,
        usuarioAlteracao: removerConsignataria.usuarioAlteracao,
        ativo: true
    });



        let token = getCookie("token");
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            body: data,
        });

        const text = await response.text();

        console.log(text);
}
