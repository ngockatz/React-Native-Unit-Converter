import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import s from './styles/Styles';


class Distance extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'mi', unitTo: 'km', result: null }
        
    }
    
    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    clearInput = () => {
        this.setState({userInput:''});
    }

    handleToChange = (unit2) => {
        this.setState({unitTo: unit2},()=> this.calculate());
    }

    handleFromChange = (unit1) => {
        this.setState({unitFrom:unit1},() => this.calculate());
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
            if(isNaN(target))
                Alert.alert('Problem occurred','Unrecognized character found. Remove it to proceed');
            else    
                this.setState({ result: this.formatNumber(parseFloat(target).toFixed(1)) });
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
        this.setState({userInput: text.replace(/,/g,'')},() => 
            this.calculate()
     )
    }

    render() {        
        return (
            
            <View>
                <View style={[s.headerContainer,{backgroundColor: '#2f48fd'}]} >
                    <Text style={s.headerText}> Distance/Khoảng cách </Text>
                </View>

                <View style={s.contentsContainer} >

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitFrom}
                            onValueChange={this.handleFromChange}>
                            <Picker.Item label="Km Kilometer/Cây số" value="km" />
                            <Picker.Item label="M Meter/Mét (thước)" value="m" />
                            <Picker.Item label="Cm Centimeter/xentimét (phân)" value="cm" />
                            <Picker.Item label="Mm Millimeter/mi-li-mét (li)" value="mm" />
                            <Picker.Item label="Mi Mile/Dặm" value="mi" />
                            <Picker.Item label="Yd Yard/thước Anh" value="yd" />
                            <Picker.Item label="Ft Foot/Bộ" value="ft" />
                            <Picker.Item label="In Inch" value="in" />
                            <Picker.Item label="N.m Nautical Mile/Hải lí" value="n.m" />
                        </Picker>
                        <View>
                            <TextInput
                                placeholder="Nhập số"
                                style={s.textStyle}
                                value= {this.formatNumber(this.state.userInput)}
                                onChangeText={this.updateAndCalculate}
                                maxLength={18}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    <View style={s.iconContainer} >
                        <TouchableOpacity onPress={this.swap}>
                            <Image source={require('../assets/images/swap-icon.png')} style={s.iconStyle}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.clearInput}>
                            <Image source={require('../assets/images/trash-icon.png')} style={s.iconStyle}/> 
                        </TouchableOpacity>
                    </View>

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange}>
                            <Picker.Item label="Km Kilometer/Cây số" value="km" />
                            <Picker.Item label="M Meter/Mét (thước)" value="m" />
                            <Picker.Item label="Cm Centimeter/xentimét (phân)" value="cm" />
                            <Picker.Item label="Mm Millimeter/mi-li-mét (li)" value="mm" />
                            <Picker.Item label="Mi Mile/Dặm" value="mi" />
                            <Picker.Item label="Yd Yard/thước Anh" value="yd" />
                            <Picker.Item label="Ft Foot/Bộ" value="ft" />
                            <Picker.Item label="In Inch" value="in" />
                            <Picker.Item label="N.m Nautical Mile/Hải lí" value="n.m" />
                        </Picker>
                        <View>
                            <Text style={[s.textStyle,s.resultText]}> {this.state.result} </Text>
                        </View>
                    </View>

                </View>



            </View>
        );
    }
}

export default Distance;