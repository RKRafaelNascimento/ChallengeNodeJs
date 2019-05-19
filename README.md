# Desafio Nodejs

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/RKRafaelNascimento/ChallengeNodeJs.git`

### Instalando as Dependências

`npm install`

Dentro do diretorio src/infrastructure/mongoDB/client.js altere a url para `mongodb://localhost:' + port + '/challenge`

### Inicializando o Servidor

`npm start` ou `npm run nodemon`

- App na PORT: 3000

## 2. Caso não possua NodeJs ou mongoDB instalado.

### Segue os passos abaixo:

Dentro do diretorio src/infrastructure/mongoDB/client.js mantém a url para 'mongodb://mongo:' + port + '/challenge'

Vá ate o diretorio scripts e execute:

`sh start-application.sh`

ou no diretorio raiz execute:

`docker-compose up`

- App na PORT: 8080 e MONGO na PORT: 27017

### Sobre aplicação

- Na inicialização da aplicação é executado um arquivo create-test-data.js onde é feito o carregamento da URL https://jsonplaceholder.typicode.com/users e todos os dados são salvos no banco de dados.

## http://localhost:8080/user

- Retorna todos os usuarios.

## http://localhost:8080/user?filter=websites

- Os websites de todos os usuários

## http://localhost:8080/user?filter=work

- O Nome, email e a empresa em que trabalha (em ordem alfabética)

## http://localhost:8080/user?filter=address

- Mostrar todos os usuários que no endereço contem a palavra `suite`
