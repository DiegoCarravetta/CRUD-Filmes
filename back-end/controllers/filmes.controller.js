// responsável por controlar as rotas
// vai trazer as requisições e respostas (req, res)
// sem controller, não consigo usar os métodos que estão no service

// os métodos do service precisam ser importados require("../services/filmes.service")
// a importação é feito dentro de uma const
const filmesService = require("../services/filmes.service");

// preciso criar o meu primeiro método, que está na primeira rota
// preciso passar a função do meu service para esse método dentro de uma constant
// preciso enviar para o meu front uma resposta (res)
// preciso criar o meu service
const getFilmesController = (req, res) => {
    const filmes = filmesService.getFilmesService();
    res.send(filmes);
};

//crio o meu controle de requisição e resposta da função byid
// chamo o id que vem do parâmetro da rota e salvo em uma constant
// recebo o id e passo para o método do service e guardo em uma constant
// envio a resposta para o front
// exporto o meu método para o arquivo de rotas
const getFilmesByIdController = (req, res) => {
    const id = req.params.id;
    const filme = filmesService.getFilmesByIdService(id);
    res.send(filme);
}

// preciso exportar as minha funções
module.exports = {
    getFilmesController,
    getFilmesByIdController,
};