<!DOCTYPE html>
<html"> 
<head>
<meta charset='utf-8'>
</head>
<body>
<?php
include "conexao.php";
mysqli_set_charset($con,"utf8");
  
$nome=$_POST['nome'];
$senha=$_POST['senha'];
// $sql="SELECT * FROM registrados WHERE nome like '$nome%' AND senha = '$senha%";
$sql="SELECT * FROM `registrados` WHERE nome = '$nome' AND senha = '$senha'";

$busca = mysqli_query($con,$sql); // excuta o sql


$linhas=$busca->num_rows; // verifica se achou tem pelo menos 1 linha , senão não achou $linhas = 0

if ($linhas==0){
   echo "<script>alert('NOME NÃO CADASTRADO');window.location.href='login.html';</script>";
    }
 else {  
	echo "<script>alert('Seja bem vindo $nome!');window.location.href='index.html';</script>";
}
?>

<br>
<a href="index.html">Voltar a página principal</a>

</body>
</html>


