import { AddEnd, AddNome, DelEnd, DelNome } from '../actions/NomesActions';

const initialState = {
  password: '',
  listaNomes: [],
  listaEnderecos: [],
};

const NomesReducer = (state = initialState, action) => {
  let nomes = [...state.listaNomes];
  let enderecos = [...state.listaEnderecos];

  switch (action.type) {
    case AddNome:
      nomes.push(action.nome);
      break;

    case AddEnd:
      enderecos.push(action.endereco);
      break;

    case DelNome:
      nomes.pop();
      break;

    case DelEnd:
      enderecos.pop();
      break;

    default:
      break;
  }

  return {
    ...state,
    listaNomes: nomes,
    listaEnderecos: enderecos,
  };
};

export default NomesReducer;
