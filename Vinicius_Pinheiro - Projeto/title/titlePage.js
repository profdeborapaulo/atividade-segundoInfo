
// Funções 
function getData(way){ // Pegar a data do local Storage
    const f = localStorage.getItem(way);
    return JSON.parse(f);
}

function adjustTextarea(obj){ // Ajustar a area do textarea de acordo com a qtde de texto
    obj.style.height = 'auto';
    obj.style.height = obj.scrollHeight + 'px';
}


const url = new URL(window.location.href); // Url da página
const idTitle = url.searchParams.get('idTitle'); // id do item

const dataTitles = getData('titles'); // Todos os títulos
const title = dataTitles[idTitle]; // Título específico da página


const comments = getData('comments'); // Todos os comentários
const commentsSession = document.querySelector('.comments'); // Área dos comentários no HTML



const aboutCard = document.querySelector('.aboutCard'); // Informações sobre o título

// Imagem
const imgCardDiv = document.querySelector(".imgCardDiv");

const imgCard = document.createElement('img');
imgCard.src = title.titleImgSource;

imgCardDiv.appendChild(imgCard);

// Imagem


// Sobre
const textAboutDiv = document.querySelector('.textAbout');
textAboutDiv.style.width = '100%';

const h1Title = document.createElement('h1');
h1Title.innerHTML = title.titleName;

const pAbout = document.createElement('p');
pAbout.innerHTML = title.titleDescription;

const pGenres = document.createElement('p');
pGenres.innerHTML = '<strong>Gêneros: </strong>' + title.genres;

textAboutDiv.append(h1Title, pAbout, pGenres);
// Sobre


// Identificador de classe

if (title.class == 1){
    const pDirector = document.createElement('p');
    pDirector.innerHTML = '<strong>Diretor: </strong>' + title.directorInput;

    const pActors = document.createElement('p');
    pActors.innerHTML = '<strong>Atores: </strong>: ' + title.actorsInput;

    const pWatchtime = document.createElement('p');
    pWatchtime.innerHTML = '<strong>Duração: </strong>' + title.watchTime;

    textAboutDiv.append(pDirector, pActors, pWatchtime);
}

if (title.class == 2){
    const pWritter = document.createElement('p');
    pWritter.innerHTML = '<strong>Escritor(a): </strong>' + title.writterInput;

    const pNumPages = document.createElement('p');
    pNumPages.innerHTML = '<strong>Número de Páginas: </strong>' + title.numberOfPagesInput;

    textAboutDiv.append(pWritter, pNumPages);
}

if (title.class == 3){
    const pNumEps = document.createElement('p');
    pNumEps.innerHTML = '<strong>Número de Episódios Totais: </strong>' + title.numberOfEpisodesInput;

    textAboutDiv.append(pNumEps);
}

if (title.class == 4){
    const pWatchtime = document.createElement('p');
    pWatchtime.innerHTML = '<strong>Duração: </strong>' + title.playTime;

    textAboutDiv.appendChild(pWatchtime);
}

// Identificador de vídeo
if (title.videoSourceInput !== '' && title.videoSourceInput !== undefined){
    textAboutDiv.style.width = '60%';

    const videoCardDiv = document.createElement('div');
    videoCardDiv.classList.add('videoCard');

    const videoCard = document.createElement('video');
    videoCard.src = title.videoSourceInput;
    videoCard.setAttribute('controls', '');

    videoCardDiv.appendChild(videoCard);

    aboutCard.appendChild(videoCardDiv);
}


// Criação dos itens no HTML
const gradeDiv = document.createElement('div');
gradeDiv.classList.add('gradeDiv');

const pGrade = document.createElement('p');
pGrade.innerHTML = '<strong>Nota: </strong>'+title.grade + '/100';

const pReview = document.createElement('p');
pReview.innerHTML = '(' + title.reviews+ ' reviews)';

gradeDiv.append(pGrade, pReview);

textAboutDiv.appendChild(gradeDiv);




const idUser = sessionStorage.getItem('userId');

function displayComents(userId){ // Criação dos comentários
    const users = getData('users'); // Pegar a data de todos os usuários
   
    let n = 0; // Contador
    for (i = 0; i < comments.length; i++){
        if (comments[i].idUser !== userId && comments[i].idTitle == idTitle){ // Identifica se o comentário é no título atual
            n++;

            const divComment = document.createElement('div');
            divComment.classList.add('otherComment');

            const h4Username = document.createElement('h4');
            h4Username.innerHTML = users[comments[i].idUser].username;

            const f = comments[i].idUser; // Id do usuário que fez o comentário
            h4Username.addEventListener('click', () => { // Identifica e redireciona o usuário à página de quem comentou
                window.location.href = '../user/userPage.html?idUser='+f;
            })


            const pCommentContent = document.createElement('p');
            pCommentContent.innerHTML = comments[i].content;

            const pGrade = document.createElement('p');
            pGrade.innerHTML = '<strong>Nota: ' + comments[i].grade + '/100</strong>';

            divComment.append(h4Username, pCommentContent, pGrade);

            commentsSession.appendChild(divComment);

        }
    }
    if (n == 0){ // Identifica se existem comentários nesse título
        const pMsg = document.createElement('p');
        pMsg.innerHTML = 'Ainda não há comentários';

        commentsSession.appendChild(pMsg);
    }
}
displayComents(idUser);


