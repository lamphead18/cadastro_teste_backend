const connection = require("../database/connection");

const createUser = async (user) => {
    const { cnpj, login, senha, logomarca, anexo_cert, senha_cert, nome_fantasia, contato, endereco, numero, bairro, cidade, uf, whatsapp, email, status } = user;

    const createdUser = await connection("cadastro").insert({ cnpj, login, senha, logomarca, anexo_cert, senha_cert, nome_fantasia, contato, endereco, numero, bairro, cidade, uf, whatsapp, email, status }).returning("*")

    return createdUser[0]
}

module.exports = { createUser };