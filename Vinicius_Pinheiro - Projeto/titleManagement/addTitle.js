const titlesVerify = localStorage.getItem('titles');
// console.log(verification);

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
            videoSourceInput: "../videos/inception.mp4",
            directorInput: "Christopher Nolan",
            actorsInput: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
            watchTime: "148 minutos",
            trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0"
        },
        {
            titleName: "Matrix",
            titleDescription: "Um hacker descobre que a realidade que conhece é uma simulação criada por máquinas para subjulgar a humanidade. Com a ajuda de um grupo de rebeldes, ele se torna o 'Escolhido' para liderar a luta contra as máquinas em um mundo futurista distópico.",
            titleImgSource: "../imgs/matrix.jpg",
            titlePublicationDate: "1999",
            genres: "Aventura, Ficção Científica",
            class: "1",
            reviews: 1,
            allGrade: 100,
            grade: 100,
            videoSourceInput: "../videos/matrix.mp4",
            directorInput: "Lana e Lilly Wachowski",
            actorsInput: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
            watchTime: "136 minutos",
            trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
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
            videoSourceInput: "../videos/interstar.mp4",
            directorInput: "Christopher Nolan",
            actorsInput: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
            watchTime: "169 minutos",
            trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
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
            videoSourceInput: "../videos/pulpFiction.mp4",
            directorInput: "Quentin Tarantino",
            actorsInput: "John Travolta, Uma Thurman, Samuel L. Jackson",
            watchTime: "154 minutos",
            trailerLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
        },
        {
            titleName: "Um Sonho de Liberdade",
            titleDescription: "Conta a história de um banqueiro condenado injustamente por assassinato, que faz amizade com um preso e, com o tempo, busca sua redenção e liberdade através de um plano engenhoso.",
            titleImgSource: "../imgs/hawshankRedemption.webp",
            titlePublicationDate: "1994",
            genres: "Drama",
            class: "1",
            reviews: 0,
            allGrade: 0,
            grade: "0",
            videoSourceInput: "../videos/shawshankRedemption.mp4",
            directorInput: "Frank Darabont",
            actorsInput: "Tim Robbins, Morgan Freeman, Bob Gunton",
            watchTime: "142 minutos",
            trailerLink: "https://www.youtube.com/watch?v=6hB3S9bIaco"
        },
        {
            titleName: "O Cavaleiro das Trevas",
            titleDescription: "Batman enfrenta o Coringa, um vilão anárquico que busca mergulhar Gotham City no caos, enquanto lida com seus próprios dilemas morais e o impacto de suas ações como vigilante.",
            titleImgSource: "../imgs/darkKnight.jpg",
            titlePublicationDate: "2008",
            genres: "Ação, Crime, Drama",
            class: "1",
            reviews: 0,
            allGrade: 0,
            grade: "0",
            videoSourceInput: "../videos/darkKnight.mp4",
            directorInput: "Christopher Nolan",
            actorsInput: "Christian Bale, Heath Ledger, Aaron Eckhart",
            watchTime: "152 minutos",
            trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
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
            videoSourceInput: "../videos/fightClub.mp4",
            directorInput: "David Fincher",
            actorsInput: "Brad Pitt, Edward Norton, Helena Bonham Carter",
            watchTime: "139 minutos",
            trailerLink: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
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
            numberOfEpisodesInput: "62 episódios, 5 temporadas",
            videoSourceInput: "a"
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
            numberOfEpisodesInput: "73 episódios, 8 temporadas",
            videoSourceInput: "a"
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
            numberOfEpisodesInput: "34 episódios, 4 temporadas",
            videoSourceInput: "a"
        },
        {
            titleName: "The Crown",
            titleDescription: "Retrata a vida da Rainha Elizabeth II e os eventos políticos e pessoais que moldaram o segundo metade do século XX, explorando os desafios e dilemas de sua monarquia.",
            titleImgSource: "../imgs/theCrown.jpg",
            titlePublicationDate: "2016-presente",
            genres: ["Drama", "História"],
            class: "3",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfEpisodesInput: "40 episódios, 5 temporadas",
            videoSourceInput: "a"
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
            numberOfEpisodesInput: "201 episódios, 9 temporadas",
            videoSourceInput: "a"
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
        {
            titleName: "Admirável Mundo Novo",
            titleDescription: "Uma distopia que imagina uma sociedade futurista onde a felicidade é garantida através de controle social e engenharia genética, seguindo personagens que questionam o sistema e a liberdade individual.",
            titleImgSource: "../imgs/braveNewWorld.jpg",
            titlePublicationDate: "1932",
            genres: ["Ficção Científica", "Distopia"],
            class: "2",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            numberOfPagesInput: "311 páginas",
            writterInput: "Aldous Huxley"
        },
        // Jogos
        {
            titleName: "The Legend of Zelda: Breath of the Wild",
            titleDescription: "Um jogo de aventura em mundo aberto que segue Link em sua missão para salvar o reino de Hyrule de uma antiga ameaça, oferecendo um vasto mundo para explorar e diversas mecânicas de jogo.",
            titleImgSource: "../imgs/zelda.jpg",
            titlePublicationDate: "2017",
            genres: ["Ação", "Aventura"],
            class: "4",
            reviews: 0,
            allGrade: 0,
            grade: 0,
            playTime: "50-100 horas",
            videoSourceInput: "a"
        },
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
            playTime: "Infinito",
            videoSourceInput: "a"
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
            playTime: "50-150 horas",
            videoSourceInput: "a"
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
            playTime: "60-100 horas",
            videoSourceInput: "a"
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
            playTime: "20-100 horas",
            videoSourceInput: "a"
        }
    ];
    
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('titles', dataJSON);
    // console.log('iiii');
    location.reload();
}


