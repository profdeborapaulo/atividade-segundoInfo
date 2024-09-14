const servicos = [
    { nome: "Corte de Cabelo Masculino", descricao: "Corte feito com técnicas modernas e tradicionais, adaptado ao estilo do cliente.", preco: 50, duracao: "40 min" },
    { nome: "Barba", descricao: "Aparar, modelar e finalizar a barba com navalha e produtos de hidratação.", preco: 30, duracao: "20 min" },
    { nome: "Sobrancelha", descricao: "Design para sobrancelhas, proporcionando um visual natural e alinhado.", preco: 20, duracao: "15 min" },
    { nome: "Corte de Cabelo Infantil", descricao: "Cortes para crianças, feitos com paciência e atenção, mantendo o estilo moderno e prático.", preco: 35, duracao: "40 min" },
    { nome: "Limpeza de Pele Rápida", descricao: "Tratamento para remoção de impurezas e oleosidade, deixando a pele revigorada.", preco: 45, duracao: "20 min" },
    { nome: "Tratamento Capilar", descricao: "Hidratação e fortalecimento dos fios, indicado para quem busca saúde e vitalidade capilar.", preco: 65, duracao: "50 min" },
    { nome: "Progressiva", descricao: "Alisamento capilar duradouro para reduzir o frizz e alinhar os fios, proporcionando um cabelo liso e com brilho natural.", preco: 90, duracao: "1h" },
    { nome: "Luzes/Pintura Masculina", descricao: "Técnica de coloração parcial (luzes) ou total, oferecendo desde mudanças sutis no tom até transformações completas no visual capilar.", preco: 100, duracao: "1h 30 min" }
];

document.addEventListener("DOMContentLoaded", function() {
    exibirServicos();
    carregarServicosNoDropdown();
    exibirAgendamentos();
});

function exibirServicos() {
    const listaServicos = document.getElementById('servicos-lista');
    if (listaServicos) {
        servicos.forEach(servico => {
            listaServicos.innerHTML += `
            <div class="service-card">
                <h4>${servico.nome}</h4>
                <p>${servico.descricao}</p>
                <p>Preço: R$${servico.preco},00 - Duração: ${servico.duracao}</p>
                <button onclick="location.href='agendamento.html'">Agendar</button>
            </div>`;
        });
    }
}

function carregarServicosNoDropdown() {
    const servicoSelect = document.getElementById('servico-select');
    if (servicoSelect) {
        servicos.forEach(servico => {
            const option = document.createElement('option');
            option.text = `${servico.nome} - R$${servico.preco},00`;
            option.value = servico.nome;
            servicoSelect.add(option);
        });
    }
}

const agendamentos = [];

const formAgendamento = document.getElementById('form-agendamento');
if (formAgendamento) {
    formAgendamento.addEventListener('submit', function(event) {
        event.preventDefault();

        const servicoSelecionado = document.getElementById('servico-select').value;
        const data = document.getElementById('data-agendamento').value;
        const hora = document.getElementById('hora-agendamento').value;

        agendamentos.push({
            servico: servicoSelecionado,
            data: data,
            hora: hora
        });

        exibirAgendamentos();

        alert('Agendamento confirmado para o serviço: ' + servicoSelecionado + ' em ' + data + ' às ' + hora);
        formAgendamento.reset(); 
    });
}


function exibirAgendamentos() {
    const agendamentosLista = document.getElementById('agendamentos-lista');
    agendamentosLista.innerHTML = '<h2>Seus Agendamentos</h2>'; 

    if (agendamentos.length > 0) {
        agendamentos.forEach(agendamento => {
            agendamentosLista.innerHTML += `
            <div class="agendamento-item">
                <p>Serviço: ${agendamento.servico}</p>
                <p>Data: ${agendamento.data}</p>
                <p>Hora: ${agendamento.hora}</p>
                <button onclick="avaliarServico('${agendamento.servico}')">Avaliar Serviço</button>
            </div>`;
        });
    } else {
        agendamentosLista.innerHTML += '<p>Você não possui agendamentos ainda.</p>';
    }
}

function avaliarServico(servico) {
    const avaliacao = prompt(`Avalie o serviço ${servico} com uma nota de 1 a 5:`);
    if (avaliacao >= 1 && avaliacao <= 5) {
        alert(`Obrigado pela sua avaliação! Você deu uma nota de ${avaliacao} para o serviço ${servico}.`);
    } else {
        alert('Por favor, insira uma nota válida entre 1 e 5.');
    }
}
const formConta = document.getElementById('form-conta');
if (formConta) {
    formConta.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        alert('Conta criada com sucesso! Bem-vindo, ' + nome + '!');
        formConta.reset(); 
    });
}