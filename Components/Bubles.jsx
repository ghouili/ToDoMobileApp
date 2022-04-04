import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bubles = () => {

  return (
    <View>
      <View style={{width: windowWidth* 0.4, height: windowWidth* 0.4, borderRadius: 150, backgroundColor: 'rgba(128, 200, 215, 0.7)', marginTop: -windowHeight*0.08, marginLeft: -windowWidth * 0.01 }}></View>
      <View style={{width: windowWidth* 0.4, height: windowWidth* 0.4, borderRadius: 150, backgroundColor: 'rgba(128, 200, 215, 0.7)', marginTop: -windowHeight*0.12, marginLeft: -windowWidth * 0.15 }}></View>
    </View>
  )
}

export default Bubles