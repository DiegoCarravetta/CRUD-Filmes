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

// crio o meu controle de requisição e resposta da função byid
// chamo o id que vem do parâmetro da rota e salvo em uma constant
// recebo o id e passo para o método do service e guardo em uma constant
// envio a resposta para o front
// exporto o meu método para o arquivo de rotas
const getFilmesByIdController = (req, res) => {
    const id = req.params.id;
    const filme = filmesService.getFilmesByIdService(id);
    res.send(filme);
}

// crio a requisição e resposta da função create
// recebo a requisição do body guardando em uma constant (newFilme)
// chamo o método do service
// retorno resposta para o frontend (res)
// exporto para a route
const createFilmesController = (req, res) => {
    const newFilme = req.body;
    filmesService.createFilmesService(newFilme);
    res.send({message:`O filme ${newFilme.nome} foi cadastrado com sucesso`});
}

// crio a requisição do update
// recebo o id e body dos parêmtros e guardo em constantes
// chamo meu método passando os dois parâmetros e guardo dentro de uma constant (edit)
// crio uma validação para enviar as mensagens
// exporto para a route
const updateFilmesController = (req, res) => {
    const idParam = req.params.id;
    const filmeEdit = req.body;
    const edit = filmesService.updateFilmesService(idParam, filmeEdit);
    if (edit) {
        res.send({message: "O filme foi editado com sucesso"});
    } else {
        res.send({message: "Não foi encontrado o filme solicitado"});
    };
};

// crio a requisição do delete
// passo o id para excluir a vaga e guardo em uma constant
// chamo o método passando o parêmtro (idParam)
// retrono uma resposta para o front
// exporto para o route
const deleteFilmesController = (req, res) => {
    const idParam = req.params.id;
    filmesService.deleteFilmesService(idParam);
    res.send({message: "O filme foi excluído com sucesso"});
};

// preciso exportar as minha funções
module.exports = {
    getFilmesController,
    getFilmesByIdController,
    createFilmesController,
    updateFilmesController,
    deleteFilmesController,
};