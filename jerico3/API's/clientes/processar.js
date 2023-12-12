async function processaCliente() {
    const url = 'https://consultconsig.azurewebsites.net/api/clientes/processar';

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