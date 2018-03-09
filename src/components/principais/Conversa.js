import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Image,
    Text,
    TouchableHighlight,
    ListView
} from 'react-native';
//lodash
import _ from 'lodash';

//import redux
import { connect } from 'react-redux';
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../../actions/AppActions';

//styles
import styles from '../../styles/FormsStyles';

//img
const sendImg = require('../../../assets/imagens/icon-send.png');


class Conversa extends Component {
    //adiquirir as mensagens da conversa
    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.email);
        this.criaFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        //Coreção de um erro onde a cena anterior não é destruida
        if (this.props.email !== nextProps.email) {
            this.props.conversaUsuarioFetch(nextProps.email);
        }
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados(conversa) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(conversa);
    }

    iEnviaMensagem() {
        console.log('enviando a mensagem');
        console.log(this.props);
        
        const { mensagem, nome, email } = this.props;
        this.props.enviaMensagem(mensagem, nome, email);
    }

    renderRowConversa(conversa) {
        if (conversa.tipo === 'e') {
            return (
                <View style={styles.msgTipoE}>
                    <Text style={styles.msgTextE}> {conversa.mensagem} </Text>
                    
                </View>
            );
        } 
            return (
                <View style={styles.msgTipoR} >
                    <Text style={styles.msgTextR}> {conversa.mensagem} </Text>
                </View>
            );
    }

    render() {
        return (
            <View style={styles.mainConversa}>
                <View style={styles.chatView}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRowConversa}
                    />
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

const mapStateToProps = state => {
    const conversa = _.map(state.LstConvRdc, (val, uid) => ({ ...val, uid }));

    return ({ 
        mensagem: state.AppRdc.mensagem,
        conversa
    });
};

export default connect(mapStateToProps, 
    { modificaMensagem, enviaMensagem, conversaUsuarioFetch }
)(Conversa);
