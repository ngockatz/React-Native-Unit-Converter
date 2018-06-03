import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';

export default class Temp extends Component {

    state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: 0 }

    calculate() {

        let currentIntermediary, targetIntermediary, target
        //intermediary is C
        switch (this.state.unitFrom){
            case 'F':
                currentIntermediary = ((this.state.userInput)*5)/9;
            case 'C':
                currentIntermediary = 1;
        }

        switch (this.state.unitTo){
            case 'F':
                targetIntermediary = ((this.state.userInput)*5)/9;
            case 'C':
                targetIntermediary = 1;
        }
        
        target = parseInt(this.state.userInput)*currentIntermediary/targetIntermediary+10
        
        this.setState({result: target })
        //console.log(this.state.result)

    }

    render() {
        return (
            <View>
                <View style={styles.headerStyle} >
                    <Text> Temperature </Text>
                </View>

                <View style={styles.unitRow} >

                    <View>
                        <View style={styles.unitSelection} >
                            <Picker
                                selectedValue={this.state.unitFrom}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({ unitFrom: itemValue })
                                    this.calculate.bind(this)
                                        }}>
                                <Picker.Item label="°C" value="C" />
                                <Picker.Item label="°F" value="F" />
                            </Picker>
                        </View>
                        <TextInput
                            value={this.state.userInput}
                            onChangeText={text => {
                                this.setState({ userInput: text })
                                this.calculate.bind(this)
                                }}
                            maxLength= {10}
                        />
                    </View>

                    <TouchableOpacity onPress ={this.calculate.bind(this)} >
                        <Text> Reverse </Text>
                    </TouchableOpacity>

                    <View style={styles.unitSelection} >
                        <Picker
                            selectedValue={this.state.unitTo}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ unitTo: itemValue })}>
                            <Picker.Item label="°C" value="C" />
                            <Picker.Item label="°F" value="F" />
                        </Picker>
                    </View>
                    <Text>Value: {this.state.result} </Text>

                </View>
            </View>
        );
    }
}

styles = {
    headerStyle: {
        alignSelf: 'center',
        paddingBottom: 20,
    },
    unitRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    unitSelection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}