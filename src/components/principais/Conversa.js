import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Image,
    TouchableHighlight,
    Text

} from 'react-native';
//import redux
import { connect } from 'react-redux';
import { modificaMensagem, enviaMensagem } from '../../actions/AppActions';

//styles
import styles from '../../styles/FormsStyles';

//img
const sendImg = require('../../../assets/imagens/icon-send.png');


class Conversa extends Component {
    iEnviaMensagem() {
        console.log('enviando a mensagem');
        console.log(this.props);
        
        const { mensagem, nome, email } = this.props;
        this.props.enviaMensagem(mensagem, nome, email);
    }
    render() {
        return (
            <View style={styles.mainConversa}>
                <View style={styles.chatView}>
                    <Text> Aqui irá aparecer as mensagems </Text>
                </View>
                <View style={styles.textBoxView}>
                    <TextInput
                        style={styles.textBox}
                        value={this.props.mensagem}
                        onChangeText={(texto) => 
                            this.props.modificaMensagem(texto)
                        }
                    />
                    <TouchableHighlight
                        style={styles.btnSend}
                        onPress={this.iEnviaMensagem.bind(this)}
                        underlayColor="#fff"
                    >
                        <Image
                            style={{ flex: 1, height: 90, width: 80 }}
                            
                            source={sendImg}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
{
    mensagem: state.AppRdc.mensagem
});

export default connect(mapStateToProps, 
    { modificaMensagem, enviaMensagem }
)(Conversa);
