import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { types } from '../utils/types';

export const modificaNome = (texto) => ({
    type: types.MODIFICA_NOME,
    payload: texto
});

export const modificaEmail = (texto) => ({
    type: types.MODIFICA_EMAIL,
    payload: texto
});

export const modificaSenha = (texto) => ({
    type: types.MODIFICA_SENHA,
    payload: texto
});

export const cadastraUsuario = ({ nome, email, senha }) => dispatch => {
        //inicia o loading
        dispatch({ type: types.LOADING_CADASTRO });
        console.log(`usuario ${nome} realizandod tentativa de cadastrado com ${email}`);
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                console.log(`usuario Cadastrado ${user}`);
                const emailB64 = b64.encode(email);
                //savar nome no banco de dados
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => {
                        console.log(`Dados Salvos no Banco de dados ${value}`);
                        cadastroUsuarioSucesso(dispatch);
                    });
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    };

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({
        type: types.CADASTRO_SUCESSO,
    });
    Actions.BoasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({
        type: types.CADASTRO_ERRO,
        payload: erro.message
    });
};

export const autenticaUsuario = ({ email, senha }) => dispatch => {
    dispatch({ type: types.LOADING_LOGIN });
    console.log(`usuario ${email} tentando realizar o login`);
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(value => {
        console.log(`Usuario Realizou login ${value}`);
        loginSucesso(dispatch);
    })
    .catch(erro => {
        console.log(`erro ao realizar login ${erro}`);
        loginErro(erro, dispatch);
    });
};


const loginSucesso = (dispatch) => {
    dispatch({
        type: types.LOGIN_SUCESSO
    });
    Actions.PrincipaView();
};

const loginErro = (erro, dispatch) => {
    dispatch({
        type: types.LOGIN_ERRO,
        payload: erro.message
    });
};
