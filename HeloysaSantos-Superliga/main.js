//times.html

//Array contendo times e suas respectivas jogadoras
const times = [
    {
        nome: "Praia Clube",
        jogadoras: [
            { nome: "Macris", posicao: "Levantadora"},
            { nome: "Ju Carrijo", posicao: "Levantadora"},
            { nome: "Milla", posicao: "Levantadora"},
            { nome: "Kuznetsova", posicao: "Ponteira" },
            { nome: "Payton Caffrey", posicao: "Ponteira"},
            { nome: "Pri Souza", posicao: "Ponteira"},
            { nome: "Maiara Basso", posicao: "Ponteira"},
            { nome: "Milka", posicao: "Central"},
            { nome: "Carol Gattaz", posicao: "Central"},
            { nome: "Gabi Martins", posicao: "Central"},
            { nome: "Adenizia", posicao: "Central"},
            { nome: "Nia Reed", posicao: "Oposta"},
            { nome: "Monique Pavão", posicao: "Oposta"},
            { nome: "Natinha", posicao: "Líbero"},
            { nome: "Suelen", posicao: "Líbero"},
        ]
    },
    {
        nome: "Osasco",
        jogadoras: [
            { nome: "Kenya Malachias", posicao: "Levantadora"},
            { nome: "Giovana Gasparini", posicao: "Levantadora"},
            { nome: "Maira Cipriano ", posicao: "Ponteira" },
            { nome: "Nelmaira Váldez", posicao: "Ponteira"},
            { nome: "Natália Pereira", posicao: "Ponteira"},
            { nome: "Mayara Barcelos", posicao: "Ponteira"},
            { nome: "Amanda Danielli ", posicao: "Ponteira"},
            { nome: "Valquíria Dullius", posicao: "Central"},
            { nome: "Larissa Besen ", posicao: "Central"},
            { nome: "Geovana Freitas", posicao: "Central"},
            { nome: "Callie Schwarzenbach", posicao: "Central"},
            { nome: "Tifanny Abreu", posicao: "Oposta"},
            { nome: "Polina Rahimova", posicao: "Oposta"},
            { nome: "Sophia Dantas", posicao: "Líbero"},
            { nome: "Silvana Papini", posicao: "Líbero"},
            { nome: "Camila Brait", posicao: "Líbero"},
        ]
    },
    {
        nome: "Gerdau Minas",
        jogadoras: [
            { nome: "Fran Tomazoni", posicao: "Levantadora"},
            { nome: "Jenna Gray", posicao: "Levantadora"},
            { nome: "Pri Daroit", posicao: "Ponteira"},
            { nome: "Peña", posicao: "Ponteira" },
            { nome: "Victoria", posicao: "Ponteira"},
            { nome: "Glayce Kelly ", posicao: "Ponteira"},
            { nome: "Celeste Plak", posicao: "Ponteira"},
            { nome: "Thaisa", posicao: "Central"},
            { nome: "Julia Kudiess", posicao: "Central"},
            { nome: "Kelly Gomes", posicao: "Central"},
            { nome: "Giovana Guimarães", posicao: "Central"},
            { nome: "Kisy", posicao: "Oposta"},
            { nome: "Amanda Marques", posicao: "Oposta"},
            { nome: "Larissa Fortes", posicao: "Líbero"},
            { nome: "Kika", posicao: "Líbero"},
        ]
    },
    {
        nome: "Sesc Flamengo",
        jogadoras: [
            { nome: "Rosely Evaristo ", posicao: "Levantadora"},
            { nome: "Clara Rodrigues ", posicao: "Levantadora"},
            { nome: "Brie O'Reilly ", posicao: "Levantadora"},
            { nome: "Mikaela Hestmann", posicao: "Ponteira" },
            { nome: "Michelle Pavão", posicao: "Ponteira"},
            { nome: "Karina Souza", posicao: "Ponteira"},
            { nome: "Helena Wenk Hoengen", posicao: "Ponteira"},
            { nome: "Adria Júlia Silva ", posicao: "Central"},
            { nome: "Jussara Tiago da Silva", posicao: "Central"},
            { nome: "Kelly Gomes", posicao: "Central"},
            { nome: "Lorena Viezel ", posicao: "Central"},
            { nome: "Camila Mesquita", posicao: "Oposta"},
            { nome: "Edinara Brancher", posicao: "Oposta"},
            { nome: "Victoria Stadler ", posicao: "Líbero"},
            { nome: "Lais", posicao: "Líbero"},
        ]
    },
    {
        nome: "Sesi Bauru",
        jogadoras: [
            { nome: "Dani Lins", posicao: "Levantadora"},
            { nome: "Isis", posicao: "Levantadora"},
            { nome: "Thaisinha", posicao: "Ponteira"},
            { nome: "Kasiely", posicao: "Ponteira"},
            { nome: "Mayhara ", posicao: "Central"},
            { nome: "Mayany", posicao: "Central"},
            { nome: "Kátia", posicao: "Central"},
            { nome: "Bia Correa", posicao: "Central"},
            { nome: "Bruna Moraes", posicao: "Oposta"},
            { nome: "Pamela Sanabio", posicao: "Oposta"},
            { nome: "Lorenne Teixeira", posicao: "Oposta"}, 
            { nome: "Léia Silva ", posicao: "Líbero"},
            { nome: "Keyt Alves", posicao: "Líbero"},
        ]
    },
    {
        nome: "Pinheiros",
        jogadoras: [
            { nome: "Amanda Senh", posicao: "Levantadora"},
            { nome: "Seleisa Elisaia ", posicao: "Levantadora"},
            { nome: "Jackeline Moreno ", posicao: "Levantadora"},
            { nome: "Grace McKale ", posicao: "Ponteira" },
            { nome: "Karen Anjos", posicao: "Ponteira"},
            { nome: "Talia Costa ", posicao: "Ponteira"},
            { nome: "Laura Perugini ", posicao: "Ponteira"},
            { nome: "Letica Hage", posicao: "Central"},
            { nome: "Katryne Rodrigues", posicao: "Central"},
            { nome: "Claudia Dilon", posicao: "Central"},
            { nome: "Thaina Kiarele", posicao: "Central"},
            { nome: "Carolina Grossi", posicao: "Oposta"},
            { nome: "Evelyn Carvalho", posicao: "Oposta"},
            { nome: "Juliana Perdigão", posicao: "Líbero"},
        ]
    },
    {
        "nome": "Barueri",
        "jogadoras": [
            { "nome": "Ana Cristina Porto", "posicao": "Levantadora" },
            { "nome": "Lyara Medeiros", "posicao": "Levantadora" },
            { "nome": "Jheovana Emanuele", "posicao": "Oposta" },
            { "nome": "Gabriela Carneiro", "posicao": "Oposta" },
            { "nome": "Aline Segato", "posicao": "Ponteira" },
            { "nome": "Sabrina Groth", "posicao": "Ponteira" },
            { "nome": "Luiza Vicente", "posicao": "Ponteira" },
            { "nome": "Lanna Gomes", "posicao": "Central" },
            { "nome": "Milena Souza", "posicao": "Central" },
            { "nome": "Luzia Nezzo", "posicao": "Central" },
            { "nome": "Ana Luiza Bento", "posicao": "Líbero" }
        ]
    },
    {
        "nome": "Brasilia",
        "jogadoras": [
            { "nome": "Nicole Drewnick", "posicao": "Levantadora" },
            { "nome": "Marina Sioto", "posicao": "Levantadora" },
            { "nome": "Laiza Figueiredo", "posicao": "Oposta" },
            { "nome": "Panni Petőváry", "posicao": "Oposta" },
            { "nome": "Milena Vilela", "posicao": "Ponteira" },
            { "nome": "Ana Clara Medina", "posicao": "Ponteira" },
            { "nome": "Geovanna Vitória Rodrigues", "posicao": "Ponteira" },
            { "nome": "Nayara Felix", "posicao": "Ponteira" },
            { "nome": "Marina Oliveira", "posicao": "Central" },
            { "nome": "Lívia Santos", "posicao": "Central" },
            { "nome": "Nandyala Gama", "posicao": "Central" },
            { "nome": "Kate Ferguson", "posicao": "Central" },
            { "nome": "Victória Cavalli", "posicao": "Líbero" },
            { "nome": "Vitória Lage", "posicao": "Líbero" }
        ]
    },
    {
        "nome": "Fluminense",
        "jogadoras": [
            { "nome": "Carolina Donatiello", "posicao": "Levantadora" },
            { "nome": "Sofhia Lopes", "posicao": "Levantadora" },
            { "nome": "Priscila Heldes", "posicao": "Levantadora" },
            { "nome": "Ariane Pinto", "posicao": "Oposta" },
            { "nome": "Pietra Jukoski", "posicao": "Ponteira" },
            { "nome": "Amanda Campos", "posicao": "Ponteira" },
            { "nome": "Stephany Morete", "posicao": "Ponteira" },
            { "nome": "Tamara Abila", "posicao": "Ponteira" },
            { "nome": "Vanessa Janke", "posicao": "Ponteira" },
            { "nome": "Lara Nobre", "posicao": "Central" },
            { "nome": "Daniela Seibt", "posicao": "Central" },
            { "nome": "Lays Freitas", "posicao": "Central" },
            { "nome": "Camila Monteiro", "posicao": "Central" },
            { "nome": "Maila Ribeiro", "posicao": "Líbero" },
            { "nome": "Letícia Moura", "posicao": "Líbero" },
            { "nome": "Marcelle Silva", "posicao": "Líbero" }
        ]
    },
    {
        "nome": "Unilife Maringa",
        "jogadoras": [
            { "nome": "Vivian Lima", "posicao": "Levantadora" },
            { "nome": "Mikaella Costa", "posicao": "Levantadora" },
            { "nome": "Jaqueline Schmitz", "posicao": "Oposta" },
            { "nome": "Arianne Tolentino", "posicao": "Oposta" },
            { "nome": "Natália Danielski", "posicao": "Ponteira" },
            { "nome": "Gabriela Cândido", "posicao": "Ponteira" },
            { "nome": "Lohayne Endres", "posicao": "Ponteira" },
            { "nome": "Karoline Tormena", "posicao": "Ponteira" },
            { "nome": "Edna Schlindwein", "posicao": "Central" },
            { "nome": "Larissa Gongra", "posicao": "Central" },
            { "nome": "Andressa Gelenski", "posicao": "Central" },
            { "nome": "Francynne Jacintho", "posicao": "Central" },
            { "nome": "Anielly Fernandes", "posicao": "Líbero" },
            { "nome": "Paulina Souza", "posicao": "Líbero" }
        ]
    },
    {
        "nome": "Abel Moda Volei",
        "jogadoras": [
            { "nome": "Isadora Nicolai", "posicao": "Levantadora" },
            { "nome": "Ana Paula Nunes", "posicao": "Levantadora" },
            { "nome": "Sabrina Floriano", "posicao": "Oposta" },
            { "nome": "Karla Goedert", "posicao": "Oposta" },
            { "nome": "Heloisa Brazolim", "posicao": "Oposta" },
            { "nome": "Emanuelle Moura", "posicao": "Ponteira" },
            { "nome": "Anna Sampaio", "posicao": "Ponteira" },
            { "nome": "Mariana Blum", "posicao": "Ponteira" },
            { "nome": "Vitória Parise", "posicao": "Ponteira" },
            { "nome": "Hellen Luvizetti Lacava", "posicao": "Ponteira" },
            { "nome": "Glaucia Ludescher", "posicao": "Central" },
            { "nome": "Camila Leite", "posicao": "Central" },
            { "nome": "Natasha Farinea", "posicao": "Central" },
            { "nome": "Leticya Franco", "posicao": "Central" },
            { "nome": "Gabriela Santin", "posicao": "Líbero" },
        ]
    },
    {
        "nome": "Batavo/Mackenzie",
        "jogadoras": [
            { "nome": "Isadora Nicolai", "posicao": "Levantadora" },
            { "nome": "Ana Paula Nunes", "posicao": "Levantadora" },
            { "nome": "Sabrina Floriano", "posicao": "Oposta" },
            { "nome": "Karla Goedert", "posicao": "Oposta" },
            { "nome": "Heloisa Brazolim", "posicao": "Oposta" },
            { "nome": "Emanuelle Moura", "posicao": "Ponteira" },
            { "nome": "Anna Sampaio", "posicao": "Ponteira" },
            { "nome": "Mariana Blum", "posicao": "Ponteira" },
            { "nome": "Vitória Parise", "posicao": "Ponteira" },
            { "nome": "Hellen Luvizetti Lacava", "posicao": "Ponteira" },
            { "nome": "Glaucia Ludescher", "posicao": "Central" },
            { "nome": "Camila Leite", "posicao": "Central" },
            { "nome": "Natasha Farinea", "posicao": "Central" },
            { "nome": "Leticya Franco", "posicao": "Central" },
            { "nome": "Gabriela Santin", "posicao": "Líbero" }
        ]
    }
    
];


