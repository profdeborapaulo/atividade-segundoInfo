# Documentação do Site

## **Contextualização**
### **Tema do Projeto: Futuro**
O projeto foi desenvolvido com base no tema "Futuro", refletindo sobre as consequências ambientais de um mundo em constante transformação. A inspiração central surgiu das questões relacionadas ao aumento da poluição atmosférica e a possível escassez de recursos naturais, como o ar puro.

### **Conceito Criativo**
O site retrata uma visão criativa e distópica, onde o ar puro, antes um recurso abundante e gratuito, tornou-se um item comercializado devido à deterioração da qualidade ambiental. A ideia de vender "ar em garrafas" ilustra um cenário hipotético em que a humanidade precisa se adaptar à degradação do meio ambiente para garantir a sobrevivência.

---

## **Descrição Geral**

Este projeto é um site interativo, incluindo:
- Um menu de navegação responsivo e adaptado para dispositivos móveis.
- Um sistema dinâmico de carrinho de compras.
- Exibição de produtos renderizados dinamicamente.
- Slider responsivo utilizando a biblioteca Swiper.js.

O código está estruturado em JavaScript para manipulação dinâmica da interface e comportamento.

---

## **Funcionalidades Principais**

### 1. **Menu de Navegação**

#### **Descrição**:
Um menu responsivo que inclui suporte para dispositivos móveis com botões para abrir e fechar, além de links que fecham automaticamente o menu quando clicados.

#### **Detalhes Técnicos**:
- **Seletores**:
  - `.nav-menu .nav-link`: Links do menu.
  - `#menu-open-button`: Botão para abrir o menu.
  - `#menu-close-button`: Botão para fechar o menu.
- **Funções**:
  - Alterna a classe `show-mobile-menu` no elemento `<body>` para abrir/fechar o menu.
  - Clique em qualquer link de navegação fecha o menu.

---

### 2. **Carrinho de Compras**

#### **Descrição**:
Permite que os usuários adicionem produtos ao carrinho, alterem quantidades e visualizem o preço total.

#### **Detalhes Técnicos**:
- **Seletores**:
  - `.shopping`: Ícone para abrir o carrinho.
  - `.closeShopping`: Ícone para fechar o carrinho.
  - `.products-list`: Lista de produtos disponíveis.
  - `.listCard`: Lista de produtos no carrinho.
  - `.total`: Exibe o preço total.
  - `.bag-quantity`: Exibe a quantidade de itens.
- **Funções**:
  - Adiciona itens ao carrinho e calcula o preço total dinamicamente.
  - Permite aumentar/diminuir a quantidade de itens no carrinho.

---

### 3. **Exibição de Produtos**

#### **Descrição**:
Os produtos são renderizados a partir de um array de objetos.

#### **Detalhes Técnicos**:
- **Estrutura do Produto**:
  - `id`: Identificador único.
  - `name`: Nome do produto.
  - `images`: Caminho para a imagem.
  - `price`: Preço.
- **Renderização**:
  - A função `initApp()` gera elementos HTML para cada produto e os insere na lista exibida.

---

### 4. **Swiper Slider**

#### **Descrição**:
Utiliza a biblioteca Swiper.js para criar um slider interativo e responsivo.

#### **Configuração**:
- Suporta navegação por botões e paginação.
- Responsividade para diferentes tamanhos de tela.

---

### **Principais Arquivos**
- **`index.html`**: Estrutura HTML contendo os componentes do site.
- **`style.css`**: Responsável pelo design e estilização do site.
- **`script.js`**: Contém toda a lógica funcional, como navegação, carrinho de compras e slider.

---

## **Dependências**
- **Swiper.js**: Para a funcionalidade de slider responsivo.

