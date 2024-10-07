let logonuser = localStorage.getItem("logonuser");
if (!logonuser) {
    alert("você não está logado");
    window.location.href = "index.html"; 
}
document.getElementById("user-info").innerHTML = `olá ${logonuser}`;

function showtasks() {
    let listoftasks = JSON.parse(localStorage.getItem(`tasks_${logonuser}`)) || [];
    const listelements = document.getElementById("listtasks");
    listelements.innerHTML = "";

    listoftasks.forEach((task, index) => {
        const itemtask = document.createElement("li");
        itemtask.textContent = task;

        
        const botaoremove = document.createElement("button");
        botaoremove.textContent = "remove";
        botaoremove.onclick = () => removetask(index);

        itemtask.appendChild(botaoremove);
        listelements.appendChild(itemtask);
    });
}

function addtask() {
    const novatask = document.getElementById("nova-task").value;
    if (novatask === "") {
        alert("insira uma task");
        return;
    }

    let listoftasks = JSON.parse(localStorage.getItem(`tasks_${logonuser}`)) || [];
    listoftasks.push(novatask);
    localStorage.setItem(`tasks_${logonuser}`, JSON.stringify(listoftasks));

    document.getElementById("nova-task").value = ""; 
    showtasks(); 
}

function removetask(index) {
    let listoftasks = JSON.parse(localStorage.getItem(`tasks_${logonuser}`)) || [];
    listoftasks.splice(index, 1); 
    localStorage.setItem(`tasks_${logonuser}`, JSON.stringify(listoftasks));
    showtasks();
}

window.onload = showtasks;
