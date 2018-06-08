import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

class Temp extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: null }
        
        //this.swap=this.swap.bind(this);
        //this.clearInput=this.clearInput.bind(this);
        //this.handleFromChange=this.handleFromChange.bind(this);
        //this.handleToChange=this.handleToChange.bind(this);
        //this.updateAndCalculate=this.updateAndCalculate.bind(this);
        
    }

    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    clearInput = () => {
        this.setState({userInput:'', result:null});
    }

    handleToChange = (unit2) => {
        this.setState({unitTo: unit2},()=> this.calculate());
    }

    handleFromChange = (unit1) => {
        this.setState({unitFrom:unit1},() => this.calculate());
    }

    calculate = () => {
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
            //alert(target+this.state.unitFrom+this.state.unitTo)
            //target=target.toFixed(1)
            //target=this.formatNumber(target.toFixed(1))
            this.setState({ result: target.toFixed(1) });
        }
        else {
            this.setState({ result: null })
        }
    }
    swap = () => {
        let temp1, temp2;
        temp1 = this.state.unitFrom;
        temp2 = this.state.unitTo;
        this.setState({ unitFrom: temp2, unitTo: temp1 }, () => {
            this.calculate()
        })
    }

    updateAndCalculate = (text) => {
        this.setState({userInput: text},() => 
            this.calculate()
     )
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
                            //selectedValue='hi'
                            style={pickerStyle}
                            onValueChange={this.handleFromChange
                            }>
                            <Picker.Item label="°C (Celsius)" value="C" />
                            <Picker.Item label="°F (Farenheidt)" value="F" />
                        </Picker>
                        <TextInput
                            placeholder=""
                            style={inputTextStyle}
                            value= {this.state.userInput}
                            onChangeText={this.updateAndCalculate}
                            
                            maxLength={15}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={this.swap}
                        >
                            <Icon name='swap-horizontal-variant' 
                                size={50}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.clearInput}
                        >
                            <FontIcon name='recycle' 
                                size={50}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={inputContainer}>
                        <Picker
                            style={pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange
                            }>
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