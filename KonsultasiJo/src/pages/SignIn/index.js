import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Gap, TextInput } from '../../components'
import { Mata, User } from '../../assets'

const SignIn = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
       <Gap height={43}/> 
      <Text style={styles.textJudul}>KonsultasiJo</Text>
      <Gap height={61}/>
     <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.tMasuk}>MASUK</Text>
      <Gap height={102}/>
     </View>
     <View style={styles.contentWrapper}>
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder={'NIK'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
     </View>
     <Gap height={43}/>
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder={'Password'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
     </View>
      <Gap height={116}/>
      <TouchableOpacity activeOpacity={0.7}>
      <Button title={'MASUK'}/>
      </TouchableOpacity>
      <Gap height={18}/>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontSize:15,color:'black',paddingRight:7,}}>Tidak memiliki akun? </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Profile')}>
        <Text style={{fontSize:15,color:'#06659A',fontWeight:'bold'}}>Klik disini </Text>
        </TouchableOpacity>
        
     </View>
     </View>
     

      
    </View>
  )
}

export default SignIn

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