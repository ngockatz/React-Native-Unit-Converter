import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, AsyncStorage, Alert, Image, ActivityIndicator, 
    ToastAndroid, AlertIOS, Platform } from 'react-native';
import s from './styles/Styles';

class Currency extends Component {

    constructor(props){
    super(props)
    this.state = { userInput: '', unitFrom: 'USD', unitTo: 'VND', result: null, currency: '',loading:true, date:'' }
    }

    componentDidMount(){
        AsyncStorage.getItem("offlineRates").then((value) => {
            if (value)
                this.setState({currency: JSON.parse(value),loading:false})
            else
                Alert.alert('No currency data found','For first time use of the currency converter'+ 
                'first download realtime rates to local device for offline access')
                this.setState({loading:false})
            }
        )

        AsyncStorage.getItem("lastUpdate").then((message) => {
            if(message)
                this.setState({date:message})
            else
                this.setState({date:'No data found for currency rates. Click the green down arrow button to update\n'+
                'Không tìm thấy dữ liệu để chuyển đổi tiền tệ. Nhấn vào mũi tên xanh phía trên để cập nhật.'})
        })
    }

    updateRates = () => {
        if(Platform.OS==='android')
            ToastAndroid.show('Downloading realtime currency rates...',ToastAndroid.SHORT)
        else
            AlertIOS.alert('Downloading realtime currency rates...')
        this.setState({loading:true});

        var latest = new Date();
        var message;
        message = 'Last updated: ' + latest.toLocaleString() + '\nCập nhật lần cuối lúc: ' + latest.toLocaleString('vi')
        + '\nClick the green arrow to update/Nhấn vào mũi tên xanh để cập nhật.' 
        

        fetch('https://openexchangerates.org/api/latest.json?app_id=1cd652359fc14d158810a58807b31fbe')
            .then((response) => response.json())
            .then((currency) => {
                AsyncStorage.setItem('lastUpdate', message)
                this.setState({ currency, loading:false, date:message })
                if(Platform.OS==='android')
                        ToastAndroid.show('Rates downloaded',ToastAndroid.SHORT)
                else
                    AlertIOS.alert('Rates downloaded')
            })
            .then(()=>AsyncStorage.setItem("offlineRates", JSON.stringify(this.state.currency)))
            .catch(()=> AsyncStorage.getItem("offlineRates").then((value) => {
                if (value){
                    this.setState({currency: JSON.parse(value),loading:false})
                    if(Platform.OS==='android')
                        ToastAndroid.show('Rates downloaded',ToastAndroid.SHORT)
                    else
                    AlertIOS.alert('Rates downloaded')
                }
                else
                    Alert.alert('Problem occurred','There was a problem updating real time rates.' +
                    'Make sure you have internet access')

    }))
}

    calculate = () => {
        
        // Intermediary: USD
        if (this.state.userInput !== '' && this.state.currency!=='') {
            let intermediary, target;
            intermediary=this.state.userInput/this.state.currency.rates[this.state.unitFrom]
            target = intermediary*this.state.currency.rates[this.state.unitTo]

            if(isNaN(target))
                Alert.alert('Problem occurred','Unrecognized character found. Remove it to proceed');
            else    
                this.setState({ result: this.formatNumber(parseFloat(target).toFixed(2)) });
        }
        else {
            this.setState({ result: null })
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

    isLoading(){
        if (this.state.loading)
            return(
                <ActivityIndicator size='large' color= '#346359' />
            );
        return(
            <TouchableOpacity onPress={this.updateRates}>
                <Image source={require('../assets/images/downloads-icon.png')} style={s.iconStyle}/> 
            </TouchableOpacity>
        )
    }

    render() {        
        return (
            
            <View>
                <View style={[s.headerContainer,{backgroundColor: '#318d23'}]} >
                    <Text style={s.headerText}> Currency/Tiền tệ </Text>
                </View>

                <View style={s.contentsContainer} >

                    <View style={s.inputContainer}>
                        <Picker
                            selectedValue={this.state.unitFrom}
                            itemStyle={s.pickerStyle}
                            onValueChange={this.handleFromChange}>
                            <Picker.Item label="$ USD/Đôla Mỹ/US Dollar" value="USD" />
                            <Picker.Item label="₫ VND/Việt Nam Đồng/VN Dong" value="VND" />
                            <Picker.Item label="¥ CNY(RMB)/Nhân dân tệ/Chinese Yen" value="CNY" />
                            <Picker.Item label="¥ JPY/Yên/Japanese Yen" value="JPY" />
                            <Picker.Item label="₩ KRW/Đồng Won Hàn/Korean Won" value="KRW" />
                            <Picker.Item label="€ EUR/Đồng Euro" value="EUR" /> 
                            <Picker.Item label="£ GBP/Bảng Anh/Great Britain Pound" value="GBP" />
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
                        {this.isLoading()}
                    </View>

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange}>
                            <Picker.Item label="$ USD/Đôla Mỹ/US Dollar" value="USD" />
                            <Picker.Item label="₫ VND/Việt Nam Đồng/VN Dong" value="VND" />
                            <Picker.Item label="¥ CNY(RMB)/Nhân dân tệ/Chinese Yen" value="CNY" />
                            <Picker.Item label="¥ JPY/Yên Nhật/Japanese Yen" value="JPY" />
                            <Picker.Item label="₩ KRW/Đồng Won Hàn/Korean Won" value="KRW" />
                            <Picker.Item label="€ EUR/Đồng Euro" value="EUR" /> 
                            <Picker.Item label="£ Pound/Bảng Anh" value="GBP" />
                        </Picker>
                        <View>
                            <Text style={[s.textStyle,s.resultText]}> {this.state.result} </Text>
                        </View>
                    </View>

                </View>

                <Text style={{fontStyle:'italic'}} >{this.state.date}</Text>

            </View>
        );
    }
}

export default Currency;