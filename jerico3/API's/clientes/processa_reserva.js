async function processaReserva() {
    const url = 'https://consultconsig.azurewebsites.net/api/clientes/processar-reserva';

    const data = {
        consignatariaId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        convenio: "string",
        matricula: "string",
        valorLiquido: 0,
        valorOperacao: 0,
        valorPrestacao: 0,
        quantidadeParcelas: 0,
        verbaDesconto: "string",
        contrato: "string",
        processamento: ""
      };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const text = await response.text();

    console.log(text);
    console.log(response.status);
}

processaReserva();

//500-200