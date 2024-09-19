const commentVerify = localStorage.getItem('comments');

const loginVerify = localStorage.getItem('users');
if (loginVerify == null){
    const data = [];
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('users', dataJSON);
}

const titlesVerify = localStorage.getItem('titles');

if (titlesVerify == null){
    const data = [
        // Filmes
        {
            titleName: "A Origem",
            titleDescription: "Um ladrão especializado em extrair segredos dos sonhos é oferecido uma chance de redenção ao implantar uma ideia na mente de um CEO rival. Com uma trama complexa e efeitos visuais inovadores, o filme explora a natureza da realidade e da consciência.",
            titleImgSource: "../imgs/inception.jpg",
            titlePublicationDate: "2010",
            genres: "Ficção Científica, Thriller",
            class: "1",
            reviews: 0,
            allGrade: 0,
            grade: "0",
            // videoSourceInput: "../videos/inception.mp4",
            directorInput: "Christopher Nolan",
            actorsInput: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
            watchTime: "148 minutos",
        },
        {
            titleName: "Interestelar",
            titleDescription: "Em um futuro próximo, um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto enfrentam dilemas científicos e emocionais profundos sobre amor, sacrifício e sobrevivência em um ambiente cósmico desafiador.",
            titleImgSource: "../imgs/interstar.jpg",
            titlePublicationDate: "2014",
            genres: "Drama, Aventura, Ficção Científica",
            class: "1",
            reviews: 5,
            allGrade: 117,
            grade: 23.4,
            // videoSourceInput: "../videos/interstar.mp4",
            directorInput: "Christopher Nolan",
            actorsInput: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
            watchTime: "169 minutos",
        },
        {
            titleName: "Pulp Fiction: Tempo de Violência",
            titleDescription: "Uma narrativa não linear entrelaça várias histórias sobre o submundo do crime em Los Angeles, incluindo um assassino e sua esposa, um boxeador e um casal em um assalto, explorando temas de moralidade, violência e redenção com diálogos icônicos e uma trilha sonora marcante.",
            titleImgSource: "../imgs/pulpFiction.jpg",
            titlePublicationDate: "1994",
            genres: "Drama, Thriller, Crime",
            class: "1",
            reviews: 0,
            allGrade: 0,
            grade: "0",
            // videoSourceInput: "../videos/pulpFiction.mp4",
            directorInput: "Quentin Tarantino",
            actorsInput: "John Travolta, Uma Thurman, Samuel L. Jackson",
            watchTime: "154 minutos",
            trailerLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
        },
        {
            titleName: "Clube da Luta",
            titleDescription: "Um narrador insatisfeito com a vida e um vendedor de sabonetes formam um clube de luta clandestino que evolui para uma organização anárquica, desafiando normas sociais e pessoais.",
            titleImgSource: "../imgs/fightClub.webp",
            titlePublicationDate: "1999",
            genres: "Drama, Thriller",
            class: "1",
            reviews: 0,
            allGrade: 0,
            grade: "0",
            // videoSourceInput: "../videos/clubeLuta.mp4",
            directorInput: "David Fincher",
            actorsInput: "Brad Pitt, Edward Norton, Helena Bonham Carter",
            watchTime: "139 minutos",
        },
        // Séries
        {
            titleName: "Breaking Bad",
            titleDescription: "Um professor de química, após ser diagnosticado com câncer, se transforma em um fabricante de metanfetamina para garantir o futuro financeiro de sua família, mergulhando cada vez mais no submundo do crime.",
            titleImgSource: "../imgs/breakingBad.jpg",
            titlePublicationDate: "2008-2013",
            genres: ["Crime", "Drama"],
            class: "3",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfEpisodesInput: "62 episódios, 5 temporadas"
            // videoSourceInput: "a"
        },
        {
            titleName: "Game of Thrones",
            titleDescription: "Baseada na série de livros \"As Crônicas de Gelo e Fogo\", segue a luta pelo poder em um mundo fictício repleto de intrigas políticas, batalhas e dinastias em guerra.",
            titleImgSource: "../imgs/gameOfThrones.jpg",
            titlePublicationDate: "2011-2019",
            genres: ["Fantasia", "Drama"],
            class: "3",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfEpisodesInput: "73 episódios, 8 temporadas"
            // videoSourceInput: "a"
        },
        {
            titleName: "Stranger Things",
            titleDescription: "Um grupo de crianças investiga o desaparecimento de um amigo e descobre uma série de eventos paranormais, incluindo uma garota com habilidades telecinéticas e um mundo paralelo.",
            titleImgSource: "../imgs/strangerThings.webp",
            titlePublicationDate: "2016-presente",
            genres: ["Ficção Científica", "Terror"],
            class: "3",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfEpisodesInput: "34 episódios, 4 temporadas"
            // videoSourceInput: "a"
        },
        {
            titleName: "The Office",
            titleDescription: "Comédia de estilo documental que segue a vida dos funcionários de um escritório de papel, mostrando suas interações, dramas e situações cotidianas de maneira engraçada e realista.",
            titleImgSource: "../imgs/theOffice.jpg",
            titlePublicationDate: "2005-2013",
            genres: ["Comédia", "Drama"],
            class: "3",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfEpisodesInput: "201 episódios, 9 temporadas"
            // videoSourceInput: "a"
        },
        // Livros
        {
            titleName: "Duna",
            titleDescription: "Uma épica ficção científica que segue Paul Atreides, que assume a liderança do planeta desértico Arrakis e enfrenta intrigas políticas e batalhas por controle de uma valiosa especiaria.",
            titleImgSource: "../imgs/dune.jpg",
            titlePublicationDate: "1965",
            genres: ["Ficção Científica", "Aventura"],
            class: "2",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfPagesInput: "412 páginas",
            writterInput: "Frank Herbert"
        },
        {
            titleName: "1984",
            titleDescription: "Um romance distópico que explora a vigilância governamental, a manipulação da verdade e a opressão em uma sociedade totalitária, seguindo Winston Smith em sua luta contra o regime opressivo.",
            titleImgSource: "../imgs/1984.jpg",
            titlePublicationDate: "1949",
            genres: ["Distopia", "Política"],
            class: "2",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfPagesInput: "328 páginas",
            writterInput: "George Orwell"
        },
        {
            titleName: "O Sol é Para Todos",
            titleDescription: "Um romance que explora questões de moralidade, justiça e preconceito racial através da perspectiva de uma jovem garota em uma pequena cidade do sul dos EUA durante a Grande Depressão.",
            titleImgSource: "../imgs/toKillAMockingbird.jpg",
            titlePublicationDate: "1960",
            genres: ["Ficção", "Drama"],
            class: "2",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfPagesInput: "281 páginas",
            writterInput: "Harper Lee"
        },
        {
            titleName: "O Apanhador no Campo de Centeio",
            titleDescription: "Segue Holden Caulfield, um adolescente em crise que se recusa a seguir as normas sociais e enfrenta um período de introspecção e rebeldia em Nova York.",
            titleImgSource: "../imgs/catcherInTheRye.jpg",
            titlePublicationDate: "1951",
            genres: ["Ficção", "Drama"],
            class: "2",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfPagesInput: "277 páginas",
            writterInput: "J.D. Salinger"
        },
        // Jogos
        {
            titleName: "Minecraft",
            titleDescription: "Um jogo de sandbox que permite aos jogadores construir e explorar mundos gerados aleatoriamente, com modos criativo e sobrevivência, oferecendo uma ampla gama de possibilidades de construção e aventura.",
            titleImgSource: "../imgs/minecraft.png",
            titlePublicationDate: "2011",
            genres: ["Sandbox", "Aventura"],
            class: "4",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            playTime: "Infinito"
            // videoSourceInput: "a"
        },
        {
            titleName: "The Witcher 3: Wild Hunt",
            titleDescription: "Um RPG de ação que segue Geralt de Rivia, um caçador de monstros em busca de sua filha adotiva, enquanto explora um vasto mundo aberto e enfrenta escolhas morais complexas.",
            titleImgSource: "../imgs/witcher3.jpg",
            titlePublicationDate: "2015",
            genres: ["RPG", "Aventura"],
            class: "4",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            playTime: "50-150 horas"
            // videoSourceInput: "a"
        },
        {
            titleName: "Red Dead Redemption 2",
            titleDescription: "Um jogo de ação e aventura situado no final do século 19, onde o jogador assume o papel de Arthur Morgan, um fora da lei, enquanto enfrenta dilemas morais e a decadência da era do Velho Oeste.",
            titleImgSource: "../imgs/redDeadRedemption2.png",
            titlePublicationDate: "2018",
            genres: ["Ação", "Aventura"],
            class: "4",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            playTime: "60-100 horas"
            // videoSourceInput: "a"
        },
        {
            titleName: "Cyberpunk 2077",
            titleDescription: "Um RPG de mundo aberto ambientado em um futuro distópico onde o jogador explora Night City, uma metrópole repleta de tecnologia avançada e conflitos corporativos, assumindo o papel de um mercenário em busca de um artefato imortal.",
            titleImgSource: "../imgs/cyberpunk2077.png",
            titlePublicationDate: "2020",
            genres: ["RPG", "Ação"],
            class: "4",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            playTime: "20-100 horas"
            // videoSourceInput: "a"
        }
    ];
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('titles', dataJSON);
    // console.log('iiii');
    location.reload();
}

