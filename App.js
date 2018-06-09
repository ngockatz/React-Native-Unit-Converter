
import React, { Component } from 'react';
import {
  Platform,
  Linking,
  Text,
  ScrollView, View
} from 'react-native';

import CardSection from './components/CardSection';
import Temp from './components/Temp';
import Currency from './components/Currency';
import Weight from './components/Weight';
import Distance from './components/Distance';
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
          <Distance />
        </CardSection>

        <CardSection>
          <Weight />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>

      </ScrollView>
     
    );
  }
}


