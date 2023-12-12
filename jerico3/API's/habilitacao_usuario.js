//como pegar e salvar email para esse código usa-lo como parâmetro
async function habilitarUsuario() {

    const url = 'https://consultconsig.azurewebsites.net/api/identidade/habilitacao-usuario';

    const data = `{
        "email": "user@example.com",
        "isActive": true
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

habilitarUsuario();

//200