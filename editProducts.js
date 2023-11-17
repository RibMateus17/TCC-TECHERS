const editProductForm = document.getElementById('productForm');

const URL_PRODUCT_REGISTER = 'http://localhost:4500/product/register'

editProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productPriceBuy = document.getElementById('productPriceBuy').value;
    const productPriceSell = document.getElementById('productPriceSell').value;
    const productImage = document.getElementById('productImage');

    console.log(productImage);

    try {
        const response = await axios.post(URL_PRODUCT_REGISTER, {
            name: productName,
            qtd: productQuantity,
            priceB: productPriceBuy,
            priceS: productPriceSell,
            image: productImage,
        });

        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
});