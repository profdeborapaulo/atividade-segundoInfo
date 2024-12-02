function AnalyzeText() {
    const text = document.getElementById('inputText').value;
    const output = document.getElementById('output');

    if (text.trim() === "") {
        output.innerHTML = "<p>Por favor, insira uma descrição para análise apropriada.</p>";
        return;
    }
    


if (text.trim() === "Fundamentos") {
    
    output.innerHTML = "<p>A liga alemã tem alguns clubes de alto escalão na europa, como Bayern Munchen e Borussia Dortmund, mas o nivel médio para fundamentos neste campeonato não é tão alto quanto outras ligas de grande concorrência.</p>";
    return;
    
}

if (text.trim() === "Exposição internacional") {
    
    output.innerHTML = "<p>É uma liga que não tem a mesma mídia de outras ligas mais prestigiadas, mas como é uma liga que está em um país de primeiro mundo e com muitos craques, tem seu reconhecimento.</p>";
    return;
    
}

if (text.trim() === "Trabalho físico") {
    
    output.innerHTML = "<p>Neste campeonato o condicionamento físico é muito bem trabalhado, por isso não se vê tantas lesões sérias ao decorrer do ano com os jogadores que disputam o torneio, mostrando que os jogadores tem um bom condicionamento.</p>";
    return;
    
}

if (text.trim() === "Trabalho mental") {
    
    output.innerHTML = "<p>Neste campeonato, o trabalho mental é algo que se trabalha muito bem e na maioria das grandes ligas é algo que se aplica muito ao proissionais. Liga muito recomendada para quem quer trabalhar seu mental.</p>";
    return;
    
}

if (text.trim() === "Concorrência") {
    
    output.innerHTML = "<p>Este campeonato não tem muita concorrência, pois muitas equipes não tem nível competitivo com o alto ecalão do país e assim não se cria uma disputa tão acirrada pelo título.</p>";
    return;
    
}

}