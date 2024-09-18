// Declara um array vazio para armazenar os serviços
var servicos = [];

// Função para salvar os dados do formulário no localStorage
function SalvarDados() {
  // Verifica se há serviços já armazenados no localStorage e os recupera
  if (localStorage.meusservicos) {
    servicos = JSON.parse(localStorage.getItem("meusservicos"));
  }

  // Obtém os valores dos campos do formulário
  let nomeServico = document.getElementById("nomeServico").value;
  let descricaoserv = document.getElementById("descricaoserv").value;
  let precoserv = document.getElementById("precoserv").value;
  let duracao = document.getElementById("duracao").value;

  // Cria um objeto com os dados do novo serviço
  const novoServico = {
    nomeServico: nomeServico,
    descricaoserv: descricaoserv,
    precoserv: precoserv,
    duracao: duracao,
  };

  // Adiciona o novo serviço ao array de serviços
  servicos.push(novoServico);

  // Limpa os campos do formulário
  document.getElementById("cadastrarservico").reset();

  // Armazena o array atualizado no localStorage
  localStorage.meusservicos = JSON.stringify(servicos);

  alert("Serviço Cadastrado")
}

// Verifica se há serviços cadastrados no localStorage
if (localStorage.getItem("meusservicos") !== null) {
  
  // Função para exibir os serviços cadastrados
  function exibirServicos() {
    // Recupera os serviços do localStorage
    let servicos = JSON.parse(localStorage.getItem('meusservicos')) || [];

    // Seleciona o elemento da lista onde os serviços serão exibidos
    const listaServicos = document.getElementById('listaServicos');
    listaServicos.innerHTML = ''; // Limpa a lista antes de exibir

    // Para cada serviço, cria um item na lista (li) com seus dados
    servicos.forEach(function(servico, index) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `<strong>Nome:</strong> ${servico.nomeServico} <br>
                        <strong>Descrição:</strong> ${servico.descricaoserv} <br>
                        <strong>Preço:</strong> R$ ${servico.precoserv} <br>
                        <strong>Duração:</strong> ${servico.duracao} minutos <br>
                        <button class="btn btn-danger btn-sm mt-2" onclick="excluirServico(${index})">Excluir</button>`;
        listaServicos.appendChild(li); // Adiciona o item à lista
    });
  }

  // Função para excluir um serviço da lista
  function excluirServico(index) {
    let servicos = JSON.parse(localStorage.getItem('meusservicos')) || [];
    let resposta = confirm('Você tem certeza que deseja excluir este serviço?');
    if (resposta) {
    // Remove o serviço com base no índice
    servicos.splice(index, 1);
    
    // Atualiza o localStorage com o array modificado
    localStorage.setItem('meusservicos', JSON.stringify(servicos));

    alert('Seriviço Excluido');

    // Atualiza a lista de serviços na tela
    exibirServicos();
  } else {
    alert('O serviço não foi excluído.')
  }
}

  // Exibe os serviços cadastrados ao carregar a página
  window.onload = exibirServicos;

} else {
  // Se não houver serviços cadastrados, exibe uma mensagem
  var elemento = document.getElementById("meuParagrafo");
  elemento.innerText = "Nenhum serviço cadastrado ainda!";
}
