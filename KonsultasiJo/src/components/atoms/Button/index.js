import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({

  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
  },
  container:{
    height:54,
    borderRadius:8,
    backgroundColor:'#D92B2B',
    alignItems:'center',
    justifyContent:'center',

  }
})