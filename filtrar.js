const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((clientes) => {
        return ( 
            cliente.endereco.apartamento &&
            !cliente.endereco.has0wnProperty("complemento")
        )
    });
}

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);