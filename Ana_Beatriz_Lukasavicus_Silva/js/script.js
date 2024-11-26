document.querySelector("#formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const respiratorio = Number(event.target.querySelector('input[name="respiratorio"]:checked').value);
    const idade = Number(event.target.querySelector('input[name="idade"]').value);
    const exercicio = Number(event.target.querySelector('input[name="exercicio"]:checked').value);

    // Variável para determinar qual página redirecionar
    let pagina;

    if(respiratorio){
        pagina = "pagina4.html"
        if(idade <= 13) pagina = "pagina2.html"
        if(idade >= 60) pagina = "pagina5.html"
    }
    else {
        pagina = "pagina7.html"
        if(idade <= 13) pagina = "pagina6.html"
        if(idade >= 60) pagina = "pagina3.html"
        if(exercicio) pagina = "pagina8.html"
    }
    console.log(pagina);

    // Redireciona para a página correspondente
    window.location.href = `${pagina}`;
});
