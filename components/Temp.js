import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Styles';


class Temp extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: null }
        this.clearInput=this.clearInput.bind(this);
        
    }
    
    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    clearInput (){
        this.setState({userInput:null});
    }

    handleToChange = (unit2) => {
        this.setState({unitTo: unit2},()=> this.calculate);
    }

    handleFromChange = (unit1) => {
        this.setState({unitFrom:unit1},() => this.calculate);
    }

    calculate = () => {
        // Intermediary: C
        if (!!this.state.userInput) {
            let target, intermediary;
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

            this.setState({ result: parseFloat(target).toFixed(1) });
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
                <View style={[headerContainer,{backgroundColor: '#e82813'}]} >
                    <Text style={headerText}> Temperature/Nhiệt độ </Text>
                </View>

                <View style={contentsContainer} >

                    <View style={inputContainer}>
                        <Picker
                            selectedValue={this.state.unitFrom}
                            style={pickerStyle}
                            onValueChange={this.handleFromChange
                            }>
                            <Picker.Item label="°C (Celsius)" value="C" />
                            <Picker.Item label="°F (Farenheidt)" value="F" />
                        </Picker>
                        <View>
                        <TextInput
                            placeholder=""
                            style={inputTextStyle}
                            value= {this.state.userInput}
                            onChangeText={this.updateAndCalculate}
                            
                            //maxLength={15}
                            keyboardType='numeric'
                        />
                        </View>
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
                            style={[pickerStyle]}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange
                            }>
                            <Picker.Item label="°C (Celsius)" value="C" />
                            <Picker.Item label="°F (Farenheidt)" value="F" />
                        </Picker>
                        <View style={{}}>
                        <Text 
                            style={[inputTextStyle,{textAlign:'center',paddingBottom:15}]}
                        > {this.state.result} </Text>
                        </View>
                    </View>

                </View>



            </View>
        );
    }
}

export default Temp;