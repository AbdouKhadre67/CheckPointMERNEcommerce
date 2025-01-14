import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams(); // ID du produit depuis l'URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductPage;
