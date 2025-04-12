import React from "react";

const ProductItem = React.memo(({ product, onLike }) => {
  return (
    <div style={{ border: "1px solid #777", margin: "8px", padding: "8px" }}>
      <h3>{product.name}</h3>
      <button onClick={() => onLike(product.id)}>Like</button>
    </div>
  );
});

export default ProductItem;
