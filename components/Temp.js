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

        target=target.toFixed(0)
        this.setState({result: target});
    }

    reverse(){
        let temp1,temp2;
        temp1=this.state.unitFrom;
        temp2=this.state.unitTo;
        this.setState({unitFrom: temp2, unitTo:temp1});

    }
    render() {
        return (
            <View>
                <View style={styles.headerStyle} >
                    <Text style={styles.headerText}> Temperature </Text>
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
                            style={styles.inputStyle}
                            value={this.state.userInput}
                            onChangeText={text => 
                                this.setState({ userInput: text })
                                //this.calculate.bind(this)
                            }
                            maxLength={10}
                            keyboardType='numeric'
                        />
                    </View>

                    <TouchableOpacity 
                        onPress={this.calculate.bind(this)} 
                        style={{alignSelf:'center'}}
                    >
                        <Text> Calculate </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.reverse.bind(this)} 
                        style={{alignSelf:'center'}}
                    >
                        <Text> Reverse </Text>
                    </TouchableOpacity>


                    <View>
                        <View style={styles.unitSelection} >
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={this.state.unitTo}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(itemVal, itemInd) => {
                                    this.setState({ unitTo: itemVal }
                                    )}}>
                                <Picker.Item label="°C" value="C" />
                                <Picker.Item label="°F" value="F" />
                            </Picker>
                            
                        </View>
                        <Text style={styles.resultText}> {this.state.result} </Text>
                    </View>
                    
                </View>
                


            </View>
        );
    }
}

styles = {
    headerStyle: {
        alignSelf: 'center',
        paddingBottom: 10,
    },
    headerText:{
        color:'red',
        fontSize: 20,
        
    },
    unitRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    unitSelection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    resultText:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        paddingTop: 15,
    },
    inputStyle:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    pickerStyle:{
        borderStyle: 'solid',
        borderRadius: 10,
    }
}