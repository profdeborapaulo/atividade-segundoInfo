function cadastrarPrato() {
    var proteina = document.getElementById("proteina").value;
    var carboidrato = document.getElementById("carboidrato").value;
    var vegetal = document.getElementById("vegetal").value;

    if (proteina === "" || carboidrato === "" || vegetal === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var prato = `Proteína: ${proteina}, Carboidrato: ${carboidrato}, Vegetal: ${vegetal}`;

    var pratosList = document.getElementById("pratosList");
    var listItem = document.createElement("li");
    listItem.textContent = prato;

    pratosList.appendChild(listItem);

    // Limpa os campos de entrada após o cadastro
    document.getElementById("proteina").value = "";
    document.getElementById("carboidrato").value = "";
    document.getElementById("vegetal").value = "";
}
