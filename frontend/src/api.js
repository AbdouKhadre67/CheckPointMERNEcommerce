import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const fetchProductById = async (id) => {
  const { data } = await axios.get(`/api/products/${id}`);
  return data;
};
