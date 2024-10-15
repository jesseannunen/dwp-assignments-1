import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const products = [
    { name: "AMD Ryzen 5 3600", price: 245 },
    { name: "AMD Ryzen 7 5800 X3D", price: 319 },
    { name: "Intel i9-14900K ", price: 500 },

  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const total = selectedProduct.price * quantity;



  return (
  <div>
    <div style={{ textAlign: "center" }}>
      <h1> Welcome to the product page!</h1>

      <h3>Select product</h3>
      <div>
        <label>Product: </label>
        <select
          value={selectedProduct.name}
          onChange={(e) =>
            setSelectedProduct(products.find((p) => p.name === e.target.value))
          }
        >
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </div>
      </div>

      <div>
        <label>Quantity: </label>
        <button onClick={decreaseQuantity}>-</button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value))) }
          style= {{ width: "40px", textAlign: "center"}}
          />
          <button onClick={increaseQuantity}>+</button>
      </div>

      <h4>Order info</h4>

      <table border="1" style={{ margin: "0 auto"}}>
        <thead>
          <tr>
            <th>Products</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedProduct.name}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>


      </div>  
      );
}

      export default App
