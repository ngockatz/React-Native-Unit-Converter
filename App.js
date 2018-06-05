
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CardSection from './components/CardSection';
import Temp from './components/Temp';
import Currency from './components/Currency'

export default class App extends Component<Props> {
  render() {
    return (
      <View>

        <CardSection>
          <Currency />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>

        
      </View>
    );
  }
}


