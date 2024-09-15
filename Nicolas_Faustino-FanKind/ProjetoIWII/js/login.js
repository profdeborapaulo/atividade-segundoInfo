function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); 

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; 
    }

    let sum = 0;
    let remainder;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;
    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';

    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 5000); //
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!isValidCPF(cpf)) {
        showError('CPF inválido. Por favor, insira um CPF válido.');
        event.preventDefault(); 
        return;
    }

    if (!email || !password) {
        showError('Por favor, preencha todos os campos.');
        event.preventDefault(); 
        return;
    }

    
    window.location.href = 'homecliente.html';
    event.preventDefault(); 
});