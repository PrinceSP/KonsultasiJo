import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Perkawinan,Waris,Kekeluargaan, Perikatan, Kekayaan,Perceraian,PNamaBaik,Lainnya,Pencurian,Penganiayaan,Pembunuhan,PerusakanBarang,Ite, Perselingkuhan, Pemerasan } from '../../assets/icon'
import { AKategori, Header } from '../../components'


const Kategori = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header title="Menu Operator" onBack={() => navigation.goBack()}/>
      <View style={{alignItems:'center',flex:1}}>
     <View style={styles.perdata}>
      <Text>Hukum Perdata</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View >
        <Perkawinan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Waris/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Kekeluargaan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Perikatan/>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View >
        <Kekayaan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View >
        <Perceraian/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View >
        <PNamaBaik/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View >
        <Lainnya/>
        </View>
        </TouchableOpacity>
      </View>
      </View>
     <View style={styles.pidana}>
     <Text>Hukum Pidana</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Pencurian/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Penganiayaan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Pembunuhan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <PerusakanBarang/>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Ite/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Perselingkuhan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Pemerasan/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatClient')}>
        <View>
        <Lainnya/>
        </View>
        </TouchableOpacity>
      </View>
     </View>
     </View>

    </View>
  )
}

export default Kategori

const styles = StyleSheet.create({

  perdata:{
    paddingTop:10,
    paddingBottom:40,
  }
})