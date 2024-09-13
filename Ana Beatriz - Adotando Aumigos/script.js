let filhotes = JSON.parse(localStorage.getItem('filhotes')) || [];


document.getElementById('cadastroForm')?.addEventListener('submit', function(event) {
    event.preventDefault();  

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const descricao = document.getElementById('descricao').value;
    const contato = document.getElementById('contato').value;
    const imagem = document.getElementById('imagem').files[0];

    if (!imagem) {
        alert('Por favor, selecione uma imagem.');
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
        const imagemBase64 = reader.result;  

     
        const novoFilhote = {
            nome: nome,
            idade: idade,
            descricao: descricao,
            contato: contato,
            imagemURL: imagemBase64
        };

        filhotes.push(novoFilhote);

      
        localStorage.setItem('filhotes', JSON.stringify(filhotes));

     
        document.getElementById('cadastroForm').reset();

        
        window.location.href = 'filhotes.html';
    };

    
    reader.readAsDataURL(imagem);
});


function exibirFilhotes() {
    const filhotes = JSON.parse(localStorage.getItem('filhotes')) || [];
    const filhotesContainer = document.getElementById('filhotesContainer');
    const mensagem = document.getElementById('mensagem');

    
    if (filhotes.length === 0) {
        mensagem.style.display = 'block';  
    } else {
        mensagem.style.display = 'none';  
        filhotesContainer.innerHTML = '';  

     
        filhotes.forEach(filhote => {
           
            const filhoteDiv = document.createElement('div');
            filhoteDiv.classList.add('filhote-card');

            filhoteDiv.innerHTML = `
                <img src="${filhote.imagemURL}" alt="Foto do filhote" style="width: 150px; height: 150px; object-fit: cover;">
                <h3>${filhote.nome} (${filhote.idade} meses)</h3>
                <p>${filhote.descricao}</p>
                <p>Contato: ${filhote.contato}</p>
            `;

            filhotesContainer.appendChild(filhoteDiv);
        });
    }
}

if (window.location.pathname.includes('filhotes.html')) {
    window.onload = exibirFilhotes;
}
