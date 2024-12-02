function AnalyzeText() {
    const text = document.getElementById('inputText').value;
    const output = document.getElementById('output');

    if (text.trim() === "") {
        output.innerHTML = "<p>Por favor, insira uma descrição para análise apropriada.</p>";
        return;
    }
    


if (text.trim() === "Fundamentos") {
    
    output.innerHTML = "<p>A Liga Italiana é reconhecida por seu elevado nível de habilidade técnica, com jogadores exibindo grande domínio de bola, passes precisos e jogadas refinadas. A tática e o posicionamento também são aspectos fundamentais do futebol italiano, que combina técnica individual e trabalho coletivo de forma impecável. Esse alto nível de habilidade faz com que a Serie A seja uma das ligas mais respeitadas do mundo.A Liga Turca combina um futebol vibrante com grande paixão dos torcedores, criando um ambiente único nos estádios. No entanto, ainda busca elevar a consistência nos fundamentos técnicos, como passes e finalizações, para competir de igual para igual com as principais ligas europeias. Esse equilíbrio é um desafio que pode impulsionar o crescimento do campeonato.</p>";
    return;
    
}

if (text.trim() === "Exposição internacional") {
    
    output.innerHTML = "<p>A Liga Italiana possui uma exposição internacional alta, sendo amplamente transmitida e seguida em diversos países ao redor do mundo. A presença de grandes clubes como Juventus, Milan e Inter, além de estrelas internacionais, atrai uma grande audiência global. Isso contribui para o prestígio e o valor comercial da Serie A, consolidando-a como uma das ligas mais visíveis no cenário esportivo mundial.</p>";
    return;
    
}

if (text.trim() === "Trabalho físico") {
    
    output.innerHTML = "<p>O trabalho físico na Liga Italiana é de alto nível, com jogadores sendo preparados para suportar a intensidade das partidas e os desafios defensivos exigentes. A resistência, a força e a velocidade são aspectos cruciais no futebol italiano, garantindo que as equipes mantenham um ritmo competitivo durante os 90 minutos. Esse preparo físico é um dos pilares para o sucesso de clubes e seleções italianas em competições internacionais.</p>";
    return;
    
}

if (text.trim() === "Trabalho mental") {
    
    output.innerHTML = "<p>O trabalho mental na Liga Italiana é de alto nível, com ênfase em preparação psicológica e foco tático. Jogadores e treinadores lidam com grande pressão em competições intensas, onde a resiliência mental e a tomada de decisões rápidas são cruciais. Esse aspecto psicológico é fundamental para o sucesso nas competições nacionais e internacionais, fazendo com que os atletas se destaquem pela concentração e equilíbrio em momentos decisivos.</p>";
    return;
    
}

if (text.trim() === "Concorrência") {
    
    output.innerHTML = "<p>A competitividade na Liga Italiana é extremamente alta, com clubes de elite constantemente lutando pelo título e pelas posições de destaque. A disputa acirrada entre grandes equipes como Juventus, Milan, Inter e Roma, além de clubes em ascensão, garante uma liga imprevisível e emocionante. Esse nível de competição eleva o padrão técnico e tático, tornando cada temporada da Serie A intensa e altamente disputada.</p>";
    return;
    
}

}