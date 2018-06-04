import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Temp extends Component {

    constructor(props){
    super(props);
    this.state = { userInput: '', unitFrom: 'F', unitTo: 'C', result: null };
    }

    calculate() {
        
        // Intermediary: C
    if(this.state.userInput!==''){
        let intermediary, target;
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

        target=target.toFixed(1)
        this.setState({result: target});
    }
    else{
        this.setState({'result': null})
    }
    }
    reverse(){
        let temp1,temp2;
        temp1=this.state.unitFrom;
        temp2=this.state.unitTo;
        this.setState({unitFrom: temp2, unitTo:temp1},()=>{
        this.calculate()})
    }
    render() {
        return (
            <View>
                <View style={styles.headerStyle} >
                    <Text style={styles.headerText}> Temperature/Nhiệt độ </Text>
                </View>

                <View style={styles.unitRow} >

                    <View style={{flex:2}}>
                        <View style={styles.unitSelection} >
                            <Picker
                                selectedValue={this.state.unitFrom}
                                style={{ height: 40, width: 100 }}
                                onValueChange={(itemValue, itemIndex) => 
                                    this.setState({ unitFrom: itemValue },()=>{
                                    this.calculate()})
                                }>
                                <Picker.Item label="°C" value="C" />
                                <Picker.Item label="°F" value="F" />
                            </Picker>
                        </View>
                        <TextInput
                            placeholder="(from)"
                            style={styles.inputStyle}
                            value={this.state.userInput}
                            onChangeText={text => 
                                this.setState({ userInput: text },() => {
                                this.calculate()})
                            }
                            maxLength={12}
                            keyboardType='numeric'
                        />
                    </View>

                    <TouchableOpacity 
                        onPress={this.reverse.bind(this)}
                        style={{flex:1,paddingLeft:17,alignSelf:'center'}}
                    >
                        <Icon name='swap-horizontal-variant' size={70} />
                    </TouchableOpacity>


                    <View style={{flex:2}}>
                        <View style={styles.unitSelection} >
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={this.state.unitTo}
                                style={{ height: 40, width: 100 }}
                                onValueChange={(itemVal, itemInd) => {
                                    this.setState({ unitTo: itemVal }, () =>
                                    this.calculate()
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
        paddingBottom: 10,
        backgroundColor: '#e82813',
        alignSelf: 'stretch',
        
        
    },
    headerText:{
        color:'#ffffff',
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
        fontSize: 20,
        paddingTop: 10,
    },
    inputStyle:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    pickerStyle:{
        borderStyle: 'solid',
        borderRadius: 10,
    }
}