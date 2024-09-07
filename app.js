
//Função que mostra todos os resultados
function mostrarTudoeResetar() {
  let section = document.getElementById("resultados-pesquisa");
  let mostra = "";

  for (let dado of dados){
    mostra += `
        <div class='item-resultado'>
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
  }
  section.innerHTML = mostra;
  
  //Desativando qualquer filtro ativo
  let filtros = document.querySelectorAll(".item-filtro");

  filtros.forEach((filtro) => {
  if (value.toLowerCase() == filtro.innerText.toLowerCase()){
  filtro.classList.remove("ativo");
  }
  })
}


//Mostra todos os itens quando o programa é iniciado
window.onload = () =>{
  mostrarTudoeResetar()
}



//---------------------------------------------------
//Função de Filtrar

function filtrar(value){
  
  //Reseta o campo de busca para vazio quando muda o filtro
  document.getElementById("campo-pesquisa").value = '';

  //Declarando as variáveis necessárias
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";
  let filtros = document.querySelectorAll(".item-filtro");

  //ativar ou desativar filtros com base no botão clicado
  filtros.forEach((filtro) => {
  if (value.toLowerCase() == filtro.innerText.toLowerCase()){
  filtro.classList.add("ativo");
  }
  else{
    filtro.classList.remove("ativo");
  }
  }
  )

  //Para cada filtro...
  filtros.forEach((filtro) => {
  //Se a propriedade classList tiver a palavra ativo...
  if (filtro.classList.contains("ativo")){
    //para cada dado,...
      for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Filtrar se a tag equivale ao texto de filtragem
      if (tags.includes(value.toLowerCase())){
      // Construir o HTML para cada resultado, formatando-o como uma div com título, descrição e links
      resultados += `
        <div class='item-resultado'>
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
      }
    }
  }
}
);  

  //Mostrar os resultados
  section.innerHTML = resultados
}



//---------------------------------------------------
//Função de Pesquisar

function pesquisar() {

  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  //Guardando o valor digitado no campo de busca
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";

  //Deixa em minúsculo a palavra de busca
  campoPesquisa = campoPesquisa.toLowerCase()

  //Se o campoPesquisa for vazio
  if (campoPesquisa == ""){
    resultados = `
      <div class = 'item-resultado'>
      <h2>Nenhum item encontrado, digite algo na barra de busca ou selecione um filtro no menu à esquerda.</h2>
      </div>        
    `
    section.innerHTML = resultados
    return
  };

  //Verificar se existem filtros ativos
  let filtros = document.querySelectorAll(".item-filtro");
  let ativos = []

  filtros.forEach((filtro) => {
    if (filtro.classList.contains("ativo")){
      ativos = [filtro.innerText.toLowerCase()]
    }
  }
  )

  let titulo = "";
  let descricao = "";
  let tags = "";  
  console.log(ativos);
  let valor = ativos[0];

  //Caso não existam filtros ativos, filtrar apenas pelo campo de busca
  if (ativos.length == 0){
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Filtrar se a tag equivale ao texto de filtragem
      if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
      // Construir o HTML para cada resultado, formatando-o como uma div com título, descrição e links
      resultados += `
        <div class='item-resultado'>
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
      }
    }
  }
  //Caso haja filtros ativos, filtrar com base no filtro e no valor do campo de busca
  else{
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      // Filtrar se a tag equivale ao texto de filtragem
      if (tags.includes(valor)){
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
          // Construir o HTML para cada resultado, formatando-o como uma div com título, descrição e links
          resultados += `
          <div class='item-resultado'>
          <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          </div>
        `;
        }
      }  
    }
  }

  //Caso não tenha resultados para a busca
  if (!resultados){
    let resposta = `
      <div class = 'item-resultado'>
      <h2>Nenhum resultado encontrado.</h2>
      </div>        
    `
    section.innerHTML = resposta
    return
  };

  section.innerHTML = resultados
}

  
