function AnalyzeText() {
    const text = document.getElementById('inputText').value;
    const output = document.getElementById('output');

    if (text.trim() === "") {
        output.innerHTML = "<p>Por favor, insira uma descrição para análise apropriada.</p>";
        return;
    }
    


if (text.trim() === "Fundamentos") {
    
    output.innerHTML = "<p>A liga inglesa é uma das mais antigas, com isso o nível dos jogadores é extremamente alto, e assim forma uma competição também acirrada.</p>";
    return;
    
}

if (text.trim() === "Exposição internacional") {
    
    output.innerHTML = "<p>A liga inglesa é uma das mais transmitidas no mundo, e certamente tem exposição mundial com muita vizibilidade.</p>";
    return;
    
}

if (text.trim() === "Trabalho físico") {
    
    output.innerHTML = "<p>Certamente o desempenho físico é muito importante para manter o nível de competição dos clubes, e é algo crucial para se manter competindo.</p>";
    return;
    
}

if (text.trim() === "Trabalho mental") {
    
    output.innerHTML = "<p>O trabalho mental nessa liga tem de ser prioridade para os atletas, por ser uma liga muito prestigiada e expositiva. Não há condições de não trabalhar este fundamento em uma liga deste tamanho.</p>";
    return;
    
}

if (text.trim() === "Concorrência") {
    
    output.innerHTML = "<p>A premier league é uma liga muito e muito concorrida, com pelo menos 6 clubes com força continental (big six). Não há dúvidas que este campeonato tem concorrência elevadíssima.</p>";
    return;
    
}

}