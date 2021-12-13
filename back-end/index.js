// index é o arquivo de servidor
// é o coração do projeto
// todas as configurações gerais ficam aqui
// alguns programadores usam index ou server
 
// a primeira coisa que preciso fazer é colocar o express
// express é o framework que usamos para construir a api
// crio uma constant para guardar o express
// chamo o express com o require
const express = require("express");

// chamo a biblioteca cors
const cors = require("cors");

// preciso iniciar o express armazenado na constant
// uso a constant app para iniciar o express
// express é uma função
// tada vez que eu chamar o app, ele vai ter todos os métodos do express
// agora toda vez que eu for usar o express, uso o app
const app = express();

// inicio o cors
app.use(cors());

// uso a função use para usar o método json
// serve para configurar as requisições e respostas no formato json (JavaScript Object Notation)
app.use(express.json());

// preciso importar o router no server
// crio uma constant chamada filmesRouter que recebe o arquivo de rotas ("./routes/filmes.route")
const filmesRouter = require("./routes/filmes.route");

// preciso dar um nome geral para poder usar minhas rotas ("/filmes")
// preciso chamar o meu arquivo de rotas para usar no server
app.use("/filmes", filmesRouter);

// preciso configurar a porta onde meu servidor vai rodar
// crio uma const chamado port para armazenar essa informação
// geralmente usa o valor 3000 ou 30001
// uso a função listen para enviar a port e uma function para passar uma mensagem no terminal para saber que está OK
// faço isso para que, caso precise trocar a porta, mudo apenas o conteúdo da const port
const port = 3000;
app.listen (port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
