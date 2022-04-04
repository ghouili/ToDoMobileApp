import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Authenticate from '../Screens/Authenticate';
import SplashScreen from '../Screens/SplashScreen';
/**
 * The main App component.       
 * @returns None       
 */
import BottomTabNabigation from './BottomTabNabigation';

const AUth_Navigation = ({navigation}) => {
  const auth = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      {auth?(
        <>
          <Stack.Screen name="Main" component={BottomTabNabigation} />
        </>
      ):
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Auth" component={Authenticate} />
        </>
      } 
      
    </Stack.Navigator>
  )
}

export default AUth_Navigation