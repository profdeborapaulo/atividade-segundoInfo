document.addEventListener("DOMContentLoaded", function () {
  const petSelect = document.getElementById("petNome");
  const servicoSelect = document.getElementById("servico");
  const listaAgendamentos = document.getElementById("listaAgendamentos");

  // Chama as funções para carregar pets e serviços ao carregar a página
  carregarPets();
  carregarServicos();
  exibirAgendamentos();

  // Função para carregar os pets cadastrados no select
  function carregarPets() {
    // Verifica se há pets no localStorage
    let pets = JSON.parse(localStorage.getItem("meuspets")) || [];

    // Limpa as opções anteriores do select
    petSelect.innerHTML = "";

    // Preenche o select com cada pet
    pets.forEach(function (pet, index) {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = pet.nomePet;
      petSelect.appendChild(option);
    });
  }

  // Função para carregar os serviços cadastrados no select
  function carregarServicos() {
    // Verifica se há serviços no localStorage
    let servicos = JSON.parse(localStorage.getItem("meusservicos")) || [];

    // Limpa as opções anteriores do select
    servicoSelect.innerHTML = "";

    // Preenche o select com cada serviço
    servicos.forEach(function (servico, index) {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = servico.nomeServico;
      servicoSelect.appendChild(option);
    });
  }

  // Função para exibir agendamentos existentes
  function exibirAgendamentos() {
    let agendamentos =
      JSON.parse(localStorage.getItem("meusagendamentos")) || [];
    listaAgendamentos.innerHTML = "";

    // Exibe cada agendamento como um item da lista
    agendamentos.forEach(function (agendamento) {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `<strong>Pet:</strong> ${agendamento.petNome} <br>
                            <strong>Serviço:</strong> ${agendamento.servico.nomeServico} <br>
                            <strong>Data:</strong> ${agendamento.data} <br>
                            <strong>Hora:</strong> ${agendamento.hora}`;
      listaAgendamentos.appendChild(li);
    });
  }

  // Função para salvar um novo agendamento
  document
    .getElementById("agendamentoForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Carrega os agendamentos já existentes no localStorage
      let agendamentos =
        JSON.parse(localStorage.getItem("meusagendamentos")) || [];

      // Obtém os valores preenchidos no formulário
      const petIndex = document.getElementById("petNome").value;
      const servicoIndex = document.getElementById("servico").value;
      const pets = JSON.parse(localStorage.getItem("meuspets")) || [];
      const servicos = JSON.parse(localStorage.getItem("meusservicos")) || [];
      const petNome = pets[petIndex].nomePet;
      const servico = servicos[servicoIndex];
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;

      // Cria um novo objeto de agendamento
      const novoAgendamento = {
        petNome: petNome,
        servico: servico,
        data: data,
        hora: hora,
      };

      // Adiciona o novo agendamento à lista
      agendamentos.push(novoAgendamento);

      // Atualiza o localStorage com o novo agendamento
      localStorage.setItem("meusagendamentos", JSON.stringify(agendamentos));

      alert("Agendamento realizado")

      // Limpa o formulário
      document.getElementById("agendamentoForm").reset();

      // Atualiza a exibição dos agendamentos
      exibirAgendamentos();
    });
});
