import { LOADING_EXIBIR, LOADING_OCULTAR } from '../actions/types';

const initialState = {
  showLoading: false,
};

const LoginReducer = (state = initialState, action) => {
  let show = false;

  switch (action.type) {
    case LOADING_EXIBIR:
      show = true;
      break;

    case LOADING_OCULTAR:
      show = false;
      break;

    default:
      return state;
  }

  return {
    ...state,
    showLoading: show,
  };
};

export default LoginReducer;
