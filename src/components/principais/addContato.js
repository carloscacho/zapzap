import * as React from 'react';
import { 
    View,
    TextInput,
    Button,
    Text 
} from 'react-native';
//redux 
import { connect } from 'react-redux';
import {
    modificaEmailContato, 
    adicionaContato, 
    adicionaNovoContato 
} from '../../actions/AppActions';
//styles
import styles from '../../styles/FormsStyles';
//import { cadastraUsuario } from '../../actions/AuthActions';

const renderCadastraUser = (props) => (
    <View style={styles.containerAdd}>
    <View style={styles.containers}>
        <TextInput
            value={props.contatoEmail}
            style={styles.inputs}
            placeholder='E-mail do Contato'
            onChange={(texto) => props.modificaEmailContato(texto.nativeEvent.text)}
            
        />
        <Text style={styles.textErro}>
            {props.msgErroAddContato}
        </Text>
    </View>
    <View style={styles.containerButton}>
        <Button 
            color='#115E54'
            title='Adicionar'
            onPress={() => 
                props.adicionaContato(
                    props.contatoEmail
                )
            }
        />
    </View>
</View>

);

const renderCadastraUserSucesso = (props) => (
    <View style={styles.main}>
    <View style={styles.containers}>
        <Text style={styles.texts}>
            Contato Cadastrado Com Sucesso !!!     
        </Text>
    </View>
    <View style={styles.containerButton}>
        <Button 
            color='#115E54'
            title='Adicionar Novo Contato'
            onPress={() => 
                props.adicionaNovoContato(
                )
            }
        />
    </View>
</View>

);

const AddContatosView = (props) => (
    <View style={styles.containerAdd}>
        {props.addCadastroSucesso ? renderCadastraUserSucesso(props) : renderCadastraUser(props) }
    </View>
);

const mapStateToProps = state => ( 
{ 
    contatoEmail: state.AppRdc.contatoEmail,
    msgErroAddContato: state.AppRdc.erroAdicionarContato,
    addCadastroSucesso: state.AppRdc.addCadastroSucesso
});

export default connect(mapStateToProps, 
    { 
        modificaEmailContato, 
        adicionaContato, 
        adicionaNovoContato 
})(AddContatosView);
