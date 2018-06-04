import React from 'react';
import { View, Text } from 'react-native';
//import Card from './Card';

const CardSection = (props) => (
        <View style={styles.section}>{props.children}</View>
    );

//https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/t/lecture/5744034?start=0
const styles = {
    section: {
        
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        //justifyContent: 'flex-start',
        //flexDirection: 'row',
        borderColor: '#007aff',
        position: 'relative'
        
    }
};

export default CardSection;
