import { doLoginJWT } from '../services/LoginService';
import { getPedidos } from '../services/PedidosService';
import { PEDIDOS_CONSULTAR } from './types';

export const ConsultarPedidos = () => {
  return async (dispatch) => {
    const token = await doLoginJWT('admin', 'admin');
    const pedido = await getPedidos(token);
    console.log('PEDIDO', pedido);
    dispatch(SalvarPedidos(pedido));
  };
};

export const SalvarPedidos = (pedido) => {
  return {
    type: PEDIDOS_CONSULTAR,
    pedido: pedido,
  };
};
