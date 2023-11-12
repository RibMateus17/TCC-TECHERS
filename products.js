document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('productList');

    const response = await fetch('/products.html');
    const products = await response.json();

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.nome} - Quantidade: ${product.quantidade}`;
        productList.appendChild(listItem);
    });
});
