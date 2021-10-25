import {
  ADICIONAR_ENDERECO,
  ADICIONAR_NOME,
  REMOVER_ENDERECO,
  REMOVER_NOME,
} from './types';

export const AddNome = (novoNome) => {
  return {
    type: ADICIONAR_NOME,
    nome: novoNome,
  };
};

export const DelNome = () => {
  return {
    type: REMOVER_NOME,
  };
};

export const DelNomeAndAddNome = (novoNome) => {
  return (dispatch) => {
    dispatch(DelNome());

    setTimeout(() => {
      dispatch(AddNome(novoNome));
    }, 3000);
  };
};

export const AddEnd = (novoEndereco) => {
  return {
    type: ADICIONAR_ENDERECO,
    endereco: novoEndereco,
  };
};

export const DelEnd = () => {
  return {
    type: REMOVER_ENDERECO,
  };
};
