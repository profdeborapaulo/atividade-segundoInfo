const sales = JSON.parse(localStorage.getItem('sales') || '[]').filter((sale) => sale.userId === user.id);
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]').filter((ingredient) => ingredient.userId === user.id);

let profitPerMonth = [];

const now = new Date();

for (let i = 0; i < 6; i++) {
    const month = new Date(`${now.getFullYear()}-${now.getMonth() - i + 1}-01`);
    const monthSales = sales.filter((monthProfit) => new Date(monthProfit.createdAt).getMonth() === month.getMonth() && new Date(monthProfit.createdAt).getFullYear() === month.getFullYear());
    if (monthSales.length === 0) {
        profitPerMonth.unshift({ month, profit: 0 });
        continue;
    }
    monthSales.map((sale) => {
        const price = sale.products.map((productId) => {
            const product = products.find((product) => product.id === productId.id);
            return parseFloat(product.price * productId.quantity);
        }).reduce((acc, curr) => acc + curr, 0);

        const profit = sale.products.map((productId) => {
            const product = products.find((product) => product.id === productId.id);
            const ingredientsPrice = product.ingredients.map((productIngredient) => {
                const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
                return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
            }).reduce((acc, curr) => acc + curr, 0);
            return (parseFloat(product.price) - ingredientsPrice) * productId.quantity;
        }).reduce((acc, curr) => acc + curr, 0);

        const monthProfit = profitPerMonth.find((monthProfit) => `${monthProfit.month.getMonth() + 1}/${monthProfit.month.getFullYear()}` === `${month.getMonth() + 1}/${month.getFullYear()}`);
        if (monthProfit) {
            monthProfit.profit += profit;
        } else {
            profitPerMonth.unshift({ month, profit });
        }
    });
}

const graphic = document.getElementById('profit-graphic');

if (profitPerMonth.length < 6) {
    const months = 6 - profitPerMonth.length;
    for (let i = 0; i < months; i++) {
        const lastMonth = new Date(profitPerMonth[0].month);
        lastMonth.setDate(1)
        const month = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
        profitPerMonth.unshift({ month, profit: 0 });
    }
}

profitPerMonth.slice(0, 6).map((month, i, data) => {
    const height = (month.profit / [...data].sort((a, b) => b.profit - a.profit)[0].profit * 100) || 0;
    const element = 
    `<div style="height: 100%; display: flex; flex-direction: column; justify-content: end; width: 50px;" title="R$ ${parseFloat(month.profit).toFixed(2).replace('.', ',')}">
        <div style="height: ${height === 0 ? '1': height}%; background-color: var(--primary-color); width: 100%;"></div>
        <p>${month.month.getMonth() + 1}/${month.month.getFullYear()}</p>
    </div>`;

    graphic.innerHTML += element;
});

const last30Days = sales.filter((sale) => new Date(sale.createdAt) >= new Date(now.setDate(now.getDate() - 30)));

const last30DaysProfit = last30Days.map((sale) => {
    const price = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return parseFloat(product.price * productId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    const profit = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        const ingredientsPrice = product.ingredients.map((productIngredient) => {
            const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
            return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
        }).reduce((acc, curr) => acc + curr, 0);
        return (parseFloat(product.price) - ingredientsPrice) * productId.quantity;
    }).reduce((acc, curr) => acc + curr, 0);

    return profit;
}).reduce((acc, curr) => acc + curr, 0);

document.getElementById('profit').innerHTML = last30DaysProfit.toFixed(2).replace('.', ',');

const last30DaysExpense = last30Days.map((sale) => {
    const price = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return parseFloat(product.price * productId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    const expense = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        const ingredientsPrice = product.ingredients.map((productIngredient) => {
            const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
            return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
        }).reduce((acc, curr) => acc + curr, 0);
        return ingredientsPrice * productId.quantity;
    }).reduce((acc, curr) => acc + curr, 0);

    return expense;
}).reduce((acc, curr) => acc + curr, 0);

document.getElementById('expense').innerHTML = last30DaysExpense.toFixed(2).replace('.', ',');

const last30DaysRevenue = last30DaysProfit + last30DaysExpense;

document.getElementById('revenue').innerHTML = last30DaysRevenue.toFixed(2).replace('.', ',');

const last30DaysProducts = last30Days.map((sale) => {
    return sale.products.map((productId) => {
        return parseInt(productId.quantity);
    });
}).flat().reduce((acc, curr) => acc + curr, 0);

document.getElementById('sales').innerHTML = last30DaysProducts;

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
    
    document.getElementById('products-table').innerHTML += element;
});