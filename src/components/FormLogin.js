import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//Styles
import FormsStyles from '../styles/FormsStyles';

//actions
import { modificaEmail, modificaSenha } from '../actions/AuthActions';

//img
const back = require('../../assets/imagens/fundo.png');

const FormLogin = (props) => (
<ImageBackground style={FormsStyles.main} source={back}>
    <View style={FormsStyles.main}>
        <View style={FormsStyles.containerTitle}>
            <Text style={FormsStyles.title}>
                Zap Zap
            </Text>
        </View>

        <View style={FormsStyles.containers}>
            <TextInput 
                placeholder='Email'
                style={FormsStyles.inputs}
                value={props.email}
                placeholderTextColor='#fff'
                onChangeText={(texto) => props.modificaEmail(texto)}
            />
            <TextInput 
                placeholder='Senha'
                secureTextEntry
                style={FormsStyles.inputs}
                value={props.senha}
                placeholderTextColor='#fff'
                onChangeText={(texto) => props.modificaSenha(texto)}
            />
            <TouchableHighlight
                onPress={() => Actions.FormCadastro()}
            >
                <Text style={FormsStyles.texts}> Ainda não tem cadastro? Cadastre-se </Text>
            </TouchableHighlight>
        </View>

        <View style={FormsStyles.containers}>
            
            <Button
                title='Acessar'
                onPress={() => false}
                color='#115E54'
            />
        </View>
    </View>
</ImageBackground>
);

const mapStateToProps = state => ( 
{ 
    email: state.AuthRdc.email,
    senha: state.AuthRdc.senha
});


export default connect(mapStateToProps, { modificaEmail, modificaSenha })(FormLogin);

