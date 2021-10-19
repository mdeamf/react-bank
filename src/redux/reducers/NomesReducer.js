import {
  ADICIONAR_ENDERECO,
  ADICIONAR_NOME,
  REMOVER_ENDERECO,
  REMOVER_NOME,
} from '../actions/types';

const initialState = {
  password: '',
  listaNomes: [],
  listaEnderecos: [],
};

const NomesReducer = (state = initialState, action) => {
  console.log('Iniciando Reducer...');
  console.log('State Atual', state);
  console.log('Action', action);

  let nomes = [...state.listaNomes];
  let enderecos = [...state.listaEnderecos];

  switch (action.type) {
    case ADICIONAR_NOME:
      nomes.push(action.nome);
      break;

    case ADICIONAR_ENDERECO:
      enderecos.push(action.endereco);
      break;

    case REMOVER_NOME:
      nomes.pop();
      break;

    case REMOVER_ENDERECO:
      enderecos.pop();
      break;

    default:
      return state;
  }

  console.log('Novo State', {
    ...state,
    listaNomes: nomes,
    listaEnderecos: enderecos,
  });

  return {
    ...state,
    listaNomes: nomes,
    listaEnderecos: enderecos,
  };
};

export default NomesReducer;
