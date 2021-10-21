import { combineReducers } from 'redux';
import login from './LoginReducer';
import nomes from './NomesReducer';
import pedidos from './PedidosReducer';

const reducers = combineReducers({
  login,
  nomes,
  pedidos,
});

export default reducers;
