<h1>Futuro Personalizado</h1>
<h2>Descrição</h2>

O "Futuro Personalizado" é um site interativo que permite aos usuários explorar uma visão personalizada do seu futuro com base em suas escolhas. O usuário responde a uma série de perguntas relacionadas ao cenário do futuro, tecnologia, saúde, deslocamento e natureza, e, com base nas respostas, o site gera uma história única e uma imagem que ilustram esse futuro imaginado. O objetivo do projeto é criar uma experiência envolvente e criativa, combinando narrativa interativa e elementos visuais futuristas.

<h2>Explicação do Código</h2>
<h3>index.html</h3>
A página inicial contém um formulário com 5 perguntas sobre o futuro. O formulário é estruturado com tags select para permitir que o usuário escolha entre várias opções. Quando o usuário clica no botão "Ver meu futuro", as respostas são enviadas para a página resultado.html.


<h3>resultado.html</h3>
Na página de resultados, o conteúdo é dinâmico. O JavaScript usa os parâmetros da URL (passados pelo formulário) para determinar qual história e imagem devem ser mostradas. Isso é feito pela função loadResultPage() no script, que analisa as respostas e exibe a história correspondente e a imagem.


<h3>style.css</h3>
O arquivo de estilo contém uma estética futurista, utilizando:
Gradientes de cores frias (azuis e verdes).
Animações no título para criar um efeito de brilho.
Efeitos de hover nos botões e campos de formulário para tornar a navegação mais interativa.
Um layout responsivo e limpo, com foco na experiência do usuário.

<h3>script.js</h3>
O JavaScript é responsável por coletar as respostas do usuário, armazená-las e exibir a história e imagem correspondente. Ele manipula a navegação entre as páginas e é acionado quando o usuário envia o formulário.

Função loadResultPage(): Carrega a história e imagem corretas na página de resultados com base nas escolhas do usuário. As imagens são alteradas dinamicamente com base na primeira resposta (ex: "Cidade futurística e iluminada").
Função getUserAnswer(): Captura as respostas do usuário a partir dos parâmetros da URL e armazena as escolhas em variáveis.
