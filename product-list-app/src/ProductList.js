import React from "react";

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Phone", description: "The latest in smartphone design. Created by devs for devs", price: 1500 },
  { id: 3, name: "Mouse", description: "High speed mouse built for the best", price: 50 },
  { id: 4, name: "Monitor", description: "The latest 4K monitor for a cheap price!", price: 300 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h3>[ {product.name} ]</h3>
            <p>Description: {product.description}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
