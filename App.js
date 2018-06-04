/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CardSection from './components/CardSection';
import Temp from './components/Temp';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <CardSection>
          <Temp />
        </CardSection>
      </View>
    );
  }
}


