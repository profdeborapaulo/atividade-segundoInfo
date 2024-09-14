// obtém todos os dados do localStorage em JSON e transforma para array

const sales = JSON.parse(localStorage.getItem('sales') || '[]').filter((sale) => sale.userId === user.id);
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]').filter((ingredient) => ingredient.userId === user.id);

let profitPerMonth = [];

// cria um objeto Date da data atual
const now = new Date();

for (let i = 0; i < 6; i++) {
    // verifica os 6 meses anteriores

    // cria um objeto Date do mes que sera analisado o lucro
    const month = new Date(`${now.getFullYear()}-${now.getMonth() - i + 1}-01`);

    // filtra as vendas ocorridas neste mes
    const monthSales = sales.filter((monthProfit) => new Date(monthProfit.createdAt).getMonth() === month.getMonth() && new Date(monthProfit.createdAt).getFullYear() === month.getFullYear());
    if (monthSales.length === 0) {
        // caso não há nenhuma venda, o lucro será igual a 0
        profitPerMonth.unshift({ month, profit: 0 });
        continue;
    }

    // percorre todos os itens do array monthSales
    monthSales.map((sale) => {
        const price = sale.products.map((productId) => {
            // calcula o preço dos produtos multiplicado pela quantidade
            const product = products.find((product) => product.id === productId.id);
            return parseFloat(product.price * productId.quantity);
        }).reduce((acc, curr) => acc + curr, 0); // soma todos os preços

        const profit = sale.products.map((productId) => {
            // calcula o preço dos ingredientes para descobrir o lucro
            const product = products.find((product) => product.id === productId.id);
            const ingredientsPrice = product.ingredients.map((productIngredient) => {
                const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
                return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
                // retorna o preço dos ingredientes multiplicado pela quantidade
            }).reduce((acc, curr) => acc + curr, 0); // soma todos os preços
            return (parseFloat(product.price) - ingredientsPrice) * productId.quantity;
            // retorna o lucro do produto
        }).reduce((acc, curr) => acc + curr, 0);

        // analisa se já tem alguma analise desse mes
        const monthProfit = profitPerMonth.find((monthProfit) => `${monthProfit.month.getMonth() + 1}/${monthProfit.month.getFullYear()}` === `${month.getMonth() + 1}/${month.getFullYear()}`);
        
        if (monthProfit) {
            // caso já tenha ele só adiciona o valor
            monthProfit.profit += profit;
        } else {
            // senão ele cria um objeto no array
            profitPerMonth.unshift({ month, profit });
        }
    });
}

// obtem a div do grafico
const graphic = document.getElementById('profit-graphic');

if (profitPerMonth.length < 6) {
    // caso tenha algum mês sem vendas, ele irá preencher o array com um lucro 0
    const months = 6 - profitPerMonth.length;
    for (let i = 0; i < months; i++) {
        const lastMonth = new Date(profitPerMonth[0].month);
        lastMonth.setDate(1)
        const month = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
        profitPerMonth.unshift({ month, profit: 0 });
    }
}

// faz uma cópia do array e percorre todos os itens
profitPerMonth.slice(0, 6).map((month, i, data) => {
    // calcula a altura da coluna do grafico definindo com a altura 100% o mes com maior lucro
    const height = (month.profit / [...data].sort((a, b) => b.profit - a.profit)[0].profit * 100) || 0;
    const element = 
    `<div style="height: 100%; display: flex; flex-direction: column; justify-content: end; width: 50px;" title="R$ ${parseFloat(month.profit).toFixed(2).replace('.', ',')}">
        <div style="height: ${height === 0 ? '1': height}%; background-color: var(--primary-color); width: 100%;"></div>
        <p>${month.month.getMonth() + 1}/${month.month.getFullYear()}</p>
    </div>`;

    // adiciona o elemento ao html
    graphic.innerHTML += element;
});


// filtra as vendas dos ultimos 30 dias
const last30Days = sales.filter((sale) => new Date(sale.createdAt) >= new Date(now.setDate(now.getDate() - 30)));

// calcula o lucro dos ultimos 30 dias
const last30DaysProfit = last30Days.map((sale) => {
    // calcula o preço dos produtos
    const price = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return parseFloat(product.price * productId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    // calcula o lucro
    const profit = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        const ingredientsPrice = product.ingredients.map((productIngredient) => {
            const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
            return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
        }).reduce((acc, curr) => acc + curr, 0); // soma todo o preço dos ingredientes
        return (parseFloat(product.price) - ingredientsPrice) * productId.quantity;
    }).reduce((acc, curr) => acc + curr, 0); // soma todos os lucros

    return profit;
}).reduce((acc, curr) => acc + curr, 0); // soma o lucro de todas as vendas

document.getElementById('profit').innerHTML = last30DaysProfit.toFixed(2).replace('.', ','); // exibe no padrão brasileiro 0,00

// calcula as despesas dos ultimos 30 dias
const last30DaysExpense = last30Days.map((sale) => {
    // calcula o preço dos produtos
    const price = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return parseFloat(product.price * productId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    // calcula a despesa
    const expense = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        const ingredientsPrice = product.ingredients.map((productIngredient) => {
            const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
            return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
        }).reduce((acc, curr) => acc + curr, 0); // soma todo o preço dos ingredientes
        return ingredientsPrice * productId.quantity;
    }).reduce((acc, curr) => acc + curr, 0); // soma todos as despesas de um produto

    return expense;
}).reduce((acc, curr) => acc + curr, 0); // soma todos as despesas

document.getElementById('expense').innerHTML = last30DaysExpense.toFixed(2).replace('.', ','); // exibe no padrão brasileiro 0,00

const last30DaysRevenue = last30DaysProfit + last30DaysExpense; // calcula a receita

document.getElementById('revenue').innerHTML = last30DaysRevenue.toFixed(2).replace('.', ','); // exibe no padrão brasileiro 0,00

// calcula quantidade de vendas
const last30DaysProducts = last30Days.map((sale) => {
    return sale.products.map((productId) => {
        return parseInt(productId.quantity);
    });
}).flat().reduce((acc, curr) => acc + curr, 0);

document.getElementById('sales').innerHTML = last30DaysProducts;

// calcula os produtos mais vendidos
const moreSoldProducts = last30Days.map((sale) => {
    return sale.products.map((productId) => {
        return { product: products.find((product) => product.id === productId.id), quantity: parseInt(productId.quantity) };
    });
}).flat().reduce((acc, curr) => {
    const product = acc.find((product) => product.product.id === curr.product.id);
    if (product) {
        product.quantity += curr.quantity;
    } else {
        acc.push(curr);
    }
    return acc;
}, []).sort((a, b) => b.quantity - a.quantity).slice(0, 5);

moreSoldProducts.map((product) => {
    // calcula a despesa para depois calcular o lucro
    const ingredientsCost = product.product.ingredients.map(ingredientId => {
        const ingredient = ingredients.find(i => i.id === ingredientId.id);
        return parseFloat(ingredient.price) * parseInt(ingredientId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    const element = 
    `<tr>
        <td>${product.product.name}</td>
        <td>${product.quantity}</td>
        <td>R$ ${parseFloat((product.product.price - ingredientsCost) * product.quantity).toFixed(2).replace('.', ',')}</td>
    </tr>`;
    
    // renderiza no html
    document.getElementById('products-table').innerHTML += element;
});