function gerarTabelas() { //Função que gera tabela dos times
    const timesContainer = document.getElementById('times-container'); //Busca o id onde as tabelas serão inseridas

    times.forEach(time => {// Para cada array de times crie uma div para conter a tabela
        const tabelaContainer = document.createElement('div');
        tabelaContainer.className = 'tabela-container'; //Define a classe para estilização

        const titulo = document.createElement('h2');//Cria um titulo com o nome do time
        titulo.innerText = time.nome;
        tabelaContainer.appendChild(titulo); //Adiciona o tirulo ao container da tabela

        const tabela = document.createElement('table'); //Cria tabela onde os dados irão aparecer
        tabela.className = 'tabela-estilizada'; //Define classe para estilização

        const thead = `
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Posição</th>
                </tr>
            </thead>
        `;  //Tabela com colunas 

        let tbody = '<tbody>'; //Inicia o corpo da tabela
        time.jogadoras.forEach(jogadora => { //Para cada jogadora adicionar uma linha na tabela
            tbody += `
                <tr>
                    <td>${jogadora.nome}</td>
                    <td>${jogadora.posicao}</td>
                </tr>
            `;
        });
        tbody += '</tbody>'; //Fecha o corpo da tabeça

        tabela.innerHTML = thead + tbody; //Adiciona as colunas e linhas
        tabelaContainer.appendChild(tabela); // Adiciona a tabela completa no container
        timesContainer.appendChild(tabelaContainer);//Adiciona a pagina principal
    });
}

