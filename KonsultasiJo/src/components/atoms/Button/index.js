import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,width=0,backgroundColor='#000',color="#fff",...rest}) => {
  const styles = StyleSheet.create({

    text:{
      color,
      fontWeight:'bold',
      fontSize:14,
    },
    container:{
      width,
      height:54,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor
    }
  })

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
