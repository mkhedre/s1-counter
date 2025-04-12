import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "new item" },
  ]);

  const handleLike = useCallback((id) => {
    setLikedProducts((prev) => [...prev, id]);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PRoducts</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="products list" />
      </Helmet>
      <h2>Product List</h2>
      <p>Liked: {likedProducts.join(", ")}</p>
      {/* <button onClick={renameProduct}>Rename Product #1</button> */}
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} onLike={handleLike} />
      ))}
    </div>
  );
};

export default ProductList;
