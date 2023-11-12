document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productQuantity = parseInt(document.getElementById('productQuantity').value, 10);
        const productPriceBuy = parseFloat(document.getElementById('productPriceBuy').value);
        const productPriceSell = parseFloat(document.getElementById('productPriceSell').value);

        try {
 
            const response = await fetch('/api/app-exemplo/produtos/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: productName,
                    quantidade: productQuantity,
                    precoCompra: productPriceBuy,
                    precoVenda: productPriceSell,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro desconhecido ao cadastrar o produto');
            }

            alert('Produto cadastrado com sucesso!');

        } catch (error) {
            alert(error.message);
        }
    });
});
