
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
import Volume from './components/Volume';
import Card from './components/Card';
import Splashscreen from 'react-native-splash-screen';

export default class App extends Component {

  componentDidMount(){
    Splashscreen.hide();
  }

  render() {
    return (
      
      <ScrollView>
        <Card>
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
          <Volume />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>
        </Card>
      </ScrollView>
     
    );
  }
}


