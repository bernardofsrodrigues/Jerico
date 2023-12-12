async function alterarConsignataria() {
    const url = 'https://consultconsig.azurewebsites.net/api/consignatarias';

    const data = `{
    "nome": "string",
    "codigo": "string",
    "usuario": "string",
    "senha": "string",
    "dataCriacao": "2023-11-23T05:35:32.165499",
    "usuarioCriacao": "a340951d-6a6f-41da-8b61-78a4b7d291fe",
    "dataAlteracao": "2023-11-23T05:08:30.418",
    "usuarioAlteracao": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "ativo": true
    }`;

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMzQwOTUxZC02YTZmLTQxZGEtOGI2MS03OGE0YjdkMjkxZmUiLCJlbWFpbCI6ImFkbWluQHRlc3RlLmNvbS5iciIsImp0aSI6IjZlZmQ3ZDgwLWQ5NjQtNGU5Ny1iYTM5LWI3N2Y2ZmNkMmVmOCIsIm5iZiI6MTcwMDcxNTg4NCwiaWF0IjoxNzAwNzE1ODg0LCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTcwMDc1MTg4NCwiaXNzIjoiSmVyaWNvTXVsdGJhbmNrIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QifQ.k-jgBbOprdcTMmBWAL62ljBfgSrqpUxKSDMhyCQcMH0',
            'Content-Type': 'application/json',
        },
        body: data,
    });

    const text = await response.text();

    console.log(text);
    }