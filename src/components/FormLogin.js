import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//Styles
import FormsStyles from '../styles/FormsStyles';

//actions
import { 
    modificaEmail,
    modificaSenha,
    autenticaUsuario
} from '../actions/AuthActions';

//img
const back = require('../../assets/imagens/fundo.png');

class FormLogin extends Component {
    internalAutenticaUsuario() {
        const { email, senha } = this.props;

        this.props.autenticaUsuario({ email, senha });
    }

    renderBtnAcessar() {
        return (
        <Button
            title='Acessar'
            onPress={() => this.internalAutenticaUsuario()}
            color='#115E54'
        />
        );
    }

    renderActivity() {
        return (
            <ActivityIndicator size='large' />
        );
    }

    render() {
        return (
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
                            value={this.props.email}
                            placeholderTextColor='#fff'
                            onChangeText={(texto) => this.props.modificaEmail(texto)}
                        />
                        <TextInput 
                            placeholder='Senha'
                            secureTextEntry
                            style={FormsStyles.inputs}
                            value={this.props.senha}
                            placeholderTextColor='#fff'
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                        />
                        <TouchableHighlight
                            onPress={() => Actions.FormCadastro()}
                        >
                            <Text style={FormsStyles.texts}>
                                Ainda não tem cadastro? Cadastre-se 
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={FormsStyles.containers}>
                        <Text style={FormsStyles.textErro}>
                            {this.props.erroLogin}
                        </Text> 
                        
                        {this.props.loadingLogin ? this.renderActivity() : this.renderBtnAcessar()}
                        
                    </View>
                </View>
            </ImageBackground>
        );
    }
} 

const mapStateToProps = state => ( 
{ 
    email: state.AuthRdc.email,
    senha: state.AuthRdc.senha,
    erroLogin: state.AuthRdc.erroLogin,
    loadingLogin: state.AuthRdc.loadingLogin
});


export default connect(mapStateToProps, 
    { modificaEmail, modificaSenha, autenticaUsuario }
)(FormLogin);

