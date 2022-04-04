import React from 'react'
import { View, Text, Dimensions, Image , TouchableOpacity, ScrollView } from 'react-native'

import Bubles from '../Components/Bubles';


const SplashScreen = ({ navigation }) => {

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView style={{flex: 1}}>
      <Bubles  />

      <Text style={{fontWeight: 'bold', fontSize: 32, color: '#01879B', alignSelf: 'center'}}>ToDo</Text>

      <View style={{ }}>
        <Image
          style={{width: windowWidth* 0.6, height: windowWidth* 0.6, alignSelf: 'center'}}
          source={require('../assets/logo_to_do.png')}
        />
      </View>

      <View style={{width: windowWidth * 0.7, alignSelf: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '900'}}>Gets Things done with Todo</Text>
        <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>

      <TouchableOpacity 
        style={{width: windowWidth * 0.8, alignSelf: 'center', backgroundColor: '#219EBA', paddingHorizontal: "10%", paddingVertical: "3%", marginTop: "20%"}}
        onPress={()=> navigation.navigate('Auth')}
      >
        <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Get Started</Text>
      </TouchableOpacity>

      


    </ScrollView>
  )
}

export default SplashScreen