import { types } from '../utils/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loadingLogin: false,
    loadingCadastro: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.MODIFICA_NOME: 
            return { ...state, nome: action.payload };
        case types.MODIFICA_EMAIL: 
            return { ...state, email: action.payload };
        case types.MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        case types.CADASTRO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingCadastro: false };
        case types.CADASTRO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastro: false };
        case types.LOGIN_ERRO:
            return { ...state, erroLogin: action.payload, senha: '', loadingLogin: false };
        case types.LOGIN_SUCESSO:
            return { ...state, email: '', senha: '', loadingLogin: false };
        case types.LOADING_LOGIN:
            return { ...state, loadingLogin: true };
        case types.LOADING_CADASTRO:
            return { ...state, loadingCadastro: true };
        default:
            return state;
    }
};
