import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Gap, TextInput } from '../../components'
import { Chat, Mata, User } from '../../assests'

const SignUp = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
       <Gap height={43}/> 
      <Text style={styles.textJudul}>KonsultasiJo</Text>
      <Gap height={61}/>
     <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.tMasuk}>DAFTAR</Text>
      <Gap height={102}/>
     </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.contentWrapper}>
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder={'Nama'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
     </View>
     <Gap height={42}/>
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder={'Email'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Chat/></View>
     </View>
     <Gap height={42}/>
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder={'Kata Sandi'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
     </View>
     <Gap height={42}/>
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder={'Ulangi Kata Sandi'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
     </View>
      <Gap height={116}/>
      <TouchableOpacity activeOpacity={0.7}>
      <Button title={'Lanjut'}/>
      </TouchableOpacity>
     <Gap height={70}/>
     </View>
    </ScrollView>
     

      
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    textJudul:{
        fontWeight:'900',
        color:'#06659A',
        fontSize:30,
        paddingLeft:14,
    },
    contentWrapper:{
        paddingHorizontal:45,

    },
    tMasuk:{
        color:'black',
        fontSize:36,
        fontWeight:'bold',
    }
})