async function processaCliente() {
    const url = 'http://carlosjunior007-001-site1.etempurl.com/api/clientes/processar';

    const data = `{
        "documento": "string"
    }`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    });

    const text = await response.text();

    console.log(text);
    console.log(response.status);
}

processaCliente();

//{"documento":"string","processamentoKey":"c1d36534-f386-4867-a392-46ac915fc724"}