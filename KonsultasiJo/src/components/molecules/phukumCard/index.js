import React from 'react'
import { StyleSheet, Text, TextInput,  View, FlatList,Dimensions,Linking } from 'react-native'
import { Download } from '../../../assets';

import {firebase} from "@react-native-firebase/storage"
const PHukumCard = ({item}) => {
  const windowWidth = Dimensions.get('window').width;

  const maxLength = 30;
  const result = item.judul.length > maxLength ? item.judul.slice(0,maxLength - 1)+"..." : item.judul

  return (
    <View style={{paddingVertical:16,paddingHorizontal:10,height: 100,width:windowWidth/1.1,backgroundColor: 'rgba(249, 220, 220, 0.95)',elevation:10,borderRadius: 10,marginBottom:20,flexDirection:'row',justifyContent:'space-between'}}>
      <View>
        <Text style={{color:"#000",fontFamily:'Poppins-Bold'}}>{`Nomor.${item.nomor} Tahun ${item.tahun}`}</Text>
        <Text style={{color:"#000",fontFamily:'Poppins-Regular'}}>{result}</Text>
        <Text style={{color:"#000",fontFamily:'Poppins-SemiBold'}}>{item.jenis}</Text>
      </View>
      <Download height={30} width={30} onPress={()=>Linking.openURL(item.file).catch(err => console.error("Couldn't load page", err))}/>
    </View>
  )
}

export default PHukumCard
