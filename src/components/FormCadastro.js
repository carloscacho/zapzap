import React, { Component } from 'react';
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
import {
    modificaNome,
    modificaEmail,
    modificaSenha,
    cadastraUsuario
} from '../actions/AuthActions';

//img
const back = require('../../assets/imagens/fundo.png');

class FormCadastro extends Component {
    verificaCadastraUsuario() {
        this.props.cadastraUsuario({
            nome: this.props.nome,
            email: this.props.email,
            senha: this.props.senha
        });
    }


    render() {
        return (
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
                            value={this.props.nome}
                            onChangeText={(texto) => this.props.modificaNome(texto)}
                            
                        />
                        <TextInput 
                            placeholder='E-mail'
                            style={FormsStyles.inputs}
                            placeholderTextColor='#fff'
                            value={this.props.email}
                            onChangeText={(texto) => this.props.modificaEmail(texto)}
                            
                        />
                        <TextInput 
                            placeholder='Senha'
                            style={FormsStyles.inputs}
                            value={this.props.senha}
                            secureTextEntry
                            placeholderTextColor='#fff'
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                            
                        />

                        <Text style={FormsStyles.textErro}>{this.props.erroCadastro}</Text>
                        
                    </View>
                    
                    <View style={FormsStyles.containers}>
                        <Button
                            title='Cadastrar'
                            onPress={() => this.verificaCadastraUsuario()}
                            color='#115E54'
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ( 
    { 
        nome: state.AuthRdc.nome,
        email: state.AuthRdc.email,
        senha: state.AuthRdc.senha,
        erroCadastro: state.AuthRdc.erroCadastro
     }); 

export default connect(mapStateToProps, 
    { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(FormCadastro);

