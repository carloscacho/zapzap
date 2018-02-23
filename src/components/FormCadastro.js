import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground
} from 'react-native';

import { connect } from 'react-redux';

//Styles
import FormsStyles from '../styles/FormsStyles';

//actions
import { modificaNome, modificaEmail, modificaSenha } from '../actions/AuthActions';

//img
const back = require('../../assets/imagens/fundo.png');

const FormCadastro = (props) => (
<ImageBackground style={FormsStyles.main} source={back}>
    <View style={FormsStyles.main}>
        <View style={FormsStyles.containerTitle}>
            <Text style={FormsStyles.title}>
                Zap Zap
            </Text>
            <Text style={FormsStyles.texts}>
                Cadastro
            </Text>
        </View>
        <View style={FormsStyles.containers}>
            <TextInput 
                placeholder='Nome'
                style={FormsStyles.inputs}
                placeholderTextColor='#fff'
                value={props.nome}
                onChangeText={(texto) => props.modificaNome(texto)}
            />
            <TextInput 
                placeholder='E-mail'
                style={FormsStyles.inputs}
                placeholderTextColor='#fff'
                value={props.email}
                onChangeText={(texto) => props.modificaEmail(texto)}
            />
            <TextInput 
                placeholder='Senha'
                style={FormsStyles.inputs}
                value={props.senha}
                secureTextEntry
                placeholderTextColor='#fff'
                onChangeText={(texto) => props.modificaSenha(texto)}
            />
            
        </View>
        
        <View style={FormsStyles.containers}>
            <Button
                title='Cadastrar'
                onPress={() => false}
                color='#115E54'
            />
        </View>
    </View>
</ImageBackground>
);

const mapStateToProps = state => ( 
    { 
        nome: state.AuthRdc.nome,
        email: state.AuthRdc.email,
        senha: state.AuthRdc.senha
     }); 

export default connect(mapStateToProps, 
    { modificaNome, modificaEmail, modificaSenha })(FormCadastro);

