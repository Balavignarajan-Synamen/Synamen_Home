// ProductCard.js
import React from "react";

// ✅ Destructuring props
const ProductCard = ({
  id,
  name,
  price,
  category,
  handleAddtoCart,
  handleDelete,
  handleViewDetails,
  isInCart,
}) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>

      {/* ✅ Conditional Button based on isInCart */}
      {isInCart ? (
        <span style={{ color: "green", fontWeight: "bold" }}>✅ In Cart</span>
      ) : (
        <button
          onClick={() => handleAddtoCart(name)}
          className="bg-blue-500 px-2 py-2"
        >
          Add to Cart
        </button> 
      )}

      {/* 🗑️ Delete Product */}
      <button onClick={() => handleDelete(id)} className="bg-red-500 px-2 py-2">
        Delete
      </button>

      <button
        onClick={() => handleViewDetails({ id, name, price, category })}
        className="bg-green-500 px-2 py-2"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
