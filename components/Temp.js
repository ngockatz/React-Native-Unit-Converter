import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';

export default class Temp extends Component {

    constructor(props){
    super(props);
    this.state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: 0 };
    }

    calculate() {
        let intermediary, target;
        // Intermediary: C
       if (this.state.unitFrom=='F'){
            intermediary = (this.state.userInput - 32) * 5 / 9;
       } 
       else if (this.state.unitFrom=='C'){
           intermediary = this.state.userInput;
        };

        if(this.state.unitTo=='F'){
            target=intermediary*1.8+32;
        }
        else if(this.state.unitTo=='C'){
            target = intermediary;
        };
        this.setState({result: target});
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