function adduser() {
    const newuser = document.getElementById("new-username").value;
    const newsenha = document.getElementById("new-password").value;
    const mensagem = document.getElementById("signinwarn");

    let userlist = JSON.parse(localStorage.getItem("loggedusers")) || [];

    if(newuser === "" || newsenha === ""){return;}
    if (userlist.some(usuario => usuario.name === newuser)) {
        mensagem.innerHTML = "Nome já usado"
        return;
    }
    userlist.push({ name: newuser, senha: newsenha });
    localStorage.setItem("loggedusers", JSON.stringify(userlist));
    gototodo(newuser); 
}

function login() {
    const loginuser = document.getElementById("username").value;
    const loginsenha = document.getElementById("password").value;
    const mensagem = document.getElementById("loginwarn");

    if (loginuser === "" || loginsenha === "") {return;}
    let savedusers = JSON.parse(localStorage.getItem("loggedusers")) || [];

    if (savedusers.find(user => user.name === loginuser && user.senha === loginsenha)) {
        gototodo(loginuser); 
    } else {
        mensagem.innerHTML = "Dados incorretos";
    }
}


function gototodo(user) {
    localStorage.setItem("logonuser", user); 
    window.location.href = "todo.html";
}
