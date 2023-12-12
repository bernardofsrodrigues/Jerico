/* 
const email = 'emailteste@gmail.com';
const senha = 'maa123435a';                 //parametros de teste
const nova_senha = 'fsgs12313141g';

const email = document.getElementById('email').value; //colocar IDs ainda
const senha = document.getElementById('senha').value;
const nova_senha = document.getElementById('novasenha').value;
*/

const email = $('#email').val();
const senha = $('#senha').val();
const nova_senha = $('#novasenha').val();


async function alterarSenha() {
    const url = 'https://consultconsig.azurewebsites.net/api/identidade/alterar-senha';

    const data = {
        email: email,
        senhaAtual: senha,
        senhaNova: nova_senha
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convertendo o objeto data para uma string JSON
    });

    const text = await response.text();

    console.log(text);
    console.log(response.status);
}

//200
