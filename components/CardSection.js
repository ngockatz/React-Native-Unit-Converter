import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => (
        <View style={styles.section}>{props.children}</View>
    );

const styles = {
    section: {
        
        borderBottomWidth: 2,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
        
    }
};

export default CardSection;
