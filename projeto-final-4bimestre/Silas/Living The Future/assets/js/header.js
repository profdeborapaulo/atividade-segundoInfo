// Seleciona o elemento <nav> dentro do <header>
const nav = document.querySelector('header nav');

// Adiciona o HTML ao <nav>, dependendo se há um usuário logado
nav.innerHTML += user ? `
    <li class="dropdown">
        <!-- Exibe o nome do usuário logado no menu dropdown -->
        <a href="javascript:void(0)" class="dropbtn">Olá, ${user.name.split(' ')[0]}</a>
        <div class="dropdown-content">
            <!-- Link para o perfil do usuário -->
            <a href="/profile">Perfil</a>
            <!-- Botão para sair -->
            <a href="#" id="sign-out">Sair</a>
        </div>
    </li>
` : `
    <!-- Link para a página de autenticação (login ou registro) -->
    <a href="/auth">Entrar</a>
`;

// Adiciona um evento ao botão "Sair" (se existir no DOM)
document.getElementById('sign-out')?.addEventListener('click', () => {
    localStorage.removeItem('userId'); // Remove o ID do usuário do localStorage
    window.location.reload(); // Recarrega a página para atualizar o estado de autenticação
});
