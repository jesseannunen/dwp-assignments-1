import React from "react";

function OrderForm({ products, selectedProduct, setSelectedProduct, quantity, setQuantity }) {

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>

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
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    style={{ width: "40px", textAlign: "center" }}
                />
                <button onClick={increaseQuantity}>+</button>
            </div>
        </div>
    );

}

export default OrderForm;
