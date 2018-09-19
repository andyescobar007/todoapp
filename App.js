import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DrawerRaiz from './Componentes/DrawerRaiz/DrawerRaiz';

export default class App extends Component {
  render() {
    return (
      <DrawerRaiz />
    );
  }
}