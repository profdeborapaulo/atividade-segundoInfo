let logonuser = localStorage.getItem("logonuser");
if (!logonuser) {
    alert("você não está logado");
    window.location.href = "index.html";
}

let loggedusers = JSON.parse(localStorage.getItem("loggedusers")) || [];
let nowuser = loggedusers.find(usuario => usuario.name === logonuser);

document.getElementById("username").textContent = nowuser ? nowuser.name : "Usuário não encontrado";
document.getElementById("usersenha").textContent = nowuser ? nowuser.senha : "Senha não encontrada";

function quit() {
    localStorage.removeItem("logonuser"); 
    window.location.href = "index.html"; 
}

function back(){
    window.location.href = "todo.html"; 
}

function deleteuser() {
    if (confirm("tem certeza? isso é irreversivel.")) {
        loggedusers = loggedusers.filter(user => user.name !== logonuser);
        localStorage.setItem("loggedusers", JSON.stringify(loggedusers));
        localStorage.removeItem(`tasks_${logonuser}`);
        localStorage.removeItem("logonuser");
        alert("perfil deletado");
        window.location.href = "index.html";
    }
}