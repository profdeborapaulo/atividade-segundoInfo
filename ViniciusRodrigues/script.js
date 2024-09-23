// Primeiro Passo: Criar um array para armazenar os produtos
let clientes = [];
let client = {}
let JSONclientes = localStorage.getItem('clientes');
clientes = JSON.parse(JSONclientes);
 if(clientes == null){
    clientes = [];
 };
clientes = [
    client = {nome: "vini",
    cpf: "470782"}
];



// Criar uma função para adicionar os produtos
function addCliente() {      
    let nomeCliente = document.getElementById('nome-cliente').value;
    let cpfCliente = document.getElementById('cpf-cliente').value;    
 


    // Verificar se os campos estão preenchidos
    if (nomeCliente && cpfCliente) {
        client = {
            nome: nomeCliente,
            cpf: cpfCliente
        };
        
        // Adicionar o produto dentro do array usando o método push()
       clientes.push(client);
        // Atualizar a lista de produtos e mostrar:
        displayClientes();
        // Limpar os campos de entrada
        document.getElementById('nome-cliente').value = '';
        document.getElementById('cpf-cliente').value = '';

//Metoddo utilizado para armazenar os dados do formulario ao array       
localStorage.setItem('clientes', JSON.stringify(clientes));

JSONclientes =  localStorage.getItem('clientes');

clientes = JSON.parse(JSONclientes);

    }
    console.log(clientes);

};




 
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
const formProduto = document.getElementById('cliente-form');
 
// Botão para submeter os dados do formulário. O addEventListener é um escutador de evento
formProduto.addEventListener('submit', function(e){
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addCliente(); // Correção aqui: adicionar parênteses para chamar a função
});
 
 









//funcao criada para fazer login do cliente
function logarCLIENTE(){

    let nome = document.getElementById('nomeC').value;
    let senha = document.getElementById('senhaC').value;
    //variavel criada para evitar que o login verifique um dado de cadavez do array
    let validacao = false

    //pegar os dados do array e trazer para variavel
    for(let usuario in clientes ){ 
        
        //verificar se as entradas de dados correspondem com o array
        if(nome===clientes[usuario].nome && senha===clientes[usuario].cpf){
        validacao = true;
        break

    }else{
        validacao = false;
    }
}
   if(validacao==true){
    alert("Logado como Cliente com Sucesso") 
    location.href = "AreaLogadaCLIENTE.html";
   }else{
    alert("Login/Senha Invalidos")
   }
};
//função criada para avisar login e senha se o usuario esqueceu
function esqueci(){
    alert ("Login = Nome Completo --- Senha = CPF Completo");
};







// Função para exibir todas as cobranças de um cliente específico
function exibirCobrancas(clienteCpf) {
      
   
    // Buscar o cliente no array 'clientes' usando o CPF como critério
    let cliente = clientes.find(c => c.cpf === clienteCpf);

    // Verificar se o cliente foi encontrado e se ele possui cobranças
    if (cliente && cliente.cobrancas) {

      
        const listaCobrancas = document.getElementById('lista-cobrancas');
        listaCobrancas.innerHTML = ''; 

        // Criar um linha para cada cobrança adicionada
        cliente.cobrancas.forEach(cobranca => {
            const row = listaCobrancas.insertRow(); 

            
            const cell1 = row.insertCell(0);  
            cell1.textContent = cobranca.descricao;

            const cell2 = row.insertCell(1);  
            cell2.textContent = cobranca.valor;

            const cell3 = row.insertCell(2);  
            // Terceira célula: Status ("Pago" ou "Pendente")
            cell3.textContent = cobranca.pago ? "Pago" : "Pendente";

            
            const cell4 = row.insertCell(3);
            if (!cobranca.pago) {
                const pagarBtn = document.createElement('button');
                pagarBtn.textContent = "Pagar";
                pagarBtn.onclick = function() {
                    pagarCobranca(clienteCpf, cobranca.descricao); // Chamar a função de pagamento
                    exibirCobrancas(clienteCpf); // Atualizar a exibição após o pagamento
                };
                cell4.appendChild(pagarBtn);
            } else {
                cell4.textContent = "Cobrança paga"; // Mostrar uma mensagem se já estiver paga
            }
        });
    } else {
       
        alert("Nenhuma cobrança encontrada para este cliente.");
    }
    
};















// Função para marcar uma cobrança como "paga" para um cliente específico
function pagarCobranca(clienteCpf, descricaoCobranca) {
    // Buscar o cliente no array 'clientes' usando o CPF como critério
    let cliente = clientes.find(c => c.cpf === clienteCpf);

    // Verificar se o cliente foi encontrado e se ele possui cobranças
    if (cliente && cliente.cobrancas) {
        // Procurar a cobrança específica pelo campo 'descricao'
        let cobranca = cliente.cobrancas.find(c => c.descricao === descricaoCobranca);

        // Se a cobrança for encontrada, marcar como "paga"
        if (cobranca) {
            cobranca.pago = true;

            // Atualizar os dados dos clientes no localStorage
            localStorage.setItem('clientes', JSON.stringify(clientes));

            // Exibir uma mensagem de sucesso para o cliente
            alert("Cobrança paga com sucesso!");
        } else {
            // Se a cobrança não for encontrada, exibir uma mensagem de erro
            alert("Cobrança não encontrada.");
        }
    } else {
        // Se o cliente ou cobranças não forem encontrados, exibir uma mensagem de erro
        alert("Cliente ou cobranças não encontrados.");
    }
};


















// Função para adicionar uma cobrança a um cliente específico
function addCobranca(clienteCpf, descricao, valor) {
 
   
    // Buscar o cliente no array 'clientes' usando o CPF como critério
    let cliente = clientes.find(c => c.cpf === clienteCpf);

    // Verificar se o cliente foi encontrado
    if (cliente) {
        // Se o cliente ainda não tiver cobranças, criar um array para armazená-las
        if (!cliente.cobrancas) {
            cliente.cobrancas = [];
        }

        // Adicionar uma nova cobrança ao array de cobranças do cliente
        cliente.cobrancas.push({
            descricao: descricao,  
            valor: valor,         
            pago: false            
        });

        // Atualizar os dados dos clientes no localStorage
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Exibir uma mensagem de sucesso para o administrador
        alert("Cobrança adicionada com sucesso!");
    } else {
        // Se o cliente não for encontrado, exibir uma mensagem de erro
        alert("Cliente não encontrado.");
    }
};







