import { LOGIN_LOGAR } from '../actions/types';

const initialState = {
  jwt: '',
};

const LoginReducer = (state = initialState, action) => {
  let jwt = state.jwt;

  switch (action.type) {
    case LOGIN_LOGAR:
      jwt = action.jwt;
      break;

    default:
      return state;
  }

  return {
    ...state,
    jwt,
  };
};

export default LoginReducer;
