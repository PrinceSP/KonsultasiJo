import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = ({placeholder}) => {
  return (
    <View>
      <TextInputRN style={styles.textInput} placeholder={placeholder} placeholderTextColor={'#696868'}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({

    textInput:{
        borderWidth:1,
        borderColor:'white',
        borderBottomColor:'#696868',
        paddingVertical:6,
        fontSize:16,
        width:279,
    },
})