// organiza as rotas
// é o segundo arquivo mais importante porque definem as rotas
// sem definir as rotas, não consigo usar o controller e service

// vou precisar usar o express no route também
const express = require("express");

// vou precisar usar uma função do express chamada router para definir minhas rotas
// Método é sempre com letra maiúscula
const router = express.Router();

// preciso importar o controller dentro do router
// uso o nome da constante que representa aquilo que está fazendo
// importo usando o require("../controllers/filmes.controller")
const filmesController = require("../controllers/filmes.controller");

// chamo minha primeira rota
// GET é o método para a primeira rota
// como no server, tada vez que eu chamar o router, ele vai ter todos os métodos do express
// chamo o controller importado com a função ainda não criada (.getFilmes) para mostrar todas as minhas vagas no DB
// preciso iportar o controlador
// para as próximas rotas, só chamar (se tiver um parâmetro específico, não esquecer de usar o /:id)
router.get("/get-filmes", filmesController.getFilmesController);
router.get("/get-by-id/:id", filmesController.getFilmesByIdController);

// depois de criar a rota, preciso exportar ela no server para poder usar
// module.exports é o método usado para exportar funções
// o método usa a constante do módulo
module.exports = router;