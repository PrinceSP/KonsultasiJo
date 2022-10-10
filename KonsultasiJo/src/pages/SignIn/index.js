import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Gap, TextInput } from '../../components'
import { Mata, User } from '../../assets'

const SignIn = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
       <Gap height={43}/>
      <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignIn')}>
      <Text style={styles.textJudul}>Client</Text>

        </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignInOperator')}>
      <Text style={{color:'black',fontWeight:'900',paddingRight:28,fontSize:16}}>Operator</Text>
      </TouchableOpacity>
      </View>
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
      <Button title={'MASUK'} onPress={()=>navigation.navigate('Menu')}/>
      <Gap height={18}/>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontSize:15,color:'black',paddingRight:7,}}>Tidak memiliki akun? </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={{fontSize:15,color:'#D92B2B',fontWeight:'bold'}}>Klik disini </Text>
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
        color:'#D92B2B',
        fontSize:16,
        paddingRight:5,
        alignItems:'center'
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
