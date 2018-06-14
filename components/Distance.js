import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import s from './styles/Styles';


class Distance extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'mi', unitTo: 'km', result: null,
                        distance:{'km': 1000,'m': 1,'cm':0.01,'mm':0.001,'in':0.0254,
                                    'mi':1609.34,'n.m':1852,'yd':0.9144,'ft':0.3048
                    }
        }
        
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
        // Intermediary: Meter
        if (this.state.userInput !== '') {
            let intermediary, target;
            intermediary=this.state.userInput*this.state.distance[this.state.unitFrom]
            target = intermediary/this.state.distance[this.state.unitTo]
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
                        <View style ={s.textInputContainerIOS} >
                            <TextInput
                                placeholder="Nhập số"
                                style={s.textStyle}
                                value= {this.formatNumber(this.state.userInput)}
                                onChangeText={this.updateAndCalculate}
                                maxLength={18}
                                keyboardType='numeric'
                                clearButtonMode='while-editing'
                            />
                        </View>
                    </View>
                    <View style={s.iconContainer} >
                        <TouchableOpacity onPress={this.swap}>
                            <Image source={require('../assets/images/swap-icon.png')} style={s.iconStyle}/>
                        </TouchableOpacity>
                        {Platform.OS === 'android' &&
                        <TouchableOpacity onPress={this.clearInput}>
                            <Image source={require('../assets/images/trash-icon.png')} style={s.iconStyle}/> 
                        </TouchableOpacity>
                        }
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