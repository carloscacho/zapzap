//Redux ponto central de controle de estados
import { types } from '../utils/types';
//Os estados inicias dos states 
const INITIAL_STATE = {
    contatoEmail: '',
    erroAdicionarContato: '',
    addCadastroSucesso: false,
    mensagem: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    
    switch (action.type) {
        case types.MODIFICA_EMAIL_CONTATO: 
            return { ...state, contatoEmail: action.payload };
        case types.ERRO_ADICIONAR_CONTATO: 
            return { ...state, erroAdicionarContato: action.payload };
        case types.ADICIONA_CONTATO_PARA_CONVERSA:
            return { ...state, addCadastroSucesso: true };
        case types.ADICIONAR_NOVO_CONTATO:
            return { ...state, addCadastroSucesso: false, contatoEmail: '' };
        case types.MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload };
        default:
            return state;
    }
};

