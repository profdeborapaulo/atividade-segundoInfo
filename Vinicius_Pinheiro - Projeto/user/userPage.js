
const url = new URL(window.location.href);
const idUser = url.searchParams.get('idUser');


function getData(way){
    const f = localStorage.getItem(way);
    return JSON.parse(f);
}
const users = getData('users');
const user = users[idUser];

const comments = getData('comments');

const userComments = [];

comments.forEach(comment =>{
    if (comment.idUser == idUser){
        userComments.push(comment);
    }
})

const userInfoDiv = document.querySelector('.userInfo');

const h1Username = document.createElement('h1');
h1Username.innerHTML = user.username;

const pReviwes = document.createElement('p');
pReviwes.innerHTML = '<strong>Reviwes: </strong>' + userComments.length;

userInfoDiv.append(h1Username, pReviwes);


const commentsDiv = document.querySelector('.comments');

    let h = 0;
    for(i = 0 ; i < userComments.length ; i++){
        h++;
        
        const divComment = document.createElement('div');
        divComment.classList.add('otherComment');

        const h4Username = document.createElement('h4');
        h4Username.innerHTML = user.username;

        const pCommentContent = document.createElement('p');
        pCommentContent.innerHTML = userComments[i].content;

        divComment.append(h4Username, pCommentContent);
        commentsDiv.appendChild(divComment);
        
        const f = i;
        divComment.addEventListener('click', () => {
            
            window.location.href = '../title/titlePage.html?idTitle='+userComments[f].idTitle;
        })
    }
