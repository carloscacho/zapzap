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

const conversasRoute = () => <ContatosView />;
const contatosRoute = () => <ConversasView />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default class PrincipalView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'conversas', title: 'conversas' },
      { key: 'contatos', title: 'contatos' },
    ],
  };

  internalHandleIndexChange = index => this.setState({ index });

  internalRenderHeader = props => <TabBarMenu {...props} />;

  internalRenderScene = SceneMap({
    conversas: conversasRoute,
    contatos: contatosRoute,
  });

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

