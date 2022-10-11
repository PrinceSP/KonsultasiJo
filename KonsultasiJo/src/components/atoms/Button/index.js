import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,...rest}) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
    backgroundColor:'#000000',
    alignItems:'center',
    justifyContent:'center',
  }
})
