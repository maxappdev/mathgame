import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Game from './src/screens/Game'
import Home from './src/screens/Home'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    }>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
