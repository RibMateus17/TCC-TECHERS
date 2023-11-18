// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/products.css';
import { useEffect, useState } from 'react';
import { getAPI } from '../services/API';
import { deleteAPI } from '../services/API';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    getAPI("http://localhost:3002/product/getAll")
      .then(({ data }) => setProducts(data.message));
  }

  useEffect(() => {
    getProducts();
  }, [])
  
  const deleteProduct = async (id) => {
    try {
      await deleteAPI(`http://localhost:3002/product/delete/${id}`);
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="product-body">
      <div className="product-container">
        <h1>Lista de Produtos</h1>
        <Link to="/editProduct">
          <button type="button">+</button>
        </Link>
      </div>
      <div className="product-list">
        {
          products.map(({ id, name, priceS, priceB, qtd, qtdS, imageName}) => (
            <div className="product-card" key={ id }>
              <h3>{ name }</h3>
              <img src={ `http://localhost:3002/files-storage/${imageName}` } alt="" />
              <div className="product-info">
                <p>{ `Qtd: ${ qtd }` }</p>
                <p>{ `Lucro: ${ ((priceS - priceB) * qtdS - (priceB * qtd)) }` }</p>
              </div>
              <div className="product-info">
                <button>Editar</button>
                <button onClick={() => deleteProduct(id) }>Deletar</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products;