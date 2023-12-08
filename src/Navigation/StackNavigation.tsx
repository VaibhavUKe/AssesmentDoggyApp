import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../Screens/ListScreen';
import SplashScreen from '../Screens/SplashScreen';
import DetailScreen from '../Screens/DetailScreen';
import LikedPetsScreen from '../Screens/LikedPetsScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="LikedPetsScreen" component={LikedPetsScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
