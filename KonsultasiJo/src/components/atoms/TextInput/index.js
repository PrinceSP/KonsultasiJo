import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({placeholder,...rest}) => {
  return (
    <TextInput style={styles.textInput} placeholder={placeholder} placeholderTextColor={'#696868'} {...rest}/>
  )
}

export default Input

const styles = StyleSheet.create({
    textInput:{        
        paddingVertical:6,
        fontSize:16,
        width:279,
    },
})
