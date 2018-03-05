import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

//import components da view
import ContatosView from './principais/Contatos';
import ConversasView from './principais/Conversas';
import TabBarMenu from './principais/TabBarMenu';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

//os dois compoents que compõem a Cena Principal
const conversasRoute = () => <ConversasView />;
const contatosRoute = () => <ContatosView />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
//Component que implementa duois outros components (Conversas e Contatos) em tabs
export default class PrincipalView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'conversas', title: 'conversas' },
      { key: 'contatos', title: 'contatos' },
    ],
  };

  internalHandleIndexChange = index => this.setState({ index });

  //TabBarMenu é uma modificação do TabBar padrão da Classe
  internalRenderHeader = props => <TabBarMenu {...props} />;

  //descrição das cenas que irão fazer parte das cena Principal
  internalRenderScene = SceneMap({
    conversas: conversasRoute,
    contatos: contatosRoute,
  });

  //TavViewAnimated somente aceita ele como elemento no Render
  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.internalRenderScene}
        renderHeader={this.internalRenderHeader}
        onIndexChange={this.internalHandleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