function getData(way){
    const b = localStorage.getItem(way);
    return JSON.parse(b);
}

function h(element, id, placeholder){
    const e = document.createElement(element);
    e.setAttribute('id', id);
    e.setAttribute('placeholder', placeholder);
    return e; 
}

function i(word){
    const e = document.createElement('input');
    e.setAttribute('type', 'checkbox');
    e.setAttribute('id', word);
    e.setAttribute('title', word);
    return e;
}

const dataTitles = getData('titles');
// console.log(JSON.parse(dataTitles));
const continueBtt = document.getElementById('continue');

continueBtt.addEventListener('click', () =>{
    const classSelected = document.getElementById('classSelected').value;
    const errorMsg = document.getElementById('errorMessage');

    if (classSelected == ""){
        errorMsg.innerHTML = 'Insira dados!';
        return;
    }

    const divData = document.getElementById('data');
    divData.replaceChildren();
    errorMsg.innerHTML = '';

    const titleNameInput = h('input', 'titleNameInput', 'Título');
    const descriptionInput = h('input', 'descriptionInput', 'Descrição');
    const imgSourceInput = h('input', 'imgSourceInput', 'Link da Imagem');
    const publicationDateInput = h('input', 'publicationDateInput', 'Data de Publicação');

    divData.append(titleNameInput, descriptionInput, imgSourceInput, publicationDateInput);

    let genresChoices = [];
    let exclusiveInputs = [];

    if (classSelected == 1){ // Filme
        // publicationDateInput.setAttribute('type', 'date');

        const videoSourceInput = h('input', 'videoSourceInput', 'Link do Vídeo');
        const directorInput = h('input', 'directorInput', 'Diretor');
        const actorsInput = h('input', 'actorsInput', 'Atores');
        const watchTime = h('input', 'watchTime', 'WatchTime');

        genresChoices = ['Drama', 'Aventura', 'Terror', 'Suspense', 'Animação', 'Fantasia', 'Romance', 'Comédia', 'Ficção Científica', 'Biográfico', 'História', 'Thriller', 'Crime'];

        exclusiveInputs.push(videoSourceInput, directorInput, actorsInput, watchTime);

        divData.append(videoSourceInput, directorInput, actorsInput, watchTime);


    } 
    if (classSelected == 2){ // Livro
        const numberOfPagesInput = h('input', 'numberOfPagesInput', 'Número de Páginas');
        const writterInput = h('input', 'writterInput', 'Escritor(a)');

        genresChoices = ['Fantasia', 'Ficção Científica', 'Romance', 'Suspense', 'Terros', 'Comédia', 'Filosofia', 'História', 'Fantaisa', 'Culinária', 'Biografía', 'Didático', 'Infantil', 'Distopia', 'Ficção Política'];

        exclusiveInputs.push(numberOfPagesInput, writterInput);

        divData.append(numberOfPagesInput, writterInput);

    }
    if (classSelected == 3){ // Série
        // publicationDateInput.setAttribute('type', 'date');

        const numberOfEpisodesInput = h('input', 'numberOfEpisodesInput', 'Número de Episódios');
        // const watchTime = h('input', 'watchTime', 'WatchTime');
        const videoSourceInput = h('input', 'videoSourceInput', 'Link do Vídeo');

        genresChoices = ['Drama', 'Aventura', 'Terror', 'Suspense', 'Animação', 'Fantasia', 'Romance', 'Comédia', 'Ficção Científica', 'Biográfico', 'História', 'Thriller', 'Mistério', 'Ação'];

        exclusiveInputs.push(numberOfEpisodesInput, videoSourceInput);

        divData.append(numberOfEpisodesInput, videoSourceInput);
    }
    if (classSelected == 4){ // Jogo
        // publicationDateInput.setAttribute('type', 'date');
        const playTime = h('input', 'playTime', 'Tempo de Jogo');
        const videoSourceInput = h('input', 'videoSourceInput', 'Link do Vídeo');

        genresChoices = ['SoulsLike', 'Aventura', 'Puzzle', 'Plataforma', '3D', '2D', 'FPS', 'Battle Royale', 'RPG', 'Ação', 'Aventura', 'Sandbox', 'Construção'];

        exclusiveInputs.push(playTime, videoSourceInput);

        divData.append(playTime, videoSourceInput);
    }

    const genresDiv = [];
    const genres = [];
        
    genresChoices.forEach(iten => {

        const d = document.createElement('div');
        const p = document.createElement('p');
        const checkbox = i(iten);

        p.innerHTML = iten;
        d.append(p, checkbox);

        genres.push(checkbox);
        genresDiv.push(d);
       });

    genresDiv.forEach(iten =>{
        divData.appendChild(iten);
    });
    const createBtt = document.createElement('button');
    createBtt.innerHTML = "Criar";
    divData.appendChild(createBtt);

    createBtt.addEventListener('click', () => {

        let exclusiveInputsValidation;
        exclusiveInputs.forEach(iten => {
            if (iten.value == "" && iten !== 'videoSourceInput'){
                exclusiveInputs == "";
            }
        })
        let genresSelected = [];
        genres.forEach(iten => {
            if (iten.checked){
                genresSelected.push(iten.id);
            }
        })

        if (titleNameInput.value == "" || descriptionInput.value == "" || imgSourceInput.value == "" || publicationDateInput.value == "" || exclusiveInputsValidation == "" || genresSelected.length == 0){
           errorMsg.innerHTML = "Preencha todos os campos";
           return;
        }
        errorMsg.innerHTML = '';

        const newData = {
            titleName : titleNameInput.value,
            titleDescription : descriptionInput.value,
            titleImgSource : '../imgs/'+imgSourceInput.value,
            titlePublicationDate : publicationDateInput.value,
            genres : genresSelected,
            class : classSelected,
            reviews : 0,
            allGrade : 0,
            grade : 0
        };

        exclusiveInputs.forEach(iten =>{
            newData[iten.id] = iten.value;
        })

        // console.log(newData);

        dataTitles.push(newData);
        const dataUpdateJSON = JSON.stringify(dataTitles);

        localStorage.setItem('titles', dataUpdateJSON);
        location.reload();


    })

})

