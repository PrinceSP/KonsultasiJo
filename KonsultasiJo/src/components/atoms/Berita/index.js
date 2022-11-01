import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Linking } from 'react-native'

const Berita = ({item}) => {
  return (
    <TouchableOpacity style={styles.berita} onPress={()=>Linking.openURL(item.link).catch(err => console.error("Couldn't load page", err))}>
        <View style={{flexDirection:'row'}}>
            <View style={{paddingLeft:8,justifyContent:'center',marginTop:20,marginRight:80}}>
                <Text>{item.judul}</Text>
            </View>
            <Image source={{uri:item.image}} style={styles.foto}/>
        </View>
    </TouchableOpacity>
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
        marginTop:40,
        marginBottom:20,
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
