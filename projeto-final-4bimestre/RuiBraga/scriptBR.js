function AnalyzeText() {
    const text = document.getElementById('inputText').value;
    const output = document.getElementById('output');

    if (text.trim() === "") {
        output.innerHTML = "<p>Por favor, insira uma descrição para análise apropriada.</p>";
        return;
    }
    


if (text.trim() === "Fundamentos") {
    
    output.innerHTML = "<p>Se oque procura é fundamentos, esta é uma liga que certamente se necessita e muito para se mantes ativo no campeonato, não é uma liga fácil, porém é crucial ser um jogador constante e extremamente capacitado para se manter ativo. Nosso olheiro Ricardo Shorstners irá avaliar seu requerimento.</p>";
    return;
    
}

if (text.trim() === "Exposição internacional") {
    
    output.innerHTML = "<p>A liga de futebol brasileira é de alto nível internacional, portanto há muita exposição da mídia e divulgação para os principais clubes europeus e de outros continentes, certamente um campeonato de alta exposição midiática.</p>";
    return;
    
}

if (text.trim() === "Trabalho físico") {
    
    output.innerHTML = "<p>Como a liga de futebol brasileira tem muitos jogos durante o ano, e com certeza jogadores muito bem condicionados, certamente é uma liga onde os clubes investem muito em fundamentos físicos, é preciso não só ter habilidade, mas também um ótimo físico para suportar a dinâmica do campeonato.</p>";
    return;
    
}

if (text.trim() === "Trabalho mental") {
    
    output.innerHTML = "<p>A liga de futebol brasileiro é uma liga onde os clubes dão muita atenção ao condicionamento mental dos seus jogadores e dá muito suporte e incentivo para seus atletas, muito por conta do nível de competição.</p>";
    return;
    
}

if (text.trim() === "Concorrência") {
    
    output.innerHTML = "<p>Haja concorrência! a liga brasileira é considerada a mais acirrada internacionalmente por sites de estatísticas com muito renome, e com certeza é uma liga onde apenas os mais fortes tem êxito em conseguir seus objetivos, tendo que manter alto nível durante muito tempo para obter resultados ainda mínimos.</p>";
    return;
    
}

}





    



       
       
       
