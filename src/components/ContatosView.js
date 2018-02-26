import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

//Styles
import FormsStyles from '../styles/FormsStyles';

//redux
//import { connect } from 'react-redux';
const logo = require('../../assets/imagens/logo.png');


const ContatosView = () => (
    <View style={FormsStyles.main}>
        <View style={FormsStyles.containerLogo}>
            <Text style={FormsStyles.title}> Em cosntrução </Text>
            <Image
                source={logo}
                style={FormsStyles.img}
            />
        </View>
    </View>
);

export default ContatosView;
