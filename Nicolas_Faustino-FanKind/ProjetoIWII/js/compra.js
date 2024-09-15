
document.getElementById('finalizar-compra').addEventListener('click', function() {
    localStorage.setItem('finalizedPurchase', 'true');
    window.location.href = 'homecliente.html';
});