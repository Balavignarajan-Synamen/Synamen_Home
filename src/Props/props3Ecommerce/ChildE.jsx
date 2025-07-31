// ChildE.js
import React from 'react';

// ✅ We are using destructuring directly in the function parameters
const ChildE = ({ name, description, price }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      {/* Showing the product name */}
      <h2>{name}</h2>

      {/* Showing the product description */}
      <p>{description}</p>

      {/* Showing the product price */}
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default ChildE;
