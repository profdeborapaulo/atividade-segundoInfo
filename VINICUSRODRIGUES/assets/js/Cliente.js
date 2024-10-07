// Primeiro Passo: Criar um array para armazenar os clientes
let clientes = [];
let client = {};
let JSONclientes = localStorage.getItem('clientes');
clientes = JSON.parse(JSONclientes);
 if(clientes == null){
    clientes = [];
 };
clientes = [
    client = {
            nome: "vini",
              cpf: "470782"
            }
];

let nomeCliente = document.getElementById('nome-cliente').value;
let cpfCliente = document.getElementById('cpf-cliente').value;  



 

/// Criar uma função para adicionar os produtos
function addCliente() {    
    
    
   function Existente(){
    return clientes.some(client => client.cpf === cpfCliente);
}

Existente();

    // Verificar se os campos estão preenchidos
    if (nomeCliente && cpfCliente) {

        if(Existente(cpfCliente)){
            alert("CPF ja cadastrado/invalido");
            return;
        }
        if(cpfCliente.length != 11){
            alert("CPF deve ter 11 digitos");
            return;
        }

        client = {
            nome: nomeCliente,
            cpf: cpfCliente
        };
        

       

        // Adicionar o produto dentro do array usando o método push()
       clientes.push(client);
       
       
        // Limpar os campos de entrada
        document.getElementById('nome-cliente').value = '';
        document.getElementById('cpf-cliente').value = '';

//Metoddo utilizado para armazenar os dados do formulario ao array       
localStorage.setItem('clientes', JSON.stringify(clientes));

JSONclientes = localStorage.getItem('clientes');
clientes = JSON.parse(JSONclientes);

  alert("Cliente Cadastrado")
    };
    console.log(clientes);
   
 addCliente();

};





function logarCLIENTE(){

        //verificar se as entradas de dados correspondem com o array
        if(nomeCliente && cpfCliente){

        JSONclientes = localStorage.getItem('clientes');
        clientes = JSON.parse(JSONclientes);
       
            let LoginExistente = clientes.find(client => client.nome === nomeCliente && client.cpf === cpfCliente);
            if(LoginExistente){
                let ClienteLogado = LoginExistente;
                localStorage.setItem('ClienteLogado', JSON.stringify(ClienteLogado));
                window.location.href = "html/AreaLogadaCLIENTE.html";   
                e.prevenDefault();       
            }else{
                alert("Login Incorreto! Tente Novamente")
                document.getElementById('nome-cliente').value='';
                document.getElementById('cpf-cliente').value='';
            }
        
   }
};

//função criada para avisar login e senha se o usuario esqueceu
function esqueci(){
    alert ("Login = Nome Completo --- Senha = CPF Completo");
};
