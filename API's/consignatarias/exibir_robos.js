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

async function exibirRobos() {

    const url = 'https://consultconsig.azurewebsites.net/api/consignatarias/id?id=3fa85f64-5717-4562-b3fc-2c963f66afa6';

    let token = getCookie("token");
    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    const text = await response.text();

    const resultadoAPIElemento = document.getElementById('robos');

    if (response.status === 200) {
        resultadoAPIElemento.textContent = text;
      } else {
        resultadoAPIElemento.textContent = 'erro';
      }

    console.log(text);
    console.log(response.status);
}

exibirRobos();