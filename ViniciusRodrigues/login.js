
function logarADM(){
    let emailADM = document.getElementById('email').value;
    let senhaADM = document.getElementById('senha').value;

    //funcao para verificar login e redirecionar à pagina
    if(emailADM === "ViniADM00@gmail.com" && senhaADM  === "admin00"){
    
        //metodo usado para redirecionar caso login esteja correto
        location.href = "AreaLogadaADM.html";
        alert("Logado como ADM com Sucesso")
        

    }else{
        alert("Login ou Senha Invalidos!!");
        
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
    }
    
};
