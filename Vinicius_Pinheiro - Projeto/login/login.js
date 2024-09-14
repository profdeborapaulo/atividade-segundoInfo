function getData(way){
    const d = localStorage.getItem(way);
    return JSON.parse(d);
}

function saveData(obj, data, way){
    obj.push(data);
    const dataUpdated = JSON.stringify(obj);
    localStorage.setItem(way, dataUpdated);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('userId', obj.length - 1);
    location.reload();
}

const dataUsers = getData('users');

const camp = document.querySelectorAll('.camp1');

const btt = document.querySelectorAll('#actionBtt');
const sendBtt = document.querySelectorAll('#send');
const [signinBtt, signupbtt] = sendBtt;

const errorMsg = document.querySelectorAll('#errorMsg');
const [errorSignin, errorSignup] = errorMsg;

btt.forEach(iten => {  
    const [signin, signup] = camp;

    iten.addEventListener('click', () => {
        errorSignin.innerHTML = '';
        errorSignup.innerHTML = '';

        signin.classList.toggle('itenSelected');
        signup.classList.toggle('itenSelected');
    })
})



signinBtt.addEventListener('click', ()=>{
    // errorMsg.innerHTML = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == '' || password == ''){
        errorSignin.innerHTML = 'Preencha todos os campos!';
        return;
    }
    // let userVerify;
    dataUsers.forEach(iten => {
        if (iten.username == username && iten.password == password){
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userId', iten.userId);
            window.location.href = '../home/home.html';
            return;
        }
    })
    errorSignin.innerHTML = 'Dados Incorretos!';
    

})


signupbtt.addEventListener('click', () =>{
    const newName = document.getElementById('newName').value;
    const newSurname = document.getElementById('newSurname').value;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newPasswordConfirm = document.getElementById('newPasswordConfirmation').value;
    console.log(newName);

    if (newName == '' || newSurname == ''|| newUsername == '' || newPassword == '' || newPasswordConfirm == ''){
        errorSignup.innerHTML = 'Preencha todos os campos!';
        return;
    }

    if(newPassword !== newPasswordConfirm){
        errorSignup.innerHTML = 'As senhas não estão iguais!';
        return;
    }

    const newData = {
        name : newName + '' + newSurname,
        username : newUsername,
        password : newPassword,
        userId : dataUsers.length
    }

    if (dataUsers.length == 0){
        
        saveData(dataUsers, newData, 'users');
        window.location
    } else {
        const i = [];
        dataUsers.forEach(iten =>{
            if (iten.username == newUsername){
                i.push('invalid');
            }
        })
        if (i.includes('invalid')){
            errorSignup.innerHTML = 'Usuário já existe, tente outro nome';
            return
        }
        saveData(dataUsers, newData, 'users');
    }

})