const tableBooks = document.getElementById('books');
const tableMovies = document.getElementById('movies');
const tableGames = document.getElementById('games');
const tableSeries = document.getElementById('series');


dataTitles.forEach(iten =>{
    if (dataTitles.length !== 0){

        const keys = Object.keys(iten);

        classIten = iten.class;
        const trHead = document.createElement('tr');

        keys.forEach(key =>{
            const th = document.createElement('th');
            th.innerHTML = key;
            trHead.appendChild(th);
            if (classIten == 1 && tableMovies.childElementCount == 0){
                tableMovies.appendChild(trHead);
            }
            if (classIten == 2 && tableBooks.childElementCount == 0){
                tableBooks.appendChild(trHead);
            }
            if (classIten == 3 && tableSeries.childElementCount == 0){
                tableSeries.appendChild(trHead);
            }
            if (classIten == 4 && tableGames.childElementCount == 0){
                tableGames.appendChild(trHead);
            }
            
            
        })

        const values = Object.values(iten);

        const trBody = document.createElement('tr');

        values.forEach(value =>{
            const td = document.createElement('td');
            td.innerHTML = value;

            trBody.append(td);

            if (classIten == 1){
                tableMovies.appendChild(trBody);
            }
            if (classIten == 2){
                tableBooks.appendChild(trBody);
            }
            if (classIten == 3){
                tableSeries.appendChild(trBody);
            }
            if (classIten == 4){
                tableGames.appendChild(trBody);
            }

        })
        const deleteBtt = document.createElement('button');
        deleteBtt.innerHTML = 'Deletar';

        const editBtt = document.createElement('button');
        editBtt.innerHTML = 'Editar';

        trBody.append(deleteBtt, editBtt);

        const i = dataTitles.indexOf(iten);

        editBtt.addEventListener('click', ()=>{
            
            // console.log(i);
            trBody.replaceChildren();

            let newValuesInputs = [];
            values.forEach(value =>{
                const input = document.createElement('input'); // Usar H
                input.value = value;
                newValuesInputs.push(input);

                trBody.appendChild(input);
            })

            const updateBtt = document.createElement('button');
            updateBtt.innerHTML = 'Atualizar';

            trBody.appendChild(updateBtt);

            updateBtt.addEventListener('click', () => {
                // console.log(newValuesInputs.value);

                const newValues = [];
                newValuesInputs.forEach(input =>{
                    if (input.value == ''){
                        alert('Preencha todos os campos')
                        return;
                    }

                    newValues.push(input.value);
                })
                // const itenWillChange = ;

                const itenWillChangeKeys = Object.keys(dataTitles[i]);

                const newData = {};
                console.log(newValues[1]);
                for (m = 0; m < newValues.length; m++){
                    newData[itenWillChangeKeys[m]] = newValues[m];
                }
                dataTitles[i] = newData;
                console.log(dataTitles);

                const dataUpdatedJSON = JSON.stringify(dataTitles);
                localStorage.setItem('titles', dataUpdatedJSON);
                location.reload();
            })
        })

        deleteBtt.addEventListener('click', ()=>{
            dataTitles.splice(i, 1);
            // console.log(dataTitles);
            const dataUpdatedJSON = JSON.stringify(dataTitles);
            localStorage.setItem('titles', dataUpdatedJSON);
            location.reload();
        })

    }

})


















