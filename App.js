/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
//Redux modules
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

//import Files
import Routes from './src/components/Routes';
import reducers from './src/reducers';

//import config firebase
import config from './src/firebase/config';

export default class Zapzap extends Component {
  
  //inicia o Firebase com as configurações copiadas do site
  //O arquivo config.js não está sendo carregado no github
  componentWillMount() {
    firebase.initializeApp(config);
  }

 //Render Simples dos elementos do app.js  
  render() {
    return (
       //Somente cria a Store e utiliza o reduxThunk como middleware do redux
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        {/* chama o Routes onde estão todos os componentes  */}
        <Routes />
      </Provider>
    );
  }
}