function getData(way){
    const d = localStorage.getItem(way);
    return JSON.parse(d);
}

function c(className){ // Criar Divs
    const t = document.createElement('div');
    t.setAttribute('class', className);
    return t;
}

const dataTitles = getData('titles');
const comments = getData('comments');



if (commentVerify == null){
    const data = [];
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('comments', dataJSON);
}





dataTitles.forEach(title =>{
    const idTitle = dataTitles.indexOf(title);

    if(commentVerify == null){
        title.allGrade = 0;
        title.reviews = 0;
        title.grade = 0;

        
        dataTitles[idTitle] = title;
        const h = JSON.stringify(dataTitles);
        localStorage.setItem('titles', h);
        return;
    }

    let titleGrades = 0;
    let totalReviews = 0;

    comments.forEach(comment => {
        if (comment.idTitle == idTitle){
            titleGrades += parseInt(comment.grade, 10);
            totalReviews++;
        }
    })

    title.allGrade = titleGrades;
    title.reviews = totalReviews;
    if (title.allGrade > 0 && title.reviews > 0){
        title.grade = titleGrades/totalReviews;
    }
    dataTitles[idTitle] = title;
    const h = JSON.stringify(dataTitles);
    localStorage.setItem('titles', h);


})







const classSession = sessionStorage.getItem('classSelected');
let classSelected;
if (classSession == null){
    classSelected = 1;
} else {
    classSelected = classSession;
}






