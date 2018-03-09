import * as React from 'react';
import { View, ListView, TouchableHighlight, Text } from 'react-native';
//router
import { Actions } from 'react-native-router-flux';
//redux
import { connect } from 'react-redux';
import _ from 'lodash';

//styles
import styles from '../../styles/FormsStyles';

//actions
import { conversasUsuarioFetch } from '../../actions/AppActions';

class ConversasView extends React.Component {
    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversasCadastradas);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversasCadastradas);
    }

    criaFonteDeDados(contatos) {
        const ds = new ListView.DataSource(
            { rowHasChanged: (r1, r2) => r1 !== r2 }
        );

        this.fonteDeDados = ds.cloneWithRows(contatos);
    }

    renderRowData(data) {
        return (
        <TouchableHighlight
            onPress={() => Actions.Conversa(
                { nome: data.nome, email: data.email, title: data.nome }
            )}
        >
            <View style={styles.listViewData}>
                <Text style={styles.listTextName}>{data.nome}</Text>
                {data.tipo === 'e' ? 
                this.renderEnvia(data.ultimaMensagem) :
                this.renderRecebe(data.ultimaMensagem)}
            </View> 
        </TouchableHighlight>
        );
    }

    renderEnvia(texto) {
        return (
            <Text style={{ color: '#54a394', fontSize: 18 }}> {texto}</Text>
        );
    }

    renderRecebe(texto) {
        return (
            <Text style={{ color: '#3399ff', fontSize: 18 }}> {texto}</Text>
        );
    }

    render() {
        return (
            <View>
                <ListView 
                    enableEmptySections
                    dataSource={this.fonteDeDados}
                    renderRow={data => this.renderRowData(data)}
                />
            </View>
        );
    }
    
}
const mapStateToProps = state => {
    const conversasCadastradas = _.map(state.LstConvsRdc, (val, uid) => (
        { ...val, uid }
    ));
    return { conversasCadastradas };
};

export default connect(mapStateToProps, { conversasUsuarioFetch })(ConversasView);
