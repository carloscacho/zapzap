import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

class ContatosView extends React.Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
        );
    }
    
}

export default ContatosView;
