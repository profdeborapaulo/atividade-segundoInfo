function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const form = document.getElementById('form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = form.name.value;
    if (name.length < 2) {
        alert('O nome precisa ter mais que 1 caracter!');
    }

    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    if (categories.find((category) => category.name === name)) {
        alert('Esta categoria já existe!');
        return;
    }

    const category = {
        id: generateRandomId(),
        name,
        userId: user.id
    }

    categories.push(category);

    localStorage.setItem('categories', JSON.stringify(categories));
    alert('A categoria foi adicionada com sucesso!');
    window.location.href = "../"
})