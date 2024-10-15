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

  const [selectedProduct, setSelectedproduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuanitity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const total = selectedProduct.price * quantity;



  return (
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
      )
}

      export default App
