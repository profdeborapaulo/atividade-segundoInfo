function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const form = document.getElementById('form');

// obtem os dados do localStorage e transforma em array
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { name, price, photo } = form;
    if (name.value.length < 2) {
        alert('O nome do ingrediente deve ter mais que dois caracteres!');
        return;
    }

    if (price.value === 0) {
        alert('O preço do ingrediente não pode ser igual a zero!');
        return;
    }

    if (ingredients.find((ingredient) => ingredient.name === name.value && ingredient.userId === user.id)) {
        alert('Já existe com ingrediente com este nome!');
        return;
    }

    const ingredient = {
        id: generateRandomId(),
        name: name.value,
        price: price.value,
        photo: photo.value,
        userId: user.id
    }

    ingredients.push(ingredient);

    // transforma em json e guarda nno localStorage
    localStorage.setItem('ingredients', JSON.stringify(ingredients));

    alert('Ingrediente cadastrado com sucesso!');
    window.location.href = "../"
})