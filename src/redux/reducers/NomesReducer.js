import { AddEnd } from "../actions/NomesActions";

const initialState = {
  listaNomes: [],
  listaEnderecos: [],
};

// NomesReducer(stateAtual, objetoDaAction);
const NomesReducer = (state = initialState, action) => {
  console.log('State Atual', state);
  console.log('Action para Executar', action);

  let nomes = [...state.listaNomes];
  let enderecos = [...state.listaEnderecos];
  console.log('Nomes Atuais', nomes);

  switch (action.type) {
    case 'ADICIONAR_NOME':
      console.log('Vamos adicionar um nome', action.nome);
      nomes.push(action.nome);
      console.log('Nome foi adicionado', nomes);
      break;

    case AddEnd:
      console.log('Vamos adicionar um endereco', action.endereco);
      enderecos.push(action.endereco);
      console.log('Endereço foi adicionado', enderecos);
      break;

    case 'REMOVER_NOME':
      nomes.pop();
      break;

    default:
      break;
  }

  console.log('Novo State Alterado', {
    ...state,
    listaNomes: nomes,
    listaEnderecos: enderecos,
  });

  return {
    ...state,
    listaNomes: nomes,
    listaEnderecos: enderecos,
  };

  // Redux pega o return e salva no Store
  // Redux atualiza o useSelector de todas as telas
};

export default NomesReducer;
