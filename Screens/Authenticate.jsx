import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'

import Bubles from '../Components/Bubles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Authenticate = ({ navigation }) => {


  return (
    <View style={ styles.container} >
        <Bubles />
        <Text style={styles.big_title}>ToDo</Text>
        <View style={styles.view_sous_title}>
            <Text style={styles.sou_title}>Gets Things done with Todo!</Text>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet texte .</Text>
        </View>

        <View style={{marginTop: "15%", paddingHorizontal: "4%"}}>

            <TextInput
                style={{height: windowHeight * 0.06, marginBottom: "4%", borderWidth: 1, paddingHorizontal: "5%", borderRadius: 20, backgroundColor: 'rgb(230,238,241)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholderTextColor='#6d6e6e'
                
                placeholder="FullName"
                keyboardType="numeric"
            />

            <TextInput
                style={{height: windowHeight * 0.06, marginBottom: "4%", borderWidth: 1, padding: 10, borderRadius: 20, backgroundColor: 'rgb(230,238,241)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholderTextColor='#6d6e6e'
                
                placeholder="Your Email"
                keyboardType="numeric"
            />

            <TextInput
                style={{height: windowHeight * 0.06, marginBottom: "4%", borderWidth: 1, padding: 10, borderRadius: 20, backgroundColor: 'rgb(230,238,241)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholderTextColor='#6d6e6e'
                
                placeholder="Password"
                keyboardType="numeric"
            />

            <TextInput
                style={{height: windowHeight * 0.06, marginBottom: "4%", borderWidth: 1, padding: 10, borderRadius: 20, backgroundColor: 'rgb(230,238,241)', borderColor: 'white', fontSize: 16, fontWeight: '700'}}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholderTextColor='#6d6e6e'
                
                placeholder="Confirm Password"
                keyboardType="numeric"
            />
        </View>

        <TouchableOpacity 
        style={{width: windowWidth * 0.9, alignSelf: 'center', backgroundColor: '#219EBA', paddingHorizontal: "10%", paddingVertical: "3%", marginTop: "10%"}}
        onPress={()=> navigation.navigate('Splash')}
        >
            <Text style={{fontWeight: '900', color: 'white', alignSelf: 'center', fontSize: 16}}>Get Started</Text>
        </TouchableOpacity>
        <View style={{width: windowWidth * 0.45, alignSelf: 'center',  flexDirection: 'row', marginTop: "2%"}}>
            <Text style={{color: 'black',  }}>Already have an Account?</Text>
            <TouchableOpacity style={{}}><Text style={{color: '#219EBA' }} >Log in</Text></TouchableOpacity>
        </View>

    </View>
  )
}

export default Authenticate

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    big_title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#01879B',
        alignSelf: 'center'
    },
    view_sous_title: {
        width: windowWidth * 0.7,
        alignSelf: 'center',
        marginTop: "10%"
    },
    sou_title : {
        fontSize: 20, 
        fontWeight: '900',
        alignSelf: 'center'
    }

})