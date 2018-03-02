//Redux ponto central de controle de estados
import { types } from '../utils/types';
//Os estados inicias dos states 
const INITIAL_STATE = {
    contatoEmail: '',
    erroAdicionarContato: '',
    addCadastroSucesso: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.MODIFICA_EMAIL_CONTATO: 
            return { ...state, contatoEmail: action.payload };
        case types.ERRO_ADICIONAR_CONTATO: 
            return { ...state, erroAdicionarContato: action.payload };
        case types.ADICIONA_CONTATO_PARA_CONVERSA:
            return { ...state, addCadastroSucesso: true };
        case types.ADICIONAR_NOVO_CONTATO:
            return { ...state, addCadastroSucesso: false, contatoEmail: '' };
        default:
            return state;
    }
};

