import React from 'react';
import './style.css';

import { useDispatch, useSelector } from 'react-redux';
import { FazerLogin } from '../../redux/actions/LoginActions';
import { ShowLoading, HideLoading } from '../../redux/actions/LoadingActions';

const Home = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.login);
  const { pedido } = useSelector((state) => state.pedidos);

  const fazerLogin = () => {
    dispatch(FazerLogin('admin', 'admin'));
  };

  const consultarPedido = () => {
    // dispatch(ConsultarPedidos());
    dispatch(ShowLoading());
    setTimeout(() => {
      dispatch(HideLoading());
    }, 3000);
  };

  const lista = [1, 2, 3, 4];
  const listaMap = lista.map((l) => {
    return <p>{l}</p>;
  });
  console.log(listaMap);

  return (
    <div className="Home">
      <button type="button" onClick={fazerLogin}>
        Fazer Login
      </button>
      Token JWT: {jwt}
      <button type="button" onClick={consultarPedido}>
        Obter Pedido
      </button>
      Pedido: {JSON.stringify(pedido)}
      {lista.map((l) => {
        return <p>{l}</p>;
      })}
    </div>
  );
};

export default Home;
