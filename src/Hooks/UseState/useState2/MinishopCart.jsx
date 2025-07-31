import React, { useState } from "react";

const MiniCart = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleAddToCart = () => {
    if (productName === "" || quantity === 0) {
      alert("Please enter Name and Quantity");
      return;
    }

    const newItem = {
      name: productName,
      quantity: quantity,
    };

    setCart([...cart, newItem]);

    setProductName("");
    setQuantity(0);
  };

  return (
    <div>
      <h1>🛒 Mini Shopping Cart</h1>

      <input
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <p>Product Name: {productName}</p>

      <input
        type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <p>Quantity: {quantity}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
      <h2>🛍️ Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}
          
          >
            <input type="radio"
            
            onClick={()=> setSelectedProduct(item)}
            />
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Selected Product</h2>
        {selectedProduct.name ? (
            <p>
                Name : {selectedProduct.name} <br></br>
                Quanitiy : {selectedProduct.quantity}
            </p>
           ) : (
             <p>No product Selected</p>
            
        )}
    </div>
  );
};

export default MiniCart;
