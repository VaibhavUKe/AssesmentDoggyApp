import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import { Provider } from 'react-redux';
import store from './src/ReduxConfig/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      </Provider>
   
  );
};

export default App;

const styles = StyleSheet.create({});
