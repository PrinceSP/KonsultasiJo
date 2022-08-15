import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Berita = ({title}) => {
  return (
    <View style={styles.berita}>
        <View style={{flexDirection:'row'}}>
            <View style={{paddingLeft:8,justifyContent:'center',marginTop:20,marginRight:80}}>
                <Text>{title}</Text>
            </View>
            <View style={styles.foto}>
                <Text>foto</Text>
            </View>
        </View>
    </View>
  )
}

export default Berita

const styles = StyleSheet.create({
    berita:{
        backgroundColor:'white',
        marginHorizontal:22,
        height:84,
        borderRadius:7,
        elevation:10,
        marginBottom:40,
        
    },
    foto:{
        position:'absolute',
        alignItems:'center',
        backgroundColor:'#D1D1D1',
        height:58,
        width:58,
        marginLeft:273,
        marginTop:13,
        borderRadius:10
    }
})