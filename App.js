
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailedInfo from './src/DetailedInfo'
import Home from './src/home'

const Stack = createStackNavigator();

export default function Navigator() {
return (

  <NavigationContainer>
    <Stack.Navigator   screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="DetailedInfo" component={DetailedInfo} />
    </Stack.Navigator>
  </NavigationContainer>

);
}

