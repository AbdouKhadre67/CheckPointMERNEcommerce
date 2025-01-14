import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
