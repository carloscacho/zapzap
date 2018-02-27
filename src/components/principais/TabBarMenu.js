import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import styles from '../../styles/FormsStyles';

const TabBarMenu = (props) => (
    <View style={styles.viewBarAll}>
        <StatusBar backgroundColor='#114D44' />
        <View style={styles.viewBar}> 
            <Text style={styles.barText}> Zap Zap </Text>
        </View>
        <TabBar {...props} style={styles.tabBar} />
    </View>  
);

export default TabBarMenu;