console.log(dataTitles);
dataTitles.forEach(title => {
const divAllCards = document.getElementById('allCards');

    if (title.class == classSelected){
        const divCard = c('card');
        console.log(divCard);
        divAllCards.appendChild(divCard);
        
        const divImgCard = c('imgCard');
        const divInfoCard = c('infoCard');
        divCard.append(divImgCard, divInfoCard);
    
        const imgTitle = document.createElement('img');
        imgTitle.setAttribute('src', title.titleImgSource);
    
        divImgCard.appendChild(imgTitle);
    
    
        // 
        const divTitleCard = c('titleCard');
    
        const pTitle = document.createElement('p');
        pTitle.innerHTML = title.titleName;
        
        divTitleCard.appendChild(pTitle);
        // 
    
    
        // 
        const divCardStatics = c('cardStatics');
    
        const pReviews = document.createElement('p');
        pReviews.innerHTML = '<strong>Reviews: </strong>' +title.reviews;
    
        const pGrade = document.createElement('p');
        pGrade.innerHTML = '<strong>Nota: </strong>'+title.grade+'/100';
    
        divCardStatics.append(pReviews, pGrade);
        // 
    
    
        divInfoCard.append(divTitleCard, divCardStatics);

        const index = dataTitles.indexOf(title);
        divCard.addEventListener('click', () => {
            window.location.href = '../title/titlePage.html?idTitle='+index;
        })
    }
    
})

const moviesBtt = document.getElementById('movies');
const booksBtt = document.getElementById('books');
const seriesBtt = document.getElementById('series');
const gamesBtt = document.getElementById('games');

moviesBtt.addEventListener('click', () => {
    classSelected = 1;
    sessionStorage.setItem('classSelected', classSelected);
    location.reload();
})
booksBtt.addEventListener('click', () => {
    classSelected = 2;
    sessionStorage.setItem('classSelected', classSelected);
    location.reload();
})
seriesBtt.addEventListener('click', () => {
    classSelected = 3;
    sessionStorage.setItem('classSelected', classSelected);
    location.reload();
})
gamesBtt.addEventListener('click', () => {
    classSelected = 4;
    sessionStorage.setItem('classSelected', classSelected);
    location.reload();
})







