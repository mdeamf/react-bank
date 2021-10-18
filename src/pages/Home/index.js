import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddEnd } from '../../redux/actions/NomesActions';

const Home = () => {
  const [texto, setTexto] = useState('');

  // Leitura - useSelector
  // useSelector(função com o estado atual)
  const nomes = useSelector((state) => {
    return state.listaNomes;
  });
  // nomes = state.listaNomes

  // Escrita - useDispatch
  // useDispatch()
  const dispatch = useDispatch();
  // dispatch = () => {
  //   despachar uma alteração no estado
  // }

  const incluirNome = () => {
    console.log('Texto para incluir:', texto);

    // dispatch(action)
    // action.type = Alteração que você quer fazer (texto livre)
    // action...   = Campos livres

    dispatch({
      type: AddEnd,
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
