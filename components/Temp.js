import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';

export default class Temp extends Component {

    

    render() {
        return (
            <View>
                <View style= {styles.headerStyle} >
                    <Text> Currency </Text>
                </View>
                <View style={styles.unitRow} >
                    <View>
                        <View style= {styles.unitSelection} >
                            <Text> Unit </Text>
                            <Text> Dummy text </Text>
                        </View>
                        <TextInput />
                    </View>

                    <TouchableOpacity>
                        <Text> some text </Text>
                    </TouchableOpacity>

                    <View>
                        <View style= {styles.unitSelection} >
                            <Text> Unit </Text>
                            <Text> Dummy text </Text>
                        </View>
                        <TextInput />
                    </View>
    
                </View>
            </View>
        );
    }
}

styles= {
    headerStyle:{
        alignSelf: 'center',
        paddingBottom: 20,
    },
    unitRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    unitSelection:{
        flexDirection:'row',
        justifyContent: 'space-between',
    }
}
