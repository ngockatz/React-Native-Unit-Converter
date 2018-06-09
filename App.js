
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import CardSection from './components/CardSection';
import Temp from './components/Temp';
import Currency from './components/Currency'

export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
{/*
        <CardSection>
          <Currency />
        </CardSection>
*/}
        <CardSection>
          <Currency />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>

      </ScrollView>
    );
  }
}