const commentUserArea = document.querySelector('.userComment');

const optionsDiv = document.querySelector('.options');
const pMsg = document.getElementById('msg');

if (idUser !== null){ // Identifica se o usuário está logado
    const btt = document.createElement('button');
    optionsDiv.appendChild(btt);

    const deleteBtt = document.createElement('button');
    deleteBtt.innerHTML = 'Apagar';

    let g;

    for(i = 0; i < comments.length ; i++){
        if (comments[i].idUser == idUser && comments[i].idTitle == idTitle){
            g = i;
            
            optionsDiv.appendChild(deleteBtt);
            optionsDiv.classList.remove('options');
            optionsDiv.classList.add('options2');

            btt.innerHTML = 'Editar';

            const yourComment = document.createElement('p');
            yourComment.innerHTML = comments[i].content;

            const yourGrade = document.createElement('p');
            yourGrade.innerHTML ='Nota: '+ comments[i].grade + '/100';

            commentUserArea.append(yourComment, yourGrade);
        }
    } 

    btt.addEventListener('click', () => {
        // Usuário tem comentário
        optionsDiv.replaceChildren();
        commentUserArea.replaceChildren();

        const changeCommentInput = document.createElement('textarea');
        changeCommentInput.setAttribute('maxlength', '400')
        changeCommentInput.value = comments[g].content;

        changeCommentInput.addEventListener('input', ()=> {
            adjustTextarea(changeCommentInput);
        })

        const changeGradeInput = document.createElement('input');
        changeGradeInput.setAttribute('type', 'number');
        changeGradeInput.value = comments[g].grade;

        const updateBtt = document.createElement('button');
        updateBtt.innerHTML = 'Atualizar';

        optionsDiv.appendChild(updateBtt);
        commentUserArea.append(changeCommentInput, changeGradeInput);

        updateBtt.addEventListener('click', () => {

            const newCommentValue = changeCommentInput.value;
            const newGradeValue = changeGradeInput.value;
            if (newCommentValue == '' || newGradeValue == ''){
                pMsg.innerHTML = 'Preenchas todos os campos';
                return;
            }

            if(newGradeValue > 100){
                pMsg.innerHTML = 'O valor máximo da nota é 100';
                return;
            }

            comments[g].content = newCommentValue;
            comments[g].grade = newGradeValue;
            
            const up = JSON.stringify(comments);
            localStorage.setItem('comments', up);
            location.reload();
        })


    })

    deleteBtt.addEventListener('click', () => {
       

        deleteGrade = comments[g].grade;

        title.grade -= deleteGrade;
        
        title.reviews--;

        titlesUpdate = JSON.stringify(dataTitles);
        localStorage.setItem('titles', titlesUpdate);

        comments.splice(g, 1);
        const up = JSON.stringify(comments);

        localStorage.setItem('comments', up);
        location.reload();
    })
    if (g == undefined){
        // Usuário não tem comentário
        btt.innerHTML = 'Comentar';

        btt.addEventListener('click', () => {
        optionsDiv.replaceChildren();
        commentUserArea.replaceChildren();

        const commentInput = document.createElement('textarea');
        commentInput.setAttribute('placeholder', 'Comentário');
        commentInput.setAttribute('maxlength', '300')

        commentInput.addEventListener('input', ()=> {
            adjustTextarea(commentInput);
        })


        const gradeInput = document.createElement('input');
        gradeInput.setAttribute('type', 'number');
        gradeInput.setAttribute('placeholder', 'Nota: 1 - 100');
        gradeInput.setAttribute('min', '1');
        gradeInput.setAttribute('max', '100');

        const sendBtt = document.createElement('button');
        sendBtt.innerHTML = 'Salvar Comentário';

        optionsDiv.appendChild(sendBtt);
        commentUserArea.append(commentInput, gradeInput);

        sendBtt.addEventListener('click', () => {
            const comment = commentInput.value;
            const grade = gradeInput.value;
            if (comment == '' || grade == ''){
                pMsg.innerHTML = 'Prenncha todos os campos';
                return;
            }

            if(grade > 100){
                pMsg.innerHTML = 'O valor máximo da nota é 100';
                return;
            }

            newData = {
                content : comment,
                grade : grade,
                idUser : userId,
                idTitle : idTitle
            }


            comments.push(newData);
            objUpdateComments = JSON.stringify(comments);
            localStorage.setItem('comments', objUpdateComments);

            let allGrade = 0;
            comments.forEach(iten => {
                if(iten.idTitle == idTitle){
                    allGrade =+ iten.grade;
                }
            })

            title.grade = allGrade;
            title.reviews =+ 1;
            // console.log(title);



            titleUpdate = JSON.stringify(dataTitles);
            localStorage.setItem('titles', titleUpdate);



            location.reload();

        })
    }) 
    }
} else {
    pMsg.innerHTML = 'Entre em uma conta para fazer avaliações';
    
}



// Minupulação da nota do titulo



