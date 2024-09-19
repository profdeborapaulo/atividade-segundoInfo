function getData(way){
    const d = localStorage.getItem(way);
    return JSON.parse(d);
}

const titles = getData('titles');

const itensName = [];
const itensImg = [];
const itensId = [];
titles.forEach(title =>{
    itensName.push(title.titleName);
    itensImg.push(title.titleImgSource);
    itensId.push(titles.indexOf(title));
})

// console.log(itensId);


// const idUser = sessionStorage.getItem('idUser');

document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('searchBar');
    bar.addEventListener('input', () => {
    //   console.log(bar.value);
    const f = bar.value.toLowerCase()
    const div = document.querySelector('.searchItens');
    

    div.replaceChildren();

    for(i = 0; i < itensName.length; i++){
        const t = itensName[i].toLowerCase();
        
        if(t.includes(f) && f !== ''){
            console.log('f !== de vazio');
            const divCard = document.createElement('div');
            divCard.classList.add('cardSearch');
           
            const divImg = document.createElement('div');
            divImg.classList.add('imgDivCardSearch')
            const img = document.createElement('img');
            img.src = itensImg[i];

            divImg.appendChild(img);

            const divText = document.createElement('div');
            divText.classList.add('textDivCardSearch');

            const p = document.createElement('p');
            p.innerHTML = itensName[i];

            // const pClass= document.createElement('p');
            // pClass.innerHTML = itensClass[i];

            divText.appendChild(p);

            divCard.append(divImg, divText);

            div.appendChild(divCard);

            const t = i;
            divCard.addEventListener('click', () => {

                window.location.href = '../title/titlePage.html?idTitle='+t;
                // console.log(itensId);
                // console.log(i);
            })
            

        }
        // console.log('f == de vazio');
     
    }
    // return;
    // const pMsg = document.createElement('p');
    //     pMsg.innerHTML = 'Item não encontrado';
    //     div.appendChild(pMsg);

    })
})

const moreBtt = document.getElementById('more');

const divItens = document.querySelector('.dropdown-btts');

moreBtt.addEventListener('click', () => {
    divItens.classList.toggle('hidden');
    console.log(divItens, moreBtt);
})

document.addEventListener('click', (event) =>{
    if (event.target == moreBtt){
        return;
    }
    
    if (divItens.classList.contains('hidden') == false){
        divItens.classList.add('hidden');
    }
    // console.log();
})





const userId = sessionStorage.getItem('userId');

const userLoginOptions = document.querySelector('.dropdown-btts');
const dropdown = document.querySelector('.dropdown');

console.log(!userId);
if (!userId){
    dropdown.replaceChildren();

    const bttLogin = document.createElement('button');
    const linkLogin = document.createElement('a');
    linkLogin.href = '../login/loginPage.html';
    linkLogin.innerHTML = 'Login';

    bttLogin.appendChild(linkLogin);

    dropdown.appendChild(bttLogin);
    // console.log('Tem ususario');


    } else {
        userLoginOptions.replaceChildren();
        const logoutBtt = document.createElement('button');
        logoutBtt.innerHTML = 'Logout';
        logoutBtt.addEventListener('click', () => {
            sessionStorage.clear();
            window.location.href = '../home/home.html';
        })

        const userPageBtt = document.createElement('button');
        const linkUserPage = document.createElement('a');
        linkUserPage.href = '../user/userPage.html?idUser='+userId;
        linkUserPage.innerHTML = 'Usuário';
        // console.log(linkUserPage);

        userPageBtt.appendChild(linkUserPage);
        // console.log(userPageBtt);

        userLoginOptions.append(userPageBtt, logoutBtt);


    }


// newData[iten.id] = iten.value;