
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import CardSection from './components/CardSection';
import Temp from './components/Temp';
import Currency from './components/Currency';
/*
https://github.com/peacechen/react-native-modal-selector
https://facebook.github.io/react-native/docs/actionsheetios.html
https://github.com/sohobloo/react-native-modal-dropdown
https://github.com/alinz/react-native-dropdown
*/

export default class App extends Component {
  render() {
    return (
      <ScrollView>

        <CardSection>
          <Currency />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>

      </ScrollView>
    );
  }
}


