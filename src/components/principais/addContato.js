import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

class AddContatosView extends React.Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: '#aaEe23' }]} />
        );
    }
    
}

export default AddContatosView;
