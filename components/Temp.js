import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';

export default class Temp extends Component {

    constructor(props){
    super(props);
    this.state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: 0 };
    }

    calculate() {

        let currentIntermediary, targetIntermediary, target
        //intermediary is C
        //alert(this.state.userInput)
        /*switch (this.state.unitFrom) {
            case 'F':
                currentIntermediary = (parseFloat(this.state.userInput) - 32) * 5 / 9;
            case 'C':
                currentIntermediary = 1;
            default:
                currentIntermediary=100
        }
        */
       if (this.state.unitFrom='F'){
            currentIntermediary = (parseFloat(this.state.userInput) - 32) * 5 / 9;
       } else {currentIntermediary=1}
        console.log(parseInt(this.state.userInput))
        console.log(currentIntermediary)
        console.log(this.state.unitFrom)
        

        switch (this.state.unitTo) {
            case 'F':
                targetIntermediary = (parseInt(this.state.userInput) - 32) * 5 / 9;
            case 'C':
                targetIntermediary = 1
            default:
                targetIntermediary=1
        }
        console.log(targetIntermediary)
        console.log(this.state.unitTo)
        target = (currentIntermediary / targetIntermediary)

        this.setState({ result: target })
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
                                onValueChange={(itemValue, itemIndex) => 
                                    this.setState({ unitFrom: itemValue })
                                    //this.calculate.bind(this)
                                }>
                                <Picker.Item label="°C" value="C" />
                                <Picker.Item label="°F" value="F" />
                            </Picker>
                        </View>
                        <TextInput
                            value={this.state.userInput}
                            onChangeText={text =>
                                this.setState({ userInput: text })
                                //this.calculate.bind(this)
                            }
                            maxLength={10}
                        />
                    </View>

                    <TouchableOpacity onPress={this.calculate.bind(this)} >
                        <Text> calculatezz </Text>
                    </TouchableOpacity>

                    <View>
                        <View style={styles.unitSelection} >
                            <Picker
                                selectedValue={this.state.unitTo}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(itemVal, itemInd) => this.setState({ unitTo: itemVal })}>
                                <Picker.Item label="°C" value="C" />
                                <Picker.Item label="°F" value="F" />
                            </Picker>
                            
                        </View>
                        <Text>Value: {this.state.result} </Text>
                    </View>

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