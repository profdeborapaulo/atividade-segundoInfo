const objs = [
    {

    "title": "Futebol",
    "link" : "baixar.html",
    "image": "img/futebol1.jpg"

    },

    {  

    "title": "Futebol",
    "image": "img/futebol2.jpg"

    },

    
    {  

    "title": "Futebol",
    "image": "img/futebol3.jpg",

    },

    {  

    "title": "Futebol",
    "image": "img/futebol5.jpg"

    },

    {  

    "title": "Games / jogos",
    "image": "img/games-jogos1.jpg"

    },

    {  

    "title": "Games / jogos",
    "image": "img/games-jogos2.jpg"

    },

    {  

    "title": "Games / jogos",
    "image": "img/games-jogos3.jpg"

    },
    
    
    {  

    "title": "Games / jogos",
    "image": "img/games-jogos4.jpg"

    },
    
    {  

    "title": "Games / jogos",
    "image": "img/games-jogos5.jpg"

    },
     
    
    {  

    "title": "Paisagem",
    "image": "img/paisagem2.jpg"

    },
    
    {  

    "title": "Paisagem",
    "image": "img/Paisagem7.jpg"

    },

    {  

    "title": "Paisagem",
    "image": "img/Paisagem3.jpg"

    },

    {  

    "title": "Paisagem",
    "image": "img/Paisagem4.jpg"

    },

    {  

    "title": "Paisagem",
    "image": "img/Paisagem5.jpg"

    },

    {  

    "title": "Universo / espaço / cosmo",
    "image": "img/universo1.jpg"

    },

    {  

    "title": "Universo / espaço / cosmo",
    "image": "img/universo2.jpg"

    },

    {  

    "title": "Universo / espaço / cosmo",
    "image": "img/universo3.jpg"

    },

    {  

    "title": "Universo / espaço / cosmo",
    "image": "img/universo4.jpg"

    },

    {  

        "title": "Universo / espaço / cosmo",
        "image": "img/universo5.jpg"
    }
    


]



const jsonData = JSON.stringify(objs);

console.log(jsonData)
console.log(typeof jsonData)

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)


const ul = document.getElementById('ListaProdutos');
objs.forEach((item) =>{ //percorre os dados
    const li = document.createElement("li"); //criar uma li
    li.innerHTML = `
 <a href="baixar.html?path=${item.image}"><div class="item-galeria">${item.title}<img src=${item.image} alt="Wallpaper 1" class="imagemLista"></div></a>
    `;
    ul.appendChild(li) //alimentar a lista
})

function filtrar() {
    var input,
    filter,
    ul,
    li,
    a,
    i,
    span,
    txtValue,
    count = 0

    //pegar os elementos

    input = document.getElementById('input')
    ul = document.getElementById('ListaProdutos')

    //cria variavel filtro
    
    filter = input.value.toUpperCase();

    //pegas todas as li's da lista

    li = ul.getElementsByTagName("li");

    console.log(li)

    //percorrer as li's

    for(i = 0; i < li.length; i++) {
        //pegar o link das li's/
        a = li[i].getElementsByTagName("a")[0];
        //pegar o texto dentro do a de cada li
        txtValue = a.textContent || a.innerText;
        //verifica oq o usuario digitou bate com o texto do a
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            //valor bateu
            li[i].style.display = "";
            //incrementar o contador
            count = count + 1
            //pegar a tag sapn do item 
            span = li[i].querySelector(".item-name");
            //se exixtir
            if(span){

                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) =>{
                    return "<strong>" + match + "</strong>";
                })

            }

        } else {
            //nao mostra o item da lista
            li[i].style.display = "none"

        }
        //verificando se tem item na lista
        if (count === 0) {
            ul.style.display = "none";
        } else {
            ul.style.display = "block";
        }

        if (filter ==="") { 
            ul.style.display = "none"; 
        }else { 
            ul.style.display = "block"; 
        }


    }
}