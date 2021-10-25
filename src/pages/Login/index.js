import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const nomes = useSelector((state) => state.listaNomes);
  return (
    <div>
      {nomes.map((nome) => {
        return <p>Nome no Login: {nome}</p>;
      })}
    </div>
  );
};

export default Login;
