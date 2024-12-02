function AnalyzeText() {
    const text = document.getElementById('inputText').value;
    const output = document.getElementById('output');

    if (text.trim() === "") {
        output.innerHTML = "<p>Por favor, insira uma descrição para análise apropriada.</p>";
        return;
    }
    


if (text.trim() === "Fundamentos") {
    
    output.innerHTML = "<p>A Liga Turca combina um futebol vibrante com grande paixão dos torcedores, criando um ambiente único nos estádios. No entanto, ainda busca elevar a consistência nos fundamentos técnicos, como passes e finalizações, para competir de igual para igual com as principais ligas europeias. Esse equilíbrio é um desafio que pode impulsionar o crescimento do campeonato.</p>";
    return;
    
}

if (text.trim() === "Exposição internacional") {
    
    output.innerHTML = "<p>A Liga Turca de futebol sofre com baixa exposição midiática em comparação a outras competições europeias. Isso limita a visibilidade de seus clubes e jogadores no cenário internacional. Consequentemente, a liga atrai menos atenção de patrocinadores e transmissões globais.</p>";
    return;
    
}

if (text.trim() === "Trabalho físico") {
    
    output.innerHTML = "<p>A Liga Turca se destaca por um trabalho físico de média intensidade, equilibrando força e resistência sem comprometer o ritmo do jogo. Esse estilo permite partidas dinâmicas, embora ainda exista espaço para aprimorar a preparação atlética e a consistência nos duelos mais exigentes. Esse aspecto contribui para o charme competitivo do campeonato.</p>";
    return;
    
}

if (text.trim() === "Trabalho mental") {
    
    output.innerHTML = "<p>A Liga Turca apresenta um cenário onde o trabalho psicológico nos atletas ainda é um ponto a ser desenvolvido. Em jogos decisivos, a pressão externa e a instabilidade emocional podem impactar o desempenho. Investir nesse aspecto pode fortalecer a resiliência mental dos jogadores e melhorar a qualidade das partidas.</p>";
    return;
    
}

if (text.trim() === "Concorrência") {
    
    output.innerHTML = "<p>A competitividade na Liga Turca é extremamente alta, com clubes constantemente se desafiando pelo título e posições de destaque. A rivalidade entre equipes tradicionais, como Galatasaray, Fenerbahçe e Beşiktaş, cria um ambiente intenso e imprevisível. Esse nível elevado de competição torna o campeonato emocionante e atrativo para os fãs.</p>";
    return;
    
}

}