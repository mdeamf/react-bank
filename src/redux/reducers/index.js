import { combineReducers } from 'redux';
import login from './LoginReducer';
import nomes from './NomesReducer';
import pedidos from './PedidosReducer';
import loading from './LoadingReducer';

const reducers = combineReducers({
  login,
  nomes,
  pedidos,
  loading,
});

export default reducers;
