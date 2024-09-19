<?php
//conexão com o servidor/ Banco de dados

$usuario = "root";
$senha = "";

$host="localhost";
$banco = "cadastros";

// Comando mysql buscando pelas informações acima (usuario, senha).
$con=mysqli_connect($host, $usuario,$senha,$banco);

// Envia uma mensagem de erro de conexão.
if (mysqli_connect_errno())
  {
  echo "Falha na conexao com o MySQL: " . mysqli_connect_error();
  
}
?>