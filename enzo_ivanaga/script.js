// Cria o Item 'album' no localStorage caso ele não exista.

if (!localStorage.getItem('album')) {
    localStorage.setItem('album', JSON.stringify([]));
}

//Converte o valor armazenado no localStorage para ser utilizado no código.
const albuns = JSON.parse(localStorage.getItem('album'));

//Função responsável por adicionar um novo álbum a array "albuns" com base nos dados inseridos pelo usuário.
function adicionarAlbum(){
    //Coleta dos dados pelo formulário.
    let imgAlbum = document.getElementById('imgalbum').value;
    let nomeAlbum = document.getElementById('nomealbum').value;
    let artistaAlbum = document.getElementById('artistaalbum').value;

  //Verifica se todos os campos foram inseridos e transferidos. (Apesar do required no HTML ainda acho bom adicionar)
  if(imgAlbum && nomeAlbum && artistaAlbum) {
    //Cria uma array temporária que será inserida na array principal "albuns".
    let album = {
        img: imgAlbum,
        nome: nomeAlbum,
        artista: artistaAlbum
    };

    //Insere a array temporária na array principal.
    albuns.push(album);

    //Insere os novos dados da array principal no localStorage.
    localStorage.setItem('album', JSON.stringify(albuns));

    //Redirect para a página da biblioteca
    window.location.href= "biblioteca.html";
  }
}

//Função para criar o display dos álbuns inseridos na biblioteca 
function mostrarAlbuns(){

    //Obtém a lista em que serão exibidos os álbuns e a armazena em uma constante(1° Linha) e zera os dados dela (2° Linha)
    const listaAlbuns = document.getElementById('listaalbum');
    listaAlbuns.innerHTML='';

    //forEach para criar o display de cada um dos álbuns presentes na array principal.
    albuns.forEach(function (album, indice) {
        //Cria a row na table criada no HTML da biblioteca.
        const row = listaAlbuns.insertRow();

        //Exibe a imagem do álbum inserido pelo usuário.
        const cell1 = row.insertCell(0);
        const img = document.createElement('img');
        img.src = album.img;
        img.alt = album.nome;
        img.style.width = '50px';
        img.style.height = '50px';
        cell1.appendChild(img); 

        //Exibe o nome do álbum inserido pelo usuário.
        const cell2 = row.insertCell(1);
        cell2.textContent = album.nome;
        
        //Exibe o nome do artista do album inserido pelo usuário.
        const cell3 = row.insertCell(2);
        cell3.textContent = album.artista;

        //Exibe o botão de excluir o álbum inserido pelo usuário.
        const cell4 = row.insertCell(3);
        const img2 = document.createElement('img');
        img2.src = 'excluir.png';
        img2.alt = 'Excluir';
        img2.style.width = '50px';
        img2.style.height = '50px';
        img2.style.cursor = 'pointer';
        img2.addEventListener('click', function() {
            deletarAlbum(indice);
        });
        cell4.appendChild(img2); 

    });
}

//Função responsável pelo funcionamento do botão de excluir.
function deletarAlbum(indice) {
    //Remove o álbum utilizando como parametro e indentificador o índice do album na array principal.
    albuns.splice(indice, 1);
    localStorage.setItem('album', JSON.stringify(albuns));

    //Atualiza o display para mostrar a alteração.
    mostrarAlbuns();
}

//Procedimento para evitar o comportamento padrão após enviar o fomulário.
const formAlbum = document.getElementById('album-form');
if (formAlbum) {
    formAlbum.addEventListener('submit', function (e) {
        e.preventDefault();   
        adicionarAlbum();
    });
}

//Verifica se a table existe e executa a função de display. (Não sei dizer a razão, mas utilizar a função de display dentro da função de adicionar um álbum para atulizar o display
//não estava executando como desejado, então encontrei essa solução.)
if (document.getElementById('listaalbum')) {
    mostrarAlbuns();
}