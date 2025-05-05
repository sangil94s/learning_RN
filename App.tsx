import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreens from './HomeScreens';
import DetailScreens from './DetailScreens';


function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Detail" component={DetailScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;