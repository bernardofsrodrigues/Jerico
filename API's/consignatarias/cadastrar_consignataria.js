function cadastraConsignataria (event) {
    if (event) {
        event.preventDefault(); // Evita que o formulário seja enviado
    }

    const novaConsignataria = {
        nome: document.getElementById('nomee').value,
        codigo: document.getElementById('codigoo').value,
        usuario: document.getElementById('usuarioo').value,
        senha: document.getElementById('senhaa').value
    }

    console.log(novaConsignataria);

    cadastrarConsignataria(novaConsignataria);
}

async function cadastrarConsignataria(novaConsignataria) {

    document.getElementById("loading").style.display = "block";

    const url = 'http://carlosjunior007-001-site1.etempurl.com/api/consignatarias';

    const data = JSON.stringify({
        nome: novaConsignataria.nome,
        codigo: novaConsignataria.codigo,
        usuario: novaConsignataria.usuario,
        senha: novaConsignataria.senha,
        dataCriacao: novaConsignataria.dataCriacao,
        usuarioCriacao: novaConsignataria.usuarioCriacao,
        dataAlteracao: novaConsignataria.dataAlteracao,
        usuarioAlteracao: novaConsignataria.usuarioAlteracao,
        ativo: true
    });
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMzQwOTUxZC02YTZmLTQxZGEtOGI2MS03OGE0YjdkMjkxZmUiLCJlbWFpbCI6ImFkbWluQHRlc3RlLmNvbS5iciIsImp0aSI6IjZlZmQ3ZDgwLWQ5NjQtNGU5Ny1iYTM5LWI3N2Y2ZmNkMmVmOCIsIm5iZiI6MTcwMDcxNTg4NCwiaWF0IjoxNzAwNzE1ODg0LCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTcwMDc1MTg4NCwiaXNzIjoiSmVyaWNvTXVsdGJhbmNrIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QifQ.k-jgBbOprdcTMmBWAL62ljBfgSrqpUxKSDMhyCQcMH0',
                'Content-Type': 'application/json',
            },
            body: data,
        });
        
        if (response.status == 200) {
            window.location.href = "consignatarias.html";
        } else {
            var errorMessage = document.getElementById("msgErro");
            errorMessage.classList.remove("d-none");
  
            setTimeout(() => {
              errorMessage.classList.add("d-none");
          }, 20000);
        }
       
        const text = await response.text();
        console.log(text);
        console.log(response.status);
    } catch (error) {
        console.error('Erro:', error);
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}
