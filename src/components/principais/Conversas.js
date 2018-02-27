import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

class ConversasView extends React.Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
        );
    }
    
}

export default ConversasView;
