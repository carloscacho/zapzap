//node modules
import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

//firebase
import firebase from 'firebase';

import { connect } from 'react-redux';
import { adicionaNovoContato } from '../../actions/AppActions';

//styles
import styles from '../../styles/FormsStyles';


//image de icone de Add Contato
const addContatoImg = require('../../../assets/imagens/adicionar-contato.png');

//parte supeior contedo o TabBar da cena Principal contendo: 
//Um titulo com nome do Aplicativo
//Dois botões para Add Contato e para realizar o logout
const TabBarMenu = (props) => (
    <View style={styles.viewBarAll}>
        <StatusBar backgroundColor='#114D44' />
        <View style={styles.tabBarRow}>
        <View style={styles.viewBar}> 
            {/* titulo do aplicativo */}
            <Text style={styles.barText}> Zap Zap </Text>
        </View>
        
        <View style={styles.btnTabBar}>
            <View style={styles.viewAdd}>
                {/* botão com uma imagem para add contato */}
                <TouchableHighlight
                    onPress={() => {
                        Actions.AddContato();
                        props.adicionaNovoContato();
                    }}
                    underlayColor='#114D44'
                >
                <Image
                    source={addContatoImg}
                />
                </TouchableHighlight>
            </View>
            {/* Botão Sair para realiza logout no app */}
            <View style={styles.viewSair}>
            <TouchableHighlight
                    onPress={() => {
                        firebase.auth().signOut()
                        .then(
                            Actions.pop()
                        );
                    }}
                    underlayColor='#114D44'
            >
                <Text style={styles.btnSair}>Sair</Text>
            </TouchableHighlight>
            </View>
        </View>
        </View>
        {/* render do tabs Conversa e Contatos */}
        <TabBar {...props} style={styles.tabBar} />
    </View>  
);

export default connect(null, { adicionaNovoContato })(TabBarMenu);
