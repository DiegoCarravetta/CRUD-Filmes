// serve o controller com as regras de negócios
// todos os métodos ficam no service

// iniciando meus dados fixos manualmente (CRUD memória)
const filmes = [
    {
        id: 1,
        nome: "Venom: Tempo de Carnificina",
        imagem: "https://br.web.img2.acsta.net/pictures/21/05/10/15/32/2425639.png",
        genero: "Ação",
        nota: 10,
        assistido: false
    },

    {
        id: 2,
        nome: "Shang-Chi e a Lenda dos Dez Anéis",
        imagem: "https://br.web.img3.acsta.net/pictures/21/08/05/20/13/2818037.jpg",
        genero: "Ação",
        nota: 10,
        assistido: false
    },

    {
        id: 3,
        nome: "Duna",
        imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/21/09/29/20/10/5897145.jpg",
        genero: "Ação",
        nota: 10,
        assistido: false
    }
];

// crio o meu primeiro método
// retornar o que tiver dentro do meu DB
const getFilmesService = () => {
    return filmes;
};

// crio o método getbyid e chamo uma função recebendo o parâmetro que busca o id (idParam)
// uso a função find para procurar no array o id escolhido pelo usuário
// crio uma função de callback que recebe filme como parâmetro e analisa se é o mesmo do parâmetro do usuário
// exporto a função
const getFilmesByIdService = (idParam) => {
    return filmes.find((filme) => filme.id == idParam);
};

//crio o meu método create para criar um novo filme
// uso um parâmetro (newFilme) para passar o arquivo JSON com as informações do usuário
// não passo o id no JSON porque ele é automático (simulo ela aqui com uma constant newId)
// descubro o tamanho do meu DB usando o lenght e adiciono +1
// passo o novo id para o novo filme
// insiro a nova vaga no DB usando a função push
// retorno para o controller o novo filme
// exporto para o controller a função
const createFilmesService = (newFilme) => {
    const newId = filmes.length + 1;
    newFilme.id = newId;
    newFilme.assistido = false;
    filmes.push (newFilme);
    return newFilme;
};

// crio o meu método de update para atualizar um filme
// passo como parâmetro o id e filme que será editado (simulação)
// busco o id no DB com o findIndex e guardo em uma constant (index)
// faço uma validação para confirmar se o index foi encontrado
// espelho o filme para alterar somente a informação que o usuário irá colocar
// retorno um true para o controller saber que a edição foi feita com sucesso ou false para saber que deu erro
// exporto meu método para o controller
const updateFilmesService = (idParam, filmeEdit) => {
    const index = filmes.findIndex((filme) => filme.id == idParam);
    if (index >= 0) {
        filmes[index] = {
            ...filmes[index],
            ...filmeEdit
        }
        return true;
    } else {
        return false;
    };
};

// crio o meu método de deletar filme
// passo o id como parâmetro (idParam)
// busco o index do filme para exclusão
// crio uma constant que guarda o filme excluído e retorno ela para o controller
// uso o splice para excluir o index
// exporto o método para o controller
const deleteFilmesService = (idParam) => {
    const index = filmes.findIndex((filme) => filme.id == idParam);
    const filmeExcluido = filmes[index];
    filmes.splice(index, 1)
    return filmeExcluido;
}

// exporto o meu service
// crio um objeto para exportar uma função de cada vez
module.exports = {
    getFilmesService,
    getFilmesByIdService,
    createFilmesService,
    updateFilmesService,
    deleteFilmesService,
};