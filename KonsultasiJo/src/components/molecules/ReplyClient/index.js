import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReplyClient = ({containerMarginRight=20, containerMarginLeft=125, jam='right'}) => {
  return (
    <View style={styles.container(containerMarginLeft, containerMarginRight)}> 
        <Text style={styles.time(jam)}>05 Jun 2022 - 09:51</Text>       
        <Text style={styles.text}>Client  ---  sdfdsdjalkfjlsdjfl sadfsdaf asddf s adf sda f sa fd saf    sdaf sda fs dafsdaf asdfsdafsda  fsdafsafsda  sadfsda fsda f sda fsds f sa fsda fds f sdaf sda fsd af sda f sda fs a fsd af sda fsa fd sa f sjdlkfjlkasdlfjlsdjdfsdkalfjsdlkfjslkdfjls</Text>        
    </View>
  )
}

export default ReplyClient 

const styles = StyleSheet.create({  
    container: (containerMarginLeft, containerMarginRight) => ({
        marginRight: containerMarginRight,
        marginLeft: containerMarginLeft,
    }),   
    time: (jam) => ({
        textAlign: jam,        
    }),
    text:{                
        borderRadius: 10,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.00,
        elevation: 5,
        padding: 10,
        backgroundColor: '#EAEAEA',
    },
});