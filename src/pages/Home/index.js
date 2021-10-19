import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddNome } from '../../redux/actions/NomesActions';

const Home = () => {
  const [texto, setTexto] = useState('');

  const nomes = useSelector((state) => {
    return state.listaNomes;
  });

  const dispatch = useDispatch();

  const incluirNome = () => {
    dispatch({
      type: AddNome,
      endereco: texto,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="button" onClick={incluirNome}>
        Incluir Nome
      </button>

      {nomes.map((nome) => {
        return <p key={nome}>Nome: {nome}</p>;
      })}
    </div>
  );
};

export default Home;
