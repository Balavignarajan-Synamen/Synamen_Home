// ParentE.js
import React from 'react';
import ChildE from './ChildE'; // 👉 Importing the child component

const ParentE = () => {
  // 📦 Sample product data
  const products = [
    {
      name: "iPhone 15",
      description: "Apple smartphone with A16 chip",
      price: 89999
    },
    {
      name: "Samsung Galaxy S24",
      description: "Flagship Android phone",
      price: 79999
    },
    {
      name: "Redmi Note 13",
      description: "Budget phone with good features",
      price: 14999
    }
  ];

  return (
    <div>
      <h1>🛍️ Product List</h1>

      {/* 🔁 Loop through the product array and send data via props */}
      {products.map((product, index) => (
        <ChildE
          key={index} // 🔑 Unique key for each component in a list
          name={product.name} // 📤 Sending name as prop
          description={product.description} // 📤 Sending description
          price={product.price} // 📤 Sending price
        />
      ))}
    </div>
  );
};

export default ParentE;