window.onload = gerarTabelas; //Chama função assim que a tela e carregada

//Estatisticas.html
const jogadoras = [ //Array com as maiores pontuadoras
    { nome: "Kuznetsova", clube: "Praia Clube", posicao: "Ponteira", pontos: 447},
    { nome: "Tifanny", clube: "Osasco", posicao: "Oposta", pontos: 423},
    { nome: "Kisy", clube: "Gerdau Minas", posicao: "Oposta", pontos: 411},
    { nome: "Roni", clube: "Sesc Flamengo", posicao: "Ponteira", pontos: 375},
];

const maiorespont = document.getElementById('maiorespont'); //Encontra o elemento com o id correspondente onde as jogadoras serão listadas

jogadoras.forEach(jogadora => { //Cada jogadora na lista cria uma linha na tabela
    const row = `<tr>
        <td>${jogadora.nome}</td>
        <td>${jogadora.clube}</td>
        <td>${jogadora.posicao}</td>
        <td>${jogadora.pontos}</td>
    </tr>`;
    maiorespont.innerHTML += row; //Adiciona a linha criada
});

const bloqueadoras = [ //Array com maiores bloqueadoras
    { nome: "Adenízia", clube: "Praia Clube", posicao: "Central", bloqueios: 87},
    { nome: "Julia Kudiess", clube: "Gerdau Minas", posicao: "Central", bloqueios: 58},
    { nome: "Butler", clube: "Osasco", posicao: "Central", bloqueios: 58},
    { nome: "Valquíria", clube: "Sesc Flamengo", posicao: "Central", bloqueios: 54},
];

