import { doLoginJWT } from '../services/LoginService';
import { LOGIN_LOGAR } from './types';

export const FazerLogin = (usuario, senha) => {
  return async (dispatch) => {
    const token = await doLoginJWT(usuario, senha);
    dispatch(FazerLoginSalvarJWT(token));
  };
};

export const FazerLoginSalvarJWT = (jwt) => {
  return {
    type: LOGIN_LOGAR,
    jwt: jwt,
  };
};
