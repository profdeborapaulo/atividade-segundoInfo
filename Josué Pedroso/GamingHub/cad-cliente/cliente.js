let cliente = [];

function cadastrocliente() {
    let nome = document.getElementById('nome-cliente').value;
    let email = document.getElementById('email-cliente').value;
    let senha = document.getElementById('senha-cliente').value;

    if (nome && email && senha) { //se todos os dados foram preenchidos corretamente
        let dados = {
            nome: nome,
            email: email,
            senha: senha
        };
    
        cliente.push(dados); //guarda os dados do cliente no array
        localStorage.setItem('cliente', JSON.stringify(cliente)); //salva o array em um armazenamento local
    } else {
        alert('E-mail ou senha inválidos')
    }
}

function login() {
    
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    let vendedores = localStorage.getItem('vendedor'); //pega os dados salvos no armazenamento local
    dadosVendedor = JSON.parse(vendedores); // transforma os dados que estão em forma de objeto
    
    if(email && senha) {
        //procura no armazenamento os dados do cliente para ver se estão iguais ao colocado no input
        let loginSalvo = dadosVendedor.find(vendedor => vendedor.cnpj === cnpj && vendedor.senha === senha); 
    
        if (loginSalvo) {
            window.location.href('/index.html') //redireciona à página inicial
        }
    } else {
        alert("E-mail ou senha inválidos, tente novamente!")
        email.innerHTML ='';
        senha.innerHTML ='';
    }
}