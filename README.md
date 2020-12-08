### Trabalhando em segundo plano em Node.js com Redis.

Cadastro de usuário e envio de e-mail de confirmação de cadastro como tarefa em background utilizando node.js e redis.

#### :rocket: Tecnologias
- [Express](https://expressjs.com/pt-br/) 
- [Bull](https://optimalbits.github.io/bull/)

#### 💻 Pré-requisitos
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Redis](https://redis.io/)

####  🍃 Iniciando

-   Clone o repositório
-   Entre na pasta `node-redis`
-   Executar `yarn` ou ` install` npm para instalar as dependências
-   Copie o arquivo `.env.example` e crie um arquivo` .env` com e-mail e as credenciais Redis
-   Para executar use `yarn dev` e ` yarn queue` para iniciar o servidor e as filas em background

#### 🌐 Rotas

- Servidor - Exemplo: http://localhost:8080
- Dashboard bull-board - Exemplo: http://localhost:8080/admin/queues