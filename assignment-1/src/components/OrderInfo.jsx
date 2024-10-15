import React from "react";

function OrderInfo({ selectedProduct, quantity, total }) {

    return (
        
        <div>

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
    )
}

export default OrderInfo;