let vendedor = []; //cadastro do vendedor não muda muita coisa do cadastro do cliente

function cadastroVendedor() {
    let empresa = document.getElementById('nome-empresa').value;
    let cnpj = document.getElementById('cnpj').value;
    let email = document.getElementById('email-contato').value;
    let senha = document.getElementById('senha-vendedor').value;

    if (empresa && cnpj && email && senha) {
        let dados = {
            empresa: empresa,
            cnpj: cnpj,
            email: email,
            senha: senha
        };
    
        vendedor.push(dados);
        localStorage.setItem('vendedor', JSON.stringify(vendedor));
        window.location.href = '/login/vendedor/login-vendedor.html';
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

function login() {
    let cnpj = document.getElementById('cnpj').value;
    let senha = document.getElementById('senha').value;

    let vendedores = localStorage.getItem('vendedor');
    const dadosVendedor = JSON.parse(vendedores);

    if(cnpj && senha) {
        const loginSalvo = dadosVendedor.find(vendedor => vendedor.cnpj === cnpj && vendedor.senha === senha);

        if (loginSalvo) {
            window.location.href = '/cad-jogo/cadastro.html';
        }
    } else {
        alert("CNPJ ou senha inválidos, tente novamente!");
        cnpj.innerHTML ='';
        senha.innerHTML ='';
    }
}