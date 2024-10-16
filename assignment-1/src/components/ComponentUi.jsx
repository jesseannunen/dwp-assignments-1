import React, { useState } from "react";
import OrderForm from "./OrderForm";
import OrderInfo from "./OrderInfo";
import Header from "./Header";
import productImage from "../images/cpu-1.jpg";


function ComponentUI() {

    const products = [
        { name: "AMD Ryzen 5 3600", price: 245 },
        { name: "AMD Ryzen 7 5800 X3D", price: 319 },
        { name: "Intel i9-14900K ", price: 500 },

    ];

    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [quantity, setQuantity] = useState(1);

    const total = selectedProduct.price * quantity;


    return (
        <div>
            <div>
                <Header image={productImage} title="Welcome to the product page!" />
            </div>
            <OrderForm
                products={products}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <OrderInfo selectedProduct={selectedProduct} quantity={quantity} total={total} />
        </div >
    );
}

export default ComponentUI;