import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, Gap } from '../../components';

const AboutUs = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
        <Header title="About Us" onBack={() => navigation.goBack()} />        
        <Text style={styles.text}>Ester Blg jgn dlu isi apa apa</Text>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    text:{
        fontSize: 50,        
    },
});