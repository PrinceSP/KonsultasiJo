import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Berita = ({item}) => {
  return (
    <View style={styles.berita}>
        <View style={{flexDirection:'row'}}>
            <View style={{paddingLeft:8,justifyContent:'center',marginTop:20,marginRight:80}}>
                <Text>{item.judul}</Text>
            </View>
            <Image source={{uri:item.image}} style={styles.foto}/>
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
