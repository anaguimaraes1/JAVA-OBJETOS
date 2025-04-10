const clientes = require("./clientes.json");

function encontrar(lista, chave, valor);{
    return lista.find((item) => item[chave].incluedes (valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);