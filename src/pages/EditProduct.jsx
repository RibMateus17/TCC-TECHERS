import { useState } from "react";
import { postAPI } from '../services/API';
import { useHistory } from 'react-router-dom';

function EditProduct() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [qtd, setQtd] = useState(0);
  const [priceB, setPriceB] = useState(0);
  const [priceS, setPriceS] = useState(0);
  const [qtdS, setQtdS] = useState(0);
  const [image, setImage] = useState(null);

  const handlerImage = (e) => {
    setImage(e.target.files[0]);
  }

  const handleClick = async () => {
    const formData = new FormData();

    console.log(image.name);

    formData.append("name", name);
    formData.append("qtd", qtd);
    formData.append("priceB", priceB);
    formData.append("priceS", priceS);
    formData.append("image", image);
    formData.append("qtdS", qtdS);
    formData.append("imageName", image.name);

    try {
      const { status } = await postAPI(
        "http://localhost:3002/product/register",
        formData,
        true
      );
      console.log(status);
      history.push("/product");
    } catch (error) {
      console.log('Erradão, muleke');
    }
  }

  return(
    <div className="edit-product-body">
    <div className="edit-product-container">
      <h1>Editar Produtos</h1>
      <form id="productForm">
          <label htmlFor="productName">Nome do Produto:</label>
          <input type="text"
            id="productName"
            onChange={ ({ target: { value } }) => setName(value) }
            required
          />

          <label htmlFor="productQuantity">Quantidade:</label>
          <input
            type="number"
            id="productQuantity"
            onChange={ ({ target: { value } }) => setQtd(value) }
            required
          />

          <label htmlFor="productPriceBuy">Preço de Compra:</label>
          <input
            type="number"
            id="productPriceBuy"
            onChange={ ({ target: { value } }) => setPriceB(value) }
            required
          />

          <label htmlFor="productPriceSell">Preço de Venda:</label>
          <input
            type="number"
            id="productPriceSell"
            onChange={ ({ target: { value } }) => setPriceS(value) }
            required
          />

          <label htmlFor="qtdS">Quantidade vendida:</label>
          <input
            type="text"
            id="qtdS"
            onChange={ ({ target: { value } }) => setQtdS(value) }
          />

          <label htmlFor="productImage">Imagem do produto:</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="productImage"
            onChange={ handlerImage }
            required
          />


          <button type="button" onClick={ handleClick }>Adicionar Produto</button>
      </form>
    </div>
    </div>
  )
}

export default EditProduct;