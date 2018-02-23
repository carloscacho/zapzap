/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
//Redux modules
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//import Files
import Routes from './src/components/Routes';
import reducers from './src/reducers';

//import config firebase
import config from './src/firebase/config';

export default class Zapzap extends Component {
  
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        
        <Routes />

      </Provider>
    );
  }
}

