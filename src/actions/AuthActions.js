import firebase from 'firebase';

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
            .then(user => cadastroUsuarioSucesso(user, dispatch))
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    };

const cadastroUsuarioSucesso = (user, dispatch) => {
    dispatch({
        type: 'sucesso',
        payload: user
    });
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({
        type: 'erro_cadastro',
        payload: erro.code
    });
};
