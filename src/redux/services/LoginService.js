import axios from 'axios';

export const doLoginJWT = async (usuario, senha) => {
  try {
    const body = {
      username: usuario,
      password: senha,
    };
    const result = await axios.post('http://localhost:3030/login', body);
    const { token } = result.data;
    return token;
  } catch (err) {
    return null;
  }
};
