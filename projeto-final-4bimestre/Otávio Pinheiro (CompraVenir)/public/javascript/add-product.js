let nameProduct;
let price;
let description;
let image;

function addProduto(){

    
    // Captura dos Inputs do Admin
nameProduct = document.getElementById("name-product").value;
price = document.getElementById("price-product").value;
description = document.getElementById("description-product").value; 
image = document.getElementById("image-product").value; 

    if (nameProduct == "" || price == "" || description == "" || image == ""){ // Verificação se campos estão vazios
        alert("Campo vazio detectado. Por favor, preencha-os."); // Aviso caso estiver
        return; //Interrompe a função
    } else { //Senão, salvar o produto no arquivo JSON

        let newProduct = {
            name: nameProduct,
            price: price,
            description: description,
            image: image
        }

        console.log(newProduct);

        fetch('/salvar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data: newProduct}), //converte dado para JSON
 
        })
            .then(response => {
                if (response.ok) {
                    console.log('Produto adicionado com sucesso');
                    document.getElementById("name-product").value = "";
                    document.getElementById("price-product").value = "";
                    document.getElementById("description-product").value = ""; 
                    document.getElementById("image-product").value = ""; 
                 
                } else {
                    console.error('Erro ao salvar o produto');
                }
            })
            .catch(error => console.error('Erro ao enviar os dados:', error));
    }
}
