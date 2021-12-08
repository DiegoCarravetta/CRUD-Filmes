// serve o controller com as regras de negócios
// todos os métodos ficam no service

// iniciando meus dados fixos manualmente (CRUD memória)
const filmes = [
    {
        id: 1,
        nome: "Venom: Tempo de Carnificina",
        imagem: "https://br.web.img2.acsta.net/pictures/21/05/10/15/32/2425639.png",
        genero: "Ação",
        nota: "",
        assistido: false
    },

    {
        id: 2,
        nome: "Shang-Chi e a Lenda dos Dez Anéis",
        imagem: "https://br.web.img3.acsta.net/pictures/21/08/05/20/13/2818037.jpg",
        genero: "Ação",
        nota: "",
        assistido: false
    },

    {
        id: 3,
        nome: "Duna",
        imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/21/09/29/20/10/5897145.jpg",
        genero: "Ação",
        nota: "",
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
    return filmes.find((filme) => filme.id == idParam)
};

// exporto o meu service
// crio um objeto para exportar uma função de cada vez
module.exports = {
    getFilmesService,
    getFilmesByIdService,
};