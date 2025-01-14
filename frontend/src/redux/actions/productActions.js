import axios from 'axios';

export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/products');
    dispatch({ type: 'FETCH_PRODUCTS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
