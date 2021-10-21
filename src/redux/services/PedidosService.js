import axios from 'axios';

export const getPedidos = async (jwt) => {
  try {
    const result = await axios.get('http://localhost:3030/orders/1', {
      headers: {
        Authorization: jwt,
      },
    });
    console.log(result.data);
    return result.data;
  } catch (err) {
    return null;
  }
};
