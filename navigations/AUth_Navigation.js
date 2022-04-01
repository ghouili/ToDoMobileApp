import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Authenticate from '../Screens/Authenticate';
import SplashScreen from '../Screens/SplashScreen';

const AUth_Navigation = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={Authenticate} />
    </Stack.Navigator>
  )
}

export default AUth_Navigation