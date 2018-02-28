//Arquivo de actions utilizado pelo Redux
//todas as ações realizam uma invocação no arquivo Reducer
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { types } from '../utils/types';

//função para modificação de nome para component cadastro
export const modificaNome = (texto) => ({
    type: types.MODIFICA_NOME,
    payload: texto
});

//função para modificação de email para o component cadastro e login
export const modificaEmail = (texto) => ({
    type: types.MODIFICA_EMAIL,
    payload: texto
});

//função para modificação de senha para o component cadastro e login
export const modificaSenha = (texto) => ({
    type: types.MODIFICA_SENHA,
    payload: texto
});

//função chamada ao clickar no botão de cadastro
export const cadastraUsuario = ({ nome, email, senha }) => dispatch => {
        //inicia o loading
        dispatch({ type: types.LOADING_CADASTRO });
        console.log(`usuario ${nome} realizandod tentativa de cadastrado com ${email}`);
        //reaalização de cadastro do email e senha no firebase Auth
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                console.log(`usuario Cadastrado ${user}`);
                const emailB64 = b64.encode(email);
                //savar nome do usuario no banco de dados
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => {
                        console.log(`Dados Salvos no Banco de dados ${value}`);
                        //caso tenha dado tudo certo o usuario é enviado para tela de boas vindas
                        cadastroUsuarioSucesso(dispatch);
                    });
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
            //caso tenha dado erro esse erro é escrito na tela para o usuario
    };

//metodo para cadastro realizado com sucesso
const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({
        type: types.CADASTRO_SUCESSO,
    });
    Actions.BoasVindas();
};

// metodo para informar o erro ocorrido no cadastro
const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({
        type: types.CADASTRO_ERRO,
        payload: erro.message
    });
};

//metodo para realizar cadastro dos usuarios, chamado como uma acão do redux
export const autenticaUsuario = ({ email, senha }) => dispatch => {
    //inicia o loading
    dispatch({ type: types.LOADING_LOGIN });
    console.log(`usuario ${email} tentando realizar o login`);
    //realiza a verificação do email e senha no firebase
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(value => {
        //caso tenha dado tudo certo o reazado a chamada da view principal
        console.log(`Usuario Realizou login ${value}`);
        loginSucesso(dispatch);
    })
    .catch(erro => {
        //caso tenho ocorrido um erro é informado na tela do app para o usuario
        console.log(`erro ao realizar login ${erro}`);
        loginErro(erro, dispatch);
    });
};

//metodo que realiza a chamada de sucesso do login
const loginSucesso = (dispatch) => {
    dispatch({
        type: types.LOGIN_SUCESSO
    });
    Actions.PrincipaView();
};

//metodo que realiza a chamada de erro do login
const loginErro = (erro, dispatch) => {
    dispatch({
        type: types.LOGIN_ERRO,
        payload: erro.message
    });
};
