// ProductList.js
import React from "react";
import ProductCard from "../Props5Products/ProductCard";

// Inside ProductList.js
const products = [
  { id: 1, name: "Laptop", price: 59999, category: "Electronics", isInCart: false },
  { id: 2, name: "Headphones", price: 1999, category: "Accessories", isInCart: true },
  { id: 3, name: "Coffee Mug", price: 299, category: "Home & Kitchen", isInCart: false }
];

const ProductList = () => {
  const handleAddtoCart = (productNames) => {
    alert(`🛒 ${productNames} added to cart!`);
  };

  const handleDelete = (productId) => {
    alert(`🗑️ Product with ID ${productId} deleted!`);
  };

  const handleViewDetails = (product) => {
    alert(
      `id: ${product.id}, Viewing : ${product.name}, Price : ${product.price}, Category : ${product.category}`
    );
  };

  return (
    <div>
      <h1>🛍️ My Products</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          handleAddtoCart={handleAddtoCart}
          handleDelete={handleDelete}
          handleViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductList;
