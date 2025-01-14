# Manaca_School

Projeto desenvolvido na Etec Antônio Furlan
Aluno: João Pedro Espeleta Sturari De Castro
Data: Novembro/24
Orientadora: Professora Débora Batista de Paulo
Tema: "FUTURO"

De acordo com o tema, foi escolhido um projeto a respeito de uma escola futurística, com cursos de excelência e visando as necessidades do mercado futuro. A Manaca School é uma escola com presença nos quatro cantos do mundo, com o auxílio de inteligência artifical os estudantes são ensinados na prática a realizarem atividades com propósito para o futuro.

**Arquivos HTML**

# 1. contato.html
Descrição:
Página de contato do site, contendo um formulário para que usuários enviem dúvidas ou mensagens.

Seções:

Cabeçalho: Menu de navegação com links para páginas principais.
Formulário: Captura informações de contato (nome, e-mail, descrição).
Resumo da Ordem: Exibido após o envio do formulário.
Rodapé: Contém links para outras páginas e informações de direitos autorais.
Dependências:

CSS: contato.css, menu.css
JS: contato.js

# 2. index.html
Descrição:
Página inicial do site, com informações introdutórias sobre os serviços oferecidos.

Seções:

Menu e Hero: Apresentação visual da página inicial com efeito de digitação.
Sobre a Escola: Introdução aos objetivos e metodologia.
Serviços: Lista e descrição dos serviços disponíveis.
FAQ: Respostas às perguntas frequentes.
Rodapé: Links e informações de copyright.
Dependências:

CSS: index.css, menu.css
JS: interatividade.js

# 3. servico.html
Descrição:
Página que detalha os cursos oferecidos.

Seções:

Detalhes de Cursos: Informações sobre cada curso, como Blockchain, Metaverso e IA.
Formulário de Quiz: Avaliação para recomendar o curso mais adequado.
Rodapé: Links para navegação e informações adicionais.
Dependências:

CSS: servico.css, menu.css
JS: serviço.js

# 4. sobre.html
Descrição:
Página informativa sobre a empresa.

Seções:

Quem Somos: Descrição da empresa e de seus objetivos.
Missão e Valores: Explicação sobre os pilares da organização.
Como Funciona: Detalhes sobre os cursos oferecidos.
Rodapé: Links para outras seções do site.
Dependências:

CSS: sobre.css, menu.css


**Arquivos CSS**

# 1. index.css
Descrição:
Estilização da página inicial. Inclui animações como efeito de digitação e pulso no botão.

Destaques:

typing-effect: Animação para texto digitado.
btn-conheca-mais: Botão com animação de pulso ao carregar.
Layouts responsivos para diferentes tamanhos de tela.

# 2. contato.css
Descrição:
Estilização do formulário e do resumo de ordens.

Destaques:

Formulário centralizado com efeitos de hover nos botões.
Resumo da ordem estilizado para exibição limpa e atraente.

# 3. menu.css
Descrição:
Estilização compartilhada entre o menu e o rodapé.

Destaques:

Menu fixo e responsivo.
Links com animação ao passar o mouse.
Rodapé organizado com links e copyright.

# 4. servico.css
Descrição:
Estilização específica para a página de cursos e formulário de quiz.

Destaques:

Layout responsivo para seções de cursos.
Efeitos de hover nas opções do quiz.

# 5. sobre.css
Descrição:
Estilização da página "Sobre".

Destaques:

Layout flexível para textos e imagens.
Seções alternadas com estilos de imagens e conteúdos.

**Arquivos JavaScript**

# 1. contato.js
Função Principal:

handleSubmit(event): Processa o envio do formulário, exibe o resumo e limpa os campos.

# 2. interatividade.js
Função Principal:

Animação no botão "Conheça Mais" e no texto com efeito de digitação.

# 3. serviço.js
Função Principal:

submitQuiz(): Avalia respostas do quiz e recomenda um curso com base no perfil do usuário.