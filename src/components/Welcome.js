import React from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
//Styles
import FormsStyles from '../styles/FormsStyles';

//redux
//import { connect } from 'react-redux';
const logo = require('../../assets/imagens/logo.png');

//componete de boas vindas caso o usuario realize o cadastro sem erros 
const Welcome = () => (
    <View style={FormsStyles.main}>
        <View style={FormsStyles.containerWelcome}>
            <Text style={FormsStyles.title}> Seja Bem Vindo </Text>
            <Image
                source={logo}
                style={FormsStyles.img}
            />
        </View>

        <View style={FormsStyles.containerButton}>
            {/* botão para enviar o usuaio para tela de login, apos o cadastro */}
            <Button
                title='Entrar'
                onPress={() => Actions.FormLogin()}
            />
        </View>
    </View>
);

export default Welcome;
