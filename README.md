# Teste Gpsoft

## Instalação das Dependências

Para instalar as dependências do projeto Backend, siga os seguintes passos:

```bash
npm install
npm install knex
npm install nodemon

```

Para rodar o backend com nodemon, utilize:

```bash
npm run dev

```

Tecnologias Utilizadas
Frontend:
React
JavaScript
Vite (para criação do projeto)
Axios
Styled Components
EmailJS (API para envio de emails)
Backend:
Node.js
JavaScript
Nodemon
Knex
PostgreSQL
PgAdmin
Métodos de Implementação
Frontend
Utilizei React como a principal biblioteca JavaScript para a construção da interface do usuário, garantindo assim uma experiência de usuário dinâmica e responsiva.
O projeto foi inicializado utilizando Vite para uma configuração rápida e eficiente.
Para facilitar as requisições HTTP para o servidor, foi utilizado o Axios.
O Styled Components foi adotado para a estilização dos componentes, proporcionando uma melhor organização e reutilização de estilos.
Backend
O servidor foi desenvolvido utilizando Node.js, proporcionando um ambiente de execução eficiente e escalável para o backend da aplicação.
O acesso ao banco de dados PostgreSQL foi gerenciado utilizando Knex, fornecendo uma abstração poderosa para a manipulação do banco de dados.
Utilizei o PgAdmin para administrar e visualizar o banco de dados PostgreSQL de forma intuitiva e eficiente.
Para facilitar o envio de emails, utilizei a API EmailJS à aplicação.
Funcionalidades
O sistema está funcional, o cadastro de usuário envia um email apenas para a minha conta por questões de segurança.
Os dados do cadastro estão sendo enviados corretamente ao backend, todos os campos do banco de dados pedidos foram atendidos.
