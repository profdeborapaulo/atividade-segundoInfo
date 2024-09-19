<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style2.css">
    <title>Usuários</title>
    <style>
        .dado {
            border: 1px solid gray;
            padding: 10px;
        }

        button{
            padding: 15px;
            border-radius: 5px;
            font-family: 'celeste';
            transition: 0.2s;
        }

        input {
            padding: 15px;
            border-radius: 5px;
            font-family: 'celeste';
            transition: 0.3s;
        }

        button:hover{
            color: white;
            background-color: black;
        }

        input:hover {
            color: white;
        }

        button:active{
            margin: 5px;
            padding: 10px;
            background-color: rgb(103, 103, 103);
        }
    </style>
</head>

<body>
    <header>
        <h1>USUARIOS</h1>
        <a href="cadastro.html">Cadastro</a>
        <a href="login.html">Login</a>
        <a href="index.html">Home</a>
    </header>

    <div id="centro">
        <form action="" id="form1">
           <label for="id">Pesquisa por ID:</label>
           <input type="text" name="id" id="id" required>
           <button type="submit">Buscar</button>
        </form>
        <form action="" id="form2">
            <label for="nome">Pesquisa por Nome</label>
            <input type="text" name="nome" id="nome" requird>
            <button type="submit">Buscar</button>
        </form><br>
    </div>
        <div id="botao"><button type="submit" id="att" onclick="location.reload()">Atualizar</button></div>
    

    <center>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>senha</th>
                </tr>
            </thead>
        
        <tbody>
            <?php
                include "conexao.php";
                mysqli_set_charset($con, "utf8");

                $sql = "SELECT * FROM registrados";
                $busca = mysqli_query($con, $sql);

                $contador = 0;
                while ($dados = mysqli_fetch_array($busca)) {
                    echo "<tr>";
                    echo "<td class='dado'>" . $dados['codigo']. "</td>";
                    echo "<td class='dado'>" . $dados['nome']. "</td>";
                    echo "<td class='dado'>" . $dados['senha']. "</td>";
                    echo "</tr>";
                    $contador = $contador + 1;
                }
            ?>  
            </tbody>
        </table>
    </center>
   
</body>

</html>