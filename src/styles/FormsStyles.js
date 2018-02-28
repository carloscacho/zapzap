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
    containerButton: {
        flex: 1,
        padding: 50,
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
        color: '#fff'
    },
    texts: {
        fontSize: 20,
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
    }
    
});


export default FormsStyles;
