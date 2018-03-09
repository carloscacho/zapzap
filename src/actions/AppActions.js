//Arquivo de actions utilizado pelo Redux
//todas as ações realizam uma invocação no arquivo Reducer
import firebase from 'firebase';
import _ from 'lodash';
//import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { types } from '../utils/types';

// //função para modificação de nome para component cadastro
// export const modificaNome = (texto) => ({
//     type: types.MODIFICA_NOME,
//     payload: texto
// });

//função para modificação de email para o component cadastro e login
export const modificaEmailContato = texto => ({
    type: types.MODIFICA_EMAIL_CONTATO,
    payload: texto
});

//função para adicão de um contato para as conversas
export const adicionaContato = contatoEmail => dispatch => {
    console.log(contatoEmail);
    //conversão do contatoEmail para base 64 para verificar se usuario 
    //está cadastrado
    //contatoEmail do usuario que queremos cadastrar como contato para conversa
    const contatoEmailB64 = b64.encode(contatoEmail);

    //verifica se o contato existe no Firebase
    firebase.database().ref(`/contatos/${contatoEmailB64}`)
    .once('value') //cnce realiza uma verificação uma vez só 
    .then(snapshot => {
        //verificação da existencia do usuario 
        if (snapshot.val()) {
            //extrando os dados do usuario contindos no bd com lodash
            const dadosUsuario = _.first(_.values(snapshot.val()));
            console.log('usuario existe e será adicionado');

            //email do usuario logado no aplicativo
            const { currentUser } = firebase.auth();
            console.log(`o email do usuario corrente ${currentUser.email}`);
            
            const emailUserB64 = b64.encode(currentUser.email);
            console.log(`o email b64 do usuario corrente ${emailUserB64}`);

            firebase.database().ref(`/usuario_contatos/${emailUserB64}`)
            .push({ 
                email: contatoEmail,
                nome: dadosUsuario.nome
            })
            .then(() => {
                console.log('Sucesso');
                cadastraEmailComSucesso(dispatch);
            })
            .catch(erro => {
                console.log(erro);
                erroCadastraEmailContato(erro.message, dispatch);
            });

            //cadastraEmailComSucesso(dispatch);
        } else {
            console.log('usuario não existe e não será adicionado');
            erroCadastraEmailContato('usuario não existe e não será adicionado', dispatch);
        }
    });
};

const cadastraEmailComSucesso = (dispatch) => {
    dispatch({
            type: types.ADICIONA_CONTATO_PARA_CONVERSA
    });
};


const erroCadastraEmailContato = (erro, dispatch) => {
    dispatch({
            type: types.ADICIONA_CONTATO_PARA_CONVERSA,
            payload: erro
    });
};


export const adicionaNovoContato = () => ({
    type: types.ADICIONAR_NOVO_CONTATO,
});

//buscar contatos adicionados a lista do usuario
export const contatosUsuarioFetch = () => {
    //adiquire o valor do usuario logado
    const { currentUser } = firebase.auth();

    //dá inicio a busca dos contatos cadastrado
    return (dispatch) => {
        //converte o email do usuario para base 64
        const emailUsuarioB64 = b64.encode(currentUser.email);

        //busca se há um contatos cadastrados para usuario
        firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
        .on('value', snapshot => {
            //para essa informação para um reducer
            dispatch({ type: types.UP_LISTA_CONTATOS_USUARIO, payload: snapshot.val() });
        });
    };
};

export const modificaMensagem = mensagem => (
    {
        type: types.MODIFICA_MENSAGEM,
        payload: mensagem
    }
);

export const enviaMensagem = (mensagem, contatoNome, contatoEmail) => dispatch => {
    //dados do contato (contatoNome, contatoEmail)
    //estão sendo recebidos por paramento

    //dados do usuario
    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;

    //conversão para base 64
    const usuarioEmailB64 = b64.encode(usuarioEmail);
    const contatoEmailB64 = b64.encode(contatoEmail);

    //primeiro registro a messagem para o usuario logado
    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
    .push({ mensagem, tipo: 'e' }) //tipo e define envio
    .then(() => {
        //após o envio registra-se a messagem para o contato
        firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
        .push({ mensagem, tipo: 'r' }) //tipo de messagem recebido
        .then(() => {
            //ao final dos dois registros e acionado o dispatch
            dispatch({
                type: types.SEND_MENSAGENS_SUCESSO
            });
        });
    })
    //iniciar o salvamento dos cabeçarios das conversas
    .then(() => {
        //salvar o cabeçario das conversas do usuario autenticado
        firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
        .set({
            nome: contatoNome, 
            email: contatoEmail,
            ultimaMensagem: mensagem,
            tipo: 'e' 
        });
    })
    //para o contato
    .then(() => {
        //1)capturar o nome do usuario primeiro ??
        //verifica se o contato existe no Firebase
        firebase.database().ref(`/contatos/${usuarioEmailB64}`)
        .once('value')
        .then(snapshot => {
            //extrando os dados do usuario contindos no bd com lodash
            const dadosUsuario = _.first(_.values(snapshot.val()));

            //2)salvar o cabeçario  das conversas do contato 
            firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
            .set({ 
                nome: dadosUsuario.nome,
                email: usuarioEmail,
                ultimaMensagem: mensagem,
                tipo: 'r' });
            });
    });
};

export const conversaUsuarioFetch = contatoEmail => dispatch => {
     //dados do usuario
     const { currentUser } = firebase.auth();
     const usuarioEmail = currentUser.email;
 
     //conversão para base 64
     const usuarioEmailB64 = b64.encode(usuarioEmail);
     const contatoEmailB64 = b64.encode(contatoEmail);

    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
    .on('value', snapshot => {
        dispatch({ type: types.UP_LISTA_CONVERSA_USUARIO, payload: snapshot.val() });
   });
};

export const conversasUsuarioFetch = () => {
    //adiquire o valor do usuario logado
    const { currentUser } = firebase.auth();

    //dá inicio a busca dos contatos cadastrado
    return (dispatch) => {
        //converte o email do usuario para base 64
        const emailUsuarioB64 = b64.encode(currentUser.email);

        //busca se há um contatos cadastrados para usuario
        firebase.database().ref(`/usuario_conversas/${emailUsuarioB64}`)
        .on('value', snapshot => {
            //para essa informação para um reducer
            dispatch({ type: types.UP_LISTA_CONVERSAS_USUARIO, payload: snapshot.val() });
        });
    };
};
