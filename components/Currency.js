import React, { Component } from 'react';
import { View, Text, Picker, TextInput, 
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import s from './styles/Styles';

class Currency extends Component {
/*
    constructor(props){
    super(props)
    this.state = { userInput: '', unitFrom: 'USD', unitTo: 'VND', result: null, currency: '' }

    componentDidMount() {
        
        fetch('https://openexchangerates.org/api/latest.json?app_id=1cd652359fc14d158810a58807b31fbe')
            .then((response) => response.json())
            .then((currency) => this.setState({ currency }))
            .then(()=>AsyncStorage.setItem("offlineRates", JSON.stringify(this.state.currency)))
            .catch(()=> AsyncStorage.getItem("offlineRates").then((value) => {
                this.setState({currency: JSON.parse(value)})
    }))
}
//
    calculate() {
        const { unitFrom, unitTo, result, userInput, currency } = this.state;
        
        // Intermediary: USD
        if (this.state.userInput !== '' && currency!=='') {
            let intermediary, target;
            intermediary=userInput/currency.rates[unitFrom]
            target = intermediary*currency.rates[unitTo]
            target = target.toFixed(2)
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

        return (
            <View>
                <View style={headerContainer} >
                    <Text style={headerText}> Currency/Tiền tệ </Text>
                </View>

                <View style={contentsContainer} >

                    <View style={{ flex: 2 }}>
                        <View style={styles.unitSelection} >
                            <Picker
                                selectedValue={this.state.unitFrom}
                                style={{ height: 40, width: 150 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ unitFrom: itemValue }, () => {
                                        this.calculate()
                                    })
                                }>
                                <Picker.Item label="$ USD/Đôla Mỹ" value="USD" />
                                <Picker.Item label="₫ VND/Việt Nam Đồng" value="VND" />
                                <Picker.Item label="¥ RMB/CNY/Nhân dân tệ" value="CNY" />
                                <Picker.Item label="¥ Yen/Yên" value="JPY" />
                                <Picker.Item label="€ Euro/Đồng Euro" value="EUR" />
                            </Picker>
                        </View>
                        <TextInput
                            placeholder="(from)"
                            style={styles.inputStyle}
                            value={this.state.userInput}
                            onChangeText={text =>
                                this.setState({ userInput: text }, () => {
                                    this.calculate()
                                })
                            }
                            maxLength={12}
                            keyboardType='numeric'
                        />
                    </View>

                    <TouchableOpacity
                        onPress={this.reverse.bind(this)}
                        style={{ flex: 1, paddingLeft: 17, alignSelf: 'center' }}
                    >
                        <Icon name='swap-horizontal-variant' size={70} />
                    </TouchableOpacity>


                    <View style={{ flex: 2 }}>
                        <View style={styles.unitSelection} >
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={this.state.unitTo}
                                style={{ height: 40, width: 150 }}
                                onValueChange={(itemVal, itemInd) => {
                                    this.setState({ unitTo: itemVal }, () =>
                                        this.calculate()
                                    )
                                }}>
                                <Picker.Item label="$ USD/Đôla Mỹ" value="USD" />
                                <Picker.Item label="₫ VND/Việt Nam Đồng" value="VND" />
                                <Picker.Item label="¥ RMB/CNY/Nhân dân tệ" value="CNY" />
                                <Picker.Item label="¥ Yen/Yên" value="JPY" />
                                <Picker.Item label="€ Euro/Đồng Euro" value="EUR" />
                            </Picker>

                        </View>
                        <Text style={styles.resultText}> {this.state.result} </Text>
                    </View>

                </View>



            </View>
        );
    }
    */
}

export default Currency;