const maioresbloq = document.getElementById('maioresbloq');//Encontra o elemento com o id correspondente onde as jogadoras serão listadas

bloqueadoras.forEach(bloqueadora => { //Cada jogadora na lista cria uma linha na tabela
    const row = `<tr>
        <td>${bloqueadora.nome}</td>
        <td>${bloqueadora.clube}</td>
        <td>${bloqueadora.posicao}</td>
        <td>${bloqueadora.bloqueios}</td>
    </tr>`;
    maioresbloq.innerHTML += row; //Adiciona a linha criada
});


const aces = [//Lista de jogadoras com mais aces
    { nome: "Roni", clube: "Sesc Flamengo", posicao: "Ponteira", aces: 30},
    { nome: "Kutznetsova", clube: "Praia Clube", posicao: "Ponteira", aces: 28},
    { nome: "Thaisa", clube: "Gerdau Minas", posicao: "Central", aces: 24},
    { nome: "Tifanny", clube: "Osasco", posicao: "Oposta", aces: 23},
];

const maioressac = document.getElementById('maioressac');//Encontra o elemento com o id correspondente onde as jogadoras serão listadas

aces.forEach(sacadora => {//Cada jogadora na lista cria uma linha na tabela
    const row = `<tr>
        <td>${sacadora.nome}</td>
        <td>${sacadora.clube}</td>
        <td>${sacadora.posicao}</td>
        <td>${sacadora.aces}</td>
    </tr>`;
    maioressac.innerHTML += row; //Adiciona a linha criada
});

