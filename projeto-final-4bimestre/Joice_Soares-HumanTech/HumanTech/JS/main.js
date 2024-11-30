const descricaoCards = {
    "item-1": {
        titulo: "AEROGEL",
        texto: "O aerogel, com sua leveza e propriedades isolantes, tem grande potencial no desenvolvimento de próteses biônicas. Ele pode ser usado como material estrutural para tornar as próteses mais leves, sem comprometer a resistência, e como isolante térmico para melhorar o conforto dos usuários, especialmente em climas extremos.",
        vantagem1: "Peso reduzido",
        vantagem2: "Isolamento térmico",
        vantagem3: "Alta resistência"
    },
    "item-2": {
        titulo: "EXOESQUELETO",
        texto: "Os exoesqueletos compartilham objetivos semelhantes com as próteses biônicas, pois ambos visam restaurar ou ampliar a mobilidade humana. Em conjunto, exoesqueletos podem oferecer suporte adicional a usuários de próteses, melhorando a estabilidade e reduzindo o esforço físico, especialmente em atividades que exigem força ou resistência.",
        vantagem1: "Aumento de força e resistência",
        vantagem2: "Reabilitação motora",
        vantagem3: "Equilíbrio otimizado"
    },
    "item-3": {
        titulo: "BCIs",
        texto: "As BCIs são fundamentais para o avanço das próteses biônicas controladas diretamente pelo cérebro. Essa tecnologia permite que usuários enviem comandos para as próteses de forma quase natural, utilizando sinais cerebrais para movimentos precisos. Isso representa um grande avanço para pessoas com amputações ou deficiências motoras.",
        vantagem1: "Interação intuitiva",
        vantagem2: "Adaptação personalizada",
        vantagem3: "Acesso ampliado"
    }
};

// Função para atualizar o conteúdo
function atualizarDescricao(id) {
    const tituloElemento = document.getElementById("titulo-descricao");
    const textoElemento = document.getElementById("texto-descricao");
    const Vantagem1 = document.getElementById("texto-bolha1");
    const Vantagem2 = document.getElementById("texto-bolha2");
    const Vantagem3 = document.getElementById("texto-bolha3");

    const { titulo, texto, vantagem1, vantagem2, vantagem3 } = descricaoCards[id];

    // Atualiza os elementos do DOM
    tituloElemento.textContent = titulo;
    textoElemento.textContent = texto;
    Vantagem1.textContent = vantagem1;
    Vantagem2.textContent = vantagem2;
    Vantagem3.textContent = vantagem3;
}

// Adiciona eventos nos inputs de radio
const radios = document.querySelectorAll("input[name='slider']");
radios.forEach(radio => {
    radio.addEventListener("change", () => atualizarDescricao(radio.id));
});
