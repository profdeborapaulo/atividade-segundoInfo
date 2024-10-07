





function logarADM(){

let emailADM = document.getElementById('email').value;
let senhaADM = document.getElementById('senha').value;


    //funcao para verificar login e redirecionar à pagina
    if(emailADM === "viniadm@gmail.com" && senhaADM === "admin"){ 
        
           

            //metodo usado para redirecionar caso login esteja correto
        alert("Logado como ADM com Sucesso")
        window.location.href = "../html/AreaLogadaADM.html"

        }else{
        alert("Login ou Senha Invalidos!!");
        
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        
    
    
    }
};
