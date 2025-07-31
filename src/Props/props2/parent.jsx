import React from "react";

function MyProducts({ name, description, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
MyProducts.defaultProps = {
  name: "temitope",
  description: "i like this feature",
  price: 500,
};

export default MyProducts;
