import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { Chat, Mata, User } from '../../assets'
import uuid from 'react-native-uuid'
import { firebase } from '@react-native-firebase/database';

const SignUp = ({navigation}) => {
  const [userInfos,setUserInfos] = useState({
    nik:'',
    email:'',
    password:'',
    passwordConfirm:'',
  })

  const {nik,email,password,passwordConfirm} = userInfos

  const datas = {
    id:uuid.v4(),
    nik,
    email,
    password,
  }

  const registerUser = async()=>{
    await firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/users/'+datas.id)
    .set(datas)
    .then(()=>{
      setUserInfos({...userInfos,nik:'',email:'',password:'',passwordConfirm:''})
    })
    navigation.navigate("SignIn")
  }

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
     <Input defaultValue={nik} onChangeText={(value)=>setUserInfos({...userInfos,nik:value})} placeholder={'NIK'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
     </View>
     <Gap height={42}/>
     <View style={{flexDirection:'row'}}>
     <Input defaultValue={email} onChangeText={(value)=>setUserInfos({...userInfos,email:value})} placeholder={'Email'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Chat/></View>
     </View>
     <Gap height={42}/>
     <View style={{flexDirection:'row'}}>
     <Input defaultValue={password} onChangeText={(value)=>setUserInfos({...userInfos,password:value})} placeholder={'Kata Sandi'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
     </View>
     <Gap height={42}/>
     <View style={{flexDirection:'row'}}>
     <Input defaultValue={passwordConfirm} onChangeText={(value)=>setUserInfos({...userInfos,passwordConfirm:value})} placeholder={'Ulangi Kata Sandi'}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
     </View>
     <Gap height={116}/>
     <Button title={'Lanjut'} onPress={registerUser}/>
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
        color:'#D92B2B',
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
