//Todos os stylos estaõ descritos nesse arquivo como se fosse um CSS =D

import {
  StyleSheet
} from 'react-native';


const FormsStyles = StyleSheet.create({
    //Utilizados nas paginas de formulario
    main: {
        flex: 1,
        backgroundColor: '#115E54aa'
    },
    containerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerWelcome: {
        flex: 6,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flex: 4,
        padding: 20,
    },
    containers: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    inputs: {
        fontSize: 20,
        height: 45,
    },
    texts: {
        fontSize: 18,
        color: '#fff',
    },
    textErro: {
        fontSize: 20,
        color: 'red'
    },
    // utilizados nos elementos do componente principal
    img: {
        width: 220,
        height: 220
    },
    navBar: {
        backgroundColor: '#115E54' 
    },
    navTitle: {
        color: '#fff'
    },
    barText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 20
    },
    viewBar: {
        height: 50,
        justifyContent: 'center',
        
    },
    tabBar: {
        backgroundColor: '#115E54',
        elevation: 0
    },
    viewBarAll: {
        backgroundColor: '#115E54',
        elevation: 4,
        marginBottom: 6,
        
    },
    btnTabBar: {
        flexDirection: 'row',
        marginRight: 20,
        justifyContent: 'center'

    },
    tabBarRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewAdd: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewSair: {
        justifyContent: 'center'
    },
    btnSair: {
        fontSize: 22,
        color: '#fff',
        justifyContent: 'center',
        marginLeft: 20
    },
    //add contato
    containerAdd: {
        flex: 1,
        justifyContent: 'center'
    },
    listViewData: {
        flex: 1,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#CCC'
    },
    listTextName: {
        fontSize: 25
    },
    listTextEmail: {
        fontSize: 20
    },
    //conversa view
    mainConversa: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#eee4dc',
        padding: 10
    },
    chatView: {
        flex: 1,
        paddingBottom: 20
    },
    textBoxView: {
        flexDirection: 'row',
        height: 60
    },
    textBox: {
        flex: 4,
        backgroundColor: '#fff',
        fontSize: 18
    },
    btnSend: {
        flex: 1
    },
    msgTipoE: {
        alignItems: 'flex-end',
        marginLeft: 40,
        marginBottom: 5,
        marginTop: 5
    },
    msgTextE: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        backgroundColor: '#dbf5b4',
        elevation: 1
    },
    msgTipoR: {
        alignItems: 'flex-start',
        marginRight: 40,
        marginBottom: 5,
        marginTop: 5
    },
    msgTextR: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        backgroundColor: '#f7f7f7',
        elevation: 1
    },

});


export default FormsStyles;
