import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Screens/HomeScreen';
import DeatailScreen from '../Screens/DeatailScreen';

const Tab = createBottomTabNavigator();

const BottomTabNabigation = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name="Home"
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <AntDesign name="home" color={color} size={26} />
            )
        }}
        />
      <Tab.Screen name="Details" 
        component={DeatailScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-details-outline" color={color} size={26} />
            )
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNabigation