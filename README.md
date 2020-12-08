### Working in the background with Node.js and Redis

User registration and sending confirmation email as a background task.

#### :rocket: Technologies
- [Express](https://expressjs.com/pt-br/) 
- [Bull](https://optimalbits.github.io/bull/)
- [Nodemailer](https://nodemailer.com/about/)
- [Sentry](https://sentry.io/)

#### 💻 Prerequisites
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Redis](https://redis.io/)

####  🍃 Starting

-   Clone the repository
-   Enter the folder `node-redis`
-   Run `yarn` or  install `npm` to install dependencies
-   Copy the file `.env.example` and create new file `.env` with email and Redis credentials
-   To run, use `yarn dev` and ` yarn queue` to start the server and queues in the background.

#### 🌐 Rotas
Example using port 8080:
- Server / method post - http://localhost:8080/users
- Dashboard bull-board - http://localhost:8080/admin/queues