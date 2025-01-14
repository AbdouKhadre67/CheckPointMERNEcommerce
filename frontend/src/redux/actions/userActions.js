import axios from 'axios';

export const registerUser = userData => async dispatch => {
  try {
    await axios.post('http://localhost:5000/api/auth/register', userData);
    dispatch({ type: 'REGISTER_USER', payload: userData });
  } catch (error) {
    console.error(error);
  }
};
