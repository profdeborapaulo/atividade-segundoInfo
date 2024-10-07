 
// Criar uma nova função para exibir os produtos na tabela
function displayClientes() {

   

    
    
        const listaCliente = document.getElementById('lista-cliente');
        listaCliente.innerHTML = '';
        //criar uma nova linha para cada dado adicionado
        clientes.forEach(function(client) {
            const row = listaCliente.insertRow(); //criar linha
           
            const cell1 = row.insertCell(0);
            cell1.textContent = client.nome;
     
            const cell2 = row.insertCell(1);
            cell2.textContent = client.cpf;        
        });
        // Capturar os dados do formulário de cadastro
    
    };