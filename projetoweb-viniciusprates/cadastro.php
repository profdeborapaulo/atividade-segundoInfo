<?php

// Importa os códigos de conexão com o banco de dados
include "conexao.php";

// Variáveis do banco de dados
$nome=$_POST['nome'];
$senha=$_POST['senha'];

mysqli_set_charset($con,"utf8");

// $sql="SELECT * FROM registrados WHERE nome like '$nome%' AND senha = '$senha%";
$sql="SELECT * FROM `registrados` WHERE nome = '$nome' AND senha = '$senha'";

$busca = mysqli_query($con,$sql); // excuta o sql

$linhas=$busca->num_rows; // verifica se achou tem pelo menos 1 linha , senão não achou $linhas = 0

if ($linhas==0){
   // Código de inserção sql na tabela do banco de dados
    $sql="insert into registrados(nome,senha) values ('$nome','$senha')";
    echo "<script>alert('Cadastrado com sucesso!');window.location.href='index.html';</script>";
    }
 else {  
	echo "<script>alert('Este usuário já existe!');window.location.href='cadastro.html';</script>";
}

mysqli_query($con,$sql);

mysqli_close($con);
// header('location:index.html');

?>

