/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("cadastro", (table) => {
        table.increments("id").primary();
        table.string("cnpj").notNullable();
        table.string("login").notNullable();
        table.string("senha").notNullable();
        table.string("logomarca").notNullable();
        table.string("anexo_cert").notNullable();
        table.string("senha_cert").notNullable();
        table.string("nome_fantasia").notNullable();
        table.string("contato").notNullable();
        table.string("endereco").notNullable();
        table.string("numero").notNullable();
        table.string("bairro").notNullable();
        table.string("cidade").notNullable();
        table.string("uf").notNullable();
        table.string("whatsapp").notNullable();
        table.string("email").notNullable();
        table.integer("status").notNullable();

        table.unique(["email"], { indexName: 'email_unique', useConstraint: true })
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("cadastro");
};