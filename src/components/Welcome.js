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


const Welcome = () => (
    <View style={FormsStyles.main}>
        <View style={FormsStyles.containerLogo}>
            <Text style={FormsStyles.title}> Seja Bem Vindo </Text>
            <Image
                source={logo}
                style={FormsStyles.img}
            />
        </View>

        <View style={FormsStyles.containerButton}>
            <Button
                
                title='Entrar'
                onPress={() => Actions.FormLogin()}
                
            />
        </View>
    </View>
);

export default Welcome;
