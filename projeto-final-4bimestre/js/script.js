function goToResultPage() {
    const cenario = document.getElementById("cenario").value;
    const tecnologia = document.getElementById("tecnologia").value;
    const natureza = document.getElementById("natureza").value;
    const transporte = document.getElementById("transporte").value;
    const saude = document.getElementById("saude").value;

    const url = `resultado.html?cenario=${cenario}&tecnologia=${tecnologia}&natureza=${natureza}&transporte=${transporte}&saude=${saude}`;

    window.location.href = url;
}

function loadResultPage() {
    const params = new URLSearchParams(window.location.search);

    //respostas do questionário
    const cenario = params.get("cenario");
    const tecnologia = params.get("tecnologia");
    const natureza = params.get("natureza");
    const transporte = params.get("transporte");
    const saude = params.get("saude");

    //história com base nas respostas
    let historia = `Neste futuro, você vive em um cenário de ${cenario}. `;

    switch (cenario) {
        case "cidade-futuristica":
            historia += "Uma cidade repleta de luzes de neon, arranha-céus brilhantes e veículos voadores cortando o céu. O ambiente urbano é dinâmico, sempre em movimento, com uma tecnologia avançada que torna a vida mais conectada e rápida. Aqui, o futuro é uma mistura de modernidade e inovação, com cada rua e edifício projetados para otimizar a experiência humana.";
            break;
        case "natureza-preservada":
            historia += "Sua cidade está cercada por florestas verdes, rios cristalinos e montanhas imponentes. O desenvolvimento urbano foi projetado para preservar o meio ambiente, e a natureza é parte integrante da vida diária. Parques urbanos e jardins verticais são comuns, e a arquitetura é ecológica, respeitando os ciclos naturais. A harmonia entre a natureza e a cidade é o ponto central deste futuro.";
            break;
        case "mundo-pos-apocaliptico":
            historia += "O que restou de grandes cidades agora é um mundo de ruínas, onde a natureza começa a tomar conta do que antes eram centros urbanos. As ruas estão cobertas por plantas e árvores que crescem livremente, enquanto algumas comunidades se reerguem lentamente. Neste futuro, as pessoas estão reconstruindo e aprendendo a viver novamente, com tecnologias antigas e novas que ajudam na sobrevivência.";
            break;
        case "colonia-espacial":
            historia += "Você vive em uma estação espacial ou colônia em um planeta distante. O cenário ao seu redor é vasto e misterioso, com a terra firme substituída por uma vida suspensa no espaço. Estações espaciais interligadas formam uma rede entre planetas e luas, criando um futuro que desafia os limites da Terra, explorando novos mundos e sistemas solares.";
            break;
    }

    switch (tecnologia) {
        case "implantes-ciberneticos":
            historia += "Você utiliza implantes cibernéticos para aprimorar suas habilidades.";
            break;
        case "veiculos-voadores":
            historia += "Os veículos voadores facilitam seus deslocamentos, tornando tudo mais rápido.";
            break;
        case "inteligencia-artificial":
            historia += "A Inteligência Artificial é sua assistente diária, ajudando a tomar decisões e automatizando muitas tarefas.";
            break;
        case "tecnologias-sustentaveis":
            historia += "As tecnologias sustentáveis garantem um ambiente mais limpo e saudável, com foco em energia renovável.";
            break;
    }

    switch (natureza) {
        case "integracao-cidades":
            historia += "Sua cidade está completamente integrada à natureza, com construções ecológicas e espaços verdes por toda parte.";
            break;
        case "mundo-artificial":
            historia += "Você vive em um mundo artificial, onde tudo é projetado para ser perfeito, mas controlado.";
            break;
        case "natureza-restaurada":
            historia += "A natureza foi restaurada, e o planeta é agora um lugar equilibrado entre a civilização e o meio ambiente.";
            break;
        case "preservacao-florestas":
            historia += "O futuro é verde, com florestas preservadas e rios limpos, mantendo o equilíbrio ecológico.";
            break;
    }

    switch (transporte) {
        case "espaco":
            historia += "Você viaja pelo universo com espaçonaves, explorando outros planetas e estações espaciais.";
            break;
        case "veiculos-voadores":
            historia += "Veículos voadores são comuns no seu cotidiano, tornando o transporte rápido e sem limites.";
            break;
        case "transporte-sustentavel":
            historia += "Você usa meios de transporte sustentáveis, como veículos elétricos e transporte público eco-friendly.";
            break;
        case "andando-bicicleta":
            historia += "Você se desloca caminhando ou de bicicleta, aproveitando um estilo de vida mais saudável e sustentável.";
            break;
    }

    switch (saude) {
        case "medicina-preventiva":
            historia += "A saúde preventiva é essencial, com tratamentos personalizados baseados no seu DNA.";
            break;
        case "biotecnologia":
            historia += "A biotecnologia permite curar doenças e até melhorar as capacidades humanas.";
            break;
        case "imortalidade":
            historia += "A imortalidade biológica é uma realidade, e você vive com saúde por centenas de anos.";
            break;
        case "saude-autonoma":
            historia += "Sua saúde é monitorada e ajustada automaticamente por dispositivos conectados que cuidam de você o tempo todo.";
            break;
    }

    //descrição na página
    document.getElementById("descricao").innerText = historia;

    //imagem de acordo com o cenário
    const imagem = document.getElementById("futuroImagem");
    switch (cenario) {
        case "cidade-futuristica":
            imagem.src = "imagens/cidadefuturoo.jpg";
            break;
        case "natureza-preservada":
            imagem.src = "imagens/naturezaa.jpeg";
            break;
        case "mundo-pos-apocaliptico":
            imagem.src = "imagens/apocalipse.jpg";
            break;
        case "colonia-espacial":
            imagem.src = "imagens/espaco.jpg";
            break;
    }
}

window.onload = loadResultPage;
