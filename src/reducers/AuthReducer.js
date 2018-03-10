//Redux ponto central de controle de estados
import { types } from '../utils/types';
//Os estados inicias dos states 
const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loadingLogin: false,
    loadingCadastro: false
};

//reducers para fazer as atulaizações nos States
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //modificadores de cadastro e login
        case types.MODIFICA_NOME: 
            return { ...state, nome: action.payload };
        case types.MODIFICA_EMAIL: 
            return { ...state, email: action.payload };
        case types.MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        //contrladores do Cadastro
        case types.CADASTRO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingCadastro: false };
        case types.CADASTRO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastro: false };
        case types.LOADING_LOGIN:
            return { ...state, loadingLogin: true };
        //controladores do login
        case types.LOGIN_ERRO:
            return { ...state, erroLogin: action.payload, senha: '', loadingLogin: false };
        case types.LOGIN_SUCESSO:
            return { ...state, ...INITIAL_STATE };
        case types.LOADING_CADASTRO:
            return { ...state, loadingCadastro: true };
        default:
            return state;
    }
};
