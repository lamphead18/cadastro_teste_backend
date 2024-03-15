const { createUser } = require("../models/index.js")

const signup = async (request, response) => {
    const { cnpj, login, senha, logomarca, anexo_cert, senha_cert, nome_fantasia, contato, endereco, numero, bairro, cidade, uf, whatsapp, email, status } = request.body;

    const user = { cnpj, login, senha, logomarca, anexo_cert, senha_cert, nome_fantasia, contato, endereco, numero, bairro, cidade, uf, whatsapp, email, status };

    const createdUser = await createUser(user);

    response.status(201).json(createdUser);
};

module.exports = {
    signup,
};