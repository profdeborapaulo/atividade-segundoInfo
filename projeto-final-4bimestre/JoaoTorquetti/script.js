
//Salva as informações de loggin no localStorage
function SalvarN() {
    let nome = document.getElementById('nome').value
    localStorage.setItem('nomeUsuario', nome);

    let email = document.getElementById('email').value
    localStorage.setItem('emailUsuario', email);

    let senha = document.getElementById('senha').value
    localStorage.setItem('senhaUsuario', senha,);

   


    //var login =  {nome: nome, email: email, senha: senha}

    //login_json = JSON.stringify(login);

    //localStorage.setItem('loginUsuario', login_json);

    //localStorage.setItem('emailUsuario', email);


    //localStorage.setItem('senhaUsuario', senha,);

} 

//resgata as informações de login para logar na conta
function Login() {
    let nomeArmazenado =  localStorage.getItem('nomeUsuario');
    let emailArmazenado =  localStorage.getItem('nomeUsuario');
    let senhaArmazenado =  localStorage.getItem('nomeUsuario');
    let nomeLogin = document.getElementById('nomeL');
    let emailLogin = document.getElementById('emailL');
    let senhaLogin = document.getElementById('senhaL');
    //let Nlogin = [nomeLogin, emailLogin, senhaLogin];
    if ((nomeArmazenado = nomeLogin) && (emailArmazenado = emailLogin) && (senhaArmazenado = senhaLogin)) {
        window.location.href = "home.html";
        e.preventDefault()
    } else {
        alert("epa");
        e.preventDefault()
    }
}