import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';

//Styles
import FormsStyles from '../styles/FormsStyles';

//actions do REDUX de mudaças dos inputs e para cadastro do usuario
import {
    modificaNome,
    modificaEmail,
    modificaSenha,
    cadastraUsuario
} from '../actions/AuthActions';

//imagem de plano de fundo da cena
const back = require('../../assets/imagens/fundo.png');

//Formulario de Cadastro de novo Usuario do APP
class FormCadastro extends Component {

    //Chamada interna para envio das informação para cadastro do usuario
    verificaCadastraUsuario() {
        this.props.cadastraUsuario({
            nome: this.props.nome,
            email: this.props.email,
            senha: this.props.senha
        });
    }

    //render de um elemento de loading, que será ativado após ao click do botão cadastrar
    renderActivity() {
        return (
            <ActivityIndicator size='large' />
        );
    }

    //render do botão cadastrar 
    renderBtnCadastrar() {
        return (
            <Button
                title='Cadastrar'
                onPress={() => this.verificaCadastraUsuario()}
                color='#115E54'
            />
        );
    }

    //render da component de cadastro de usuario que contem:
    //Uma imagem de fundo
    //o titulo do Aplicativo
    //três inputs para entradas de dados ( nome, email e senha) do usuario
    //botão de cadastro do usuario
    render() {
        return (
            //imagem de fundo que englobam todos os elementos 
            <ImageBackground style={FormsStyles.main} source={back}>
                <View style={FormsStyles.main}>
                    <View style={FormsStyles.containerTitle}>
                        {/* titulo do APP */}
                        <Text style={FormsStyles.title}>
                            Zap Zap
                        </Text>
                        {/* <Text style={FormsStyles.texts}>
                            Cadastro
                        </Text> */}
                    </View>
                    {/* input de entrada de texto para nome */}
                    <View style={FormsStyles.containers}>
                        <TextInput 
                            placeholder='Nome'
                            style={FormsStyles.inputs}
                            placeholderTextColor='#fff'
                            value={this.props.nome}
                            onChangeText={(texto) => this.props.modificaNome(texto)}
                            
                        />
                        {/* input de entrada de texto para email */}
                        <TextInput 
                            placeholder='E-mail'
                            style={FormsStyles.inputs}
                            placeholderTextColor='#fff'
                            value={this.props.email}
                            onChangeText={(texto) => this.props.modificaEmail(texto)}
                            
                        />
                        {/* input de entrada de texto para senha */}
                        <TextInput 
                            placeholder='Senha'
                            style={FormsStyles.inputs}
                            value={this.props.senha}
                            secureTextEntry
                            placeholderTextColor='#fff'
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                            
                        />
                        {/* messsagem de erro, que será ativado caso ouver um erro no cadastro */}
                        <Text style={FormsStyles.textErro}>{this.props.erroCadastro}</Text>
                        
                    </View>
                    {/* render do botão cadastrar ou loading  */}
                    <View style={FormsStyles.containers}>
                        {this.props.loadingCadastro ? 
                            this.renderActivity() : this.renderBtnCadastrar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

//Mapeamaneto dos States vindo do REDUX para props do component
const mapStateToProps = state => ( 
    { 
        nome: state.AuthRdc.nome,
        email: state.AuthRdc.email,
        senha: state.AuthRdc.senha,
        erroCadastro: state.AuthRdc.erroCadastro
     }); 

export default connect(mapStateToProps, 
    { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(FormCadastro);

