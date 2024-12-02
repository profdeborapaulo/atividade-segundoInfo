function compra(id) {
    let array = {};
    if (localStorage.getItem('estoque' + id) == null) {
        if (id == 1) {
            array = {
                id: 1,
                nome: 'Cilindro de Oxigênio 4L',
                preco: 1500,
                img: '/img/Cilindro 1.png',
                quantidade: 1
            };
            localStorage.setItem('estoque' + id, JSON.stringify(array));
            alert("Item adicionado ao carrinho!")
        } if (id == 0) {
            array = {
                id: 0,
                nome: 'Cilindro de Oxigênio 8L',
                preco: 2850,
                img: '/img/Cilindro.png',
                quantidade: 1
            };
            localStorage.setItem('estoque' + id, JSON.stringify(array));
            alert("Item adicionado ao carrinho!")
        } if (id == 2) {
            array = {
                id: 2,
                nome: 'Cilindro de Oxigênio 16L',
                preco: 5415,
                img: '/img/Cilindro 2.png',
                quantidade: 1
            };
            localStorage.setItem('estoque' + id, JSON.stringify(array));
            alert("Item adicionado ao carrinho!")
        }
    } else {
        alert("Esse item já está no carrinho, para adicionar mais, vá para o carrinho e modifique a quantidade de pedidos!")
    }
}