import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Temp extends Component {

    state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: null };

    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    calculate() {
        // Intermediary: C
        if (this.state.userInput !== '') {
            let intermediary, target;
            if (this.state.unitFrom == 'F') {
                intermediary = (this.state.userInput - 32) * 5 / 9;
            }
            else if (this.state.unitFrom == 'C') {
                intermediary = this.state.userInput;
            };

            if (this.state.unitTo == 'F') {
                target = intermediary * 1.8 + 32;
            }
            else if (this.state.unitTo == 'C') {
                target = intermediary;
            };
            target=this.formatNumber(target.toFixed(1))
            this.setState({ result: target });
        }
        else {
            this.setState({ result: null })
        }
    }
    reverse() {
        let temp1, temp2;
        temp1 = this.state.unitFrom;
        temp2 = this.state.unitTo;
        this.setState({ unitFrom: temp2, unitTo: temp1 }, () => {
            this.calculate()
        })
    }
    render() {
        const { headerContainer, headerText, contentsContainer, inputContainer, 
            pickerStyle, inputTextStyle, resultText } = styles;

        return (
            <View>
                <View style={headerContainer} >
                    <Text style={headerText}> Temperature/Nhiệt độ </Text>
                </View>

                <View style={contentsContainer} >

                    <View style={inputContainer}>
                        <Picker
                            selectedValue={this.state.unitFrom}
                            style={pickerStyle}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ unitFrom: itemValue }, () => {
                                    this.calculate()
                                })
                            }>
                            <Picker.Item label="°C (Celsius)" value="C" />
                            <Picker.Item label="°F (Farenheidt)" value="F" />
                        </Picker>
                        <TextInput
                            placeholder=""
                            style={inputTextStyle}
                            value= {(this.formatNumber(this.state.userInput))}
                            onChangeText={text =>
                                this.setState({ userInput: text.replace(/,/g,'') }, () => {
                                    this.calculate()
                                })
                            }
                            maxLength={15}
                            keyboardType='numeric'
                        />
                    </View>

                    <TouchableOpacity
                        onPress={this.reverse.bind(this)}
                        style={{flex:1}}
                    >
                        <Icon name='swap-horizontal-variant' 
                              size={50}
                              style={{alignSelf:'center'}} 
                        />
                    </TouchableOpacity>


                    <View style={inputContainer}>
                        <Picker
                            style={pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={(itemVal, itemInd) => {
                                this.setState({ unitTo: itemVal }, () =>
                                    this.calculate()
                                )
                            }}>
                            <Picker.Item label="°C (Celsius)" value="C" />
                            <Picker.Item label="°F (Farenheidt)" value="F" />
                        </Picker>

                        <TextInput 
                            style={inputTextStyle}
                            editable = {false}
                        > {this.state.result} </TextInput>
                    </View>

                </View>



            </View>
        );
    }
}

const styles = {
    headerContainer: {
        paddingBottom: 10,
        backgroundColor: '#e82813',
        alignSelf: 'stretch',


    },
    headerText: {
        color: 'white',
        fontSize: 20,

    },

    contentsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    inputContainer:{
        flex:2,
        justifyContent:'space-between',
    },

    resultText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    inputTextStyle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        
    },
    pickerStyle: {
        borderStyle: 'solid',
        borderRadius: 10,
        //flex: 1 //?
        
    }
}

export default Temp;