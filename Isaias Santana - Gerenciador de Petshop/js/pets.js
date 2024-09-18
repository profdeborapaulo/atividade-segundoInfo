// Função para cadastrar um novo pet
function CadastrarPet() {
    let pets = [];
  
    // Verifica se há pets armazenados no localStorage e os recupera
    if (localStorage.meuspets) {
      pets = JSON.parse(localStorage.getItem("meuspets"));
    }
  
    // Obtém os valores dos campos do formulário de cadastro
    let nomePet = document.getElementById("nomepet").value;
    let especie = document.getElementById("especie").value;
    let raca = document.getElementById("raca").value;
    let idade = document.getElementById("idade").value;
  
    // Cria um objeto representando o novo pet
    const novoPet = {
      nomePet: nomePet,
      especie: especie,
      raca: raca,
      idade: idade,
    };
  
    // Adiciona o novo pet ao array de pets
    pets.push(novoPet);
  
    // Limpa os campos do formulário após o cadastro
    document.getElementById("cadastrarpet").reset();
  
    // Armazena o array de pets atualizado no localStorage
    localStorage.meuspets = JSON.stringify(pets);

    alert("Pet Cadastrado")
  }
  
  // Verifica se existem pets cadastrados no localStorage
  if (localStorage.getItem("meuspets") !== null) {
    
    // Função para exibir os pets cadastrados
    function exibirPets() {
      let pets = JSON.parse(localStorage.getItem("meuspets")) || [];
  
      const listaPets = document.getElementById("listaPets");
      listaPets.innerHTML = ""; // Limpa a lista antes de exibir os pets
  
      // Percorre cada pet e cria um item da lista (li) com suas informações
      pets.forEach(function (pet, index) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `<strong>Nome:</strong> ${pet.nomePet} <br>
                        <strong>Espécie:</strong> ${pet.especie} <br>
                        <strong>Raça:</strong> ${pet.raca} <br>
                        <strong>Idade:</strong> ${pet.idade} anos <br>
                        <button class="btn btn-danger btn-sm mt-2" onclick="excluirPets(${index})">Excluir</button>`;
        listaPets.appendChild(li); // Adiciona o item à lista
      });
    }
  
    // Função para excluir um pet da lista
    function excluirPets(index) {
      let pets = JSON.parse(localStorage.getItem("meuspets")) || [];
      let resposta = confirm('Você tem certeza que deseja remover o cadastro deste pet?');
    if (resposta) {
      // Remove o pet do array com base no índice
      pets.splice(index, 1);
  
      // Atualiza o localStorage com o array modificado
      localStorage.setItem("meuspets", JSON.stringify(pets));
  
      alert('Pet removido');

      // Atualiza a lista de pets exibida na tela
      exibirPets();
    } else {
      alert('O Pet não foi removido.')
    }
    }
    
  
    // Exibe os pets cadastrados ao carregar a página
    window.onload = exibirPets;
  
  } else {
    // Se não houver pets cadastrados, exibe uma mensagem
    var elemento = document.getElementById("resultadoo");
    elemento.innerText = "Nenhum pet cadastrado ainda!";
  }
  