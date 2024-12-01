function playGame() {
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const userChoice = prompt("Escolha: Pedra, Papel ou Tesoura").toLowerCase();
    
    if (!choices.includes(userChoice.charAt(0).toUpperCase() + userChoice.slice(1))) {
        alert("Escolha inválida. Por favor, escolha entre Pedra, Papel ou Tesoura.");
        return;
    }
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    alert(`Você escolheu: ${userChoice}\nComputador escolheu: ${computerChoice}`);
    const result = getResult(userChoice, computerChoice);
    alert(result);
}
function getResult(user, computer) {
    if (user === computer) {
        return "Empate!";
    }
    if (
        (user === 'pedra' && computer === 'Tesoura') ||
        (user === 'papel' && computer === 'Pedra') ||
        (user === 'tesoura' && computer === 'Papel')
    ) {
        return "Você ganhou!";
    }
    return "Você perdeu!";
}