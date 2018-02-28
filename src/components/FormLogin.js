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

//actions do REDUX de mudaças dos inputs e para autenticação do usuario
import { 
    modificaEmail,
    modificaSenha,
    autenticaUsuario
} from '../actions/AuthActions';

//imgem carreda para ser utilizada como imagem de fundo
const back = require('../../assets/imagens/fundo.png');

// Componet de Fomulario de Login, trabalha com Redux 
class FormLogin extends Component {
    //metodo interno de preparação apara autenticação do Usuario
    internalAutenticaUsuario() {
        const { email, senha } = this.props;
        //abaixo a chamada que irá tratar realamente do login
        this.props.autenticaUsuario({ email, senha });
    }

    //Render do botão de Acessar, ele está separado da estrutura,
    //pois ele troca a o render com loading após clickado
    renderBtnAcessar() {
        return (
        <Button
            title='Acessar'
            onPress={() => this.internalAutenticaUsuario()}
            color='#115E54'
        />
        );
    }

    //reder de elemento loading para trocar com o botão Acessar quando Clickado
    renderActivity() {
        return (
            <ActivityIndicator size='large' />
        );
    }


    //reder da cena do Formulario de Login que possui uma Imagem de Fundo,
    //Duas entradas de textos para email e senha
    //Um link para cena de Cadastro
    //E um Botão para efetuar o login
    render() {
        return (
            // imagem de fundo do aplicativo
            <ImageBackground style={FormsStyles.main} source={back}>
                <View style={FormsStyles.main}>
                    {/* Titulo do Apicativo */}
                    <View style={FormsStyles.containerTitle}>
                        <Text style={FormsStyles.title}>
                            Zap Zap
                        </Text>
                    </View>

                    {/* Campo de entrada de texto para email */}
                    <View style={FormsStyles.containers}>
                        <TextInput 
                            placeholder='Email'
                            style={FormsStyles.inputs}
                            value={this.props.email}
                            placeholderTextColor='#fff'
                            onChangeText={(texto) => this.props.modificaEmail(texto)}
                        />
                        {/* Campo de entrada de texto para senha */}
                        <TextInput 
                            placeholder='Senha'
                            secureTextEntry
                            style={FormsStyles.inputs}
                            value={this.props.senha}
                            placeholderTextColor='#fff'
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                        />
                        {/* Link para cena de cadastro */}
                        <TouchableHighlight
                            onPress={() => Actions.FormCadastro()}
                            underlayColor='#114D44'
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
                        {/* neste ponto é decidio se o botão Acessar ou o loading é renderizado */}
                        {this.props.loadingLogin ? this.renderActivity() : this.renderBtnAcessar()}
                        
                    </View>
                </View>
            </ImageBackground>
        );
    }
} 

//metodo que faz o mapeato dos elementos state do Redux para ser acessado por props
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

