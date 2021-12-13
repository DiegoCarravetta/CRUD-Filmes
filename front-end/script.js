// salvo o endereço do meu url em uma variável para poder chamar
const apiUrl = "http://localhost:3000/filmes";

// mapeando, para cada elemento do meu html id="lista" ele complementa a informação
const lista = document.getElementById(`lista`);
let modoEdicao = false;
let idEdicao = 0;

// crio uma função async pra realizar uma requisitão GET
// uso o método fetch para fazer a comunicação entre back e front com o parâmtro url dentro de uma constant
// devolvo o arry usando map
const getFilmes = async () => {
    const response = await fetch(`${apiUrl}/get-filmes`);
    const filmes = await response.json();

    filmes.map((filme) => {
        lista.insertAdjacentHTML(`beforeend`, `
          <img src=${filme.imagem} class="card-img-top">
              
          <div class="card-body">
              <p class="card-id">Filme ${filme.id}</p>
              <h5 class="card-title-genero">${filme.nome} | <font size="2">${filme.genero}</font></h5>
              <h6 class="card-nota">Nota ${filme.nota}</h6>

              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id=${filme.assistido}>
              <label class="form-check-label" for=${filme.assistido}>Assistido</label>
            </div>

            <button onclick="editaFilme(${filme.id})" class="btn btn-dark">Editar</button>
            <button onclick="deleteFilme(${filme.id})" class="btn btn-danger">Deletar</button>
          </div>
        `);
    });
};

// chamo a função
getFilmes ();

// crio uma função para escolher o filme
// pego o valor do usuário e guardo em uma constant
// mapeio a tabela do html e insiro o filme nele (document.getElementById)
// pego a response do usuário e guardo em uma constant (filme)
const escolherFilme = async () => {
    const idDigitado = document.getElementById(`idFilme`).value;
    const response = await fetch(`${apiUrl}/get-by-id/${idDigitado}`);
    const filme = await response.json();
    document.getElementById('filme').insertAdjacentHTML(`beforeend`, `
        <img src=${filme.imagem} class="card-img-top">
                
        <div class="card-body">
            <p class="card-id">Filme ${filme.id}</p>
            <h5 class="card-title-genero">${filme.nome} | <font size="2">${filme.genero}</font></h5>
            <h6 class="card-nota">Nota ${filme.nota}</h6>
        </div>
    `);
};

//crio uma função para enviar os dados do front para o back
//pego os dados que o usuário digitou
// monto o objeto com os dados que o usuário digitou
// uso o fetch para fazer a chamada a api e uso a JSON Stringfy para transformar o objeto em json
const submitForm = async () => {
  const imagem = document.getElementById('imagem').value;
  const nome = document.getElementById('nome').value;
  const genero = document.getElementById('genero').value;
  const nota = document.getElementById('nota').value;

  const filme = {
    imagem,
    nome,
    genero,
    nota
  }

  if (modoEdicao) {
    putFilme(filme)
  } else {
    postFilme(filme)
  }

  lista.innerHTML = "";

  getFilmes();
  limpaCampos();
};

const postFilme = async (filme) => {
  const response = await fetch(`${apiUrl}/create`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(filme)
  });

  const data = await response.json();
  alert(data.message);

  lista.innerHTML = "";

  getFilmes();
  limpaCampos();
}

const putFilme = async (filme) => {
  const response = await fetch(`${apiUrl}/update/${idEdicao}`, {
    method: 'PUT',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(filme)
  });

  const data = await response.json();
  alert(data.message);

  lista.innerHTML = "";

  getFilmes();
  limpaCampos();

  modoEdicao = false;
  idEdicao = 0;
}

// crio a função para editar o filme pelo id
// jogo para os inputs
const editaFilme = async (id) => {
  modoEdicao = true;
  idEdicao = id;

  const filme = await getById(id)

  document.getElementById('imagem').value = filme.imagem;
  document.getElementById('nome').value = filme.nome;
  document.getElementById('genero').value = filme.genero;
  document.getElementById('nota').value = filme.nota;
}

const getById = async (id) => {
  const response = await fetch(`${apiUrl}/get-by-id/${id}`);
  const filme = await response.json();
  return filme;
};

// crio a função de deletar filme
const deleteFilme = async (id) => {
  const response = await fetch(`${apiUrl}/delete/${id}`, {
    method: 'DELETE'
  });
  const result = await response.json();
  alert(result.message);

  lista.innerHTML = "";
  getFilmes();
}

const limpaCampos = () => {
  document.getElementById('imagem').value = "";
  document.getElementById('nome').value = "";
  document.getElementById('genero').value = "";
  document.getElementById('nota').value = "";
}
