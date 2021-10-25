import { PEDIDOS_CONSULTAR } from '../actions/types';

const initialState = {
  pedido: {},
};

const PedidosReducer = (state = initialState, action) => {
  let pedido = { ...state.pedido };

  switch (action.type) {
    case PEDIDOS_CONSULTAR:
      pedido = action.pedido;
      break;

    default:
      return state;
  }

  return {
    ...state,
    pedido,
  };
};

export default PedidosReducer;
