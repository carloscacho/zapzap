import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modificaNome = (texto) => ({
    type: 'modifica_nome',
    payload: texto
});

export const modificaEmail = (texto) => ({
    type: 'modifica_email',
    payload: texto
});

export const modificaSenha = (texto) => ({
    type: 'modifica_senha',
    payload: texto
});

export const cadastraUsuario = ({ nome, email, senha }) => dispatch => {
        console.log(nome);
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
        type: 'cadastro_sucesso',
    });
    Actions.BoasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({
        type: 'erro_cadastro',
        payload: erro.message
    });
};

export const autenticaUsuario = ({ email, senha }) => dispatch => {
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
        type: 'login_sucesso'
    });
    Actions.ContatosView();
};

const loginErro = (erro, dispatch) => {
    dispatch({
        type: 'login_erro',
        payload: erro.message
    });
};
