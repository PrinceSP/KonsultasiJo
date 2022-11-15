import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { Chat, Mata, User } from '../../assets'
import uuid from 'react-native-uuid'
import { firebase } from '@react-native-firebase/database';
import Toast from 'react-native-toast-message'

const SignUp = ({navigation}) => {

  // visibility
  const [isSecureEntry,setIsSecureEntry] = useState(true);

  const [userInfos,setUserInfos] = useState({
    nik:'',
    email:'',
    password:'',
    name:'',
  })

  const {nik,email,password,name} = userInfos

  const niks = [
    "1050245708900001",
    "1050332708909002",
    "1050223708909003",
    "1930748708909004",
    "2130223708909005",
    "7300223708909006",
    "1050223708909007",
    "1050245708900008",
    "1050332708909009",
    "1050223708909010",
    "1930748708909011",
    "2130223708909012",
    "7300223708909013",
    "1050223708909014",
    "1050245708900015",
    "1050332708909016",
    "1002237089090017",
    "1937487089090018",
    "2130223709090019",
    "7300223709090020",
    "1050223709090021",
    "1050247089000022",
    "1050332708090023",
    "1050227089090024",
    "1930771289733325",
    "2130223709090026",
    "7302237089090027",
    "1050237079090028",
    "7002237089090029",
    "1050223709090030",
  ]

  const datas = {
    id:uuid.v4(),
    name,
    nik,
    email,
    password,
    role:"customer"
  }

  const registerUser = ()=>{
    const filteredItems = niks.filter(item=>  item===nik)
    // console.log(filteredItems);
    if (!filteredItems[0]) {
      // console.log(filteredItems[0]===nik);
      Toast.show({
        type: 'error',
        text1: 'Nayy!',
        text2: 'Your NIK is not registered!'
      });
      return false
    }
    firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/users/'+datas.id)
    .set(datas)
    .then(()=>{
      Toast.show({
        type: 'success',
        text1: 'Yeay!',
        text2: 'Your account is registered!'
      });
      setUserInfos({...userInfos,nik:'',email:'',password:'',name:''})
      setTimeout(()=>{
        navigation.navigate("SignIn")
      },1500)
    })
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
     <Toast autoHide={true} visibilityTime={2000}/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentWrapper}>
         <View style={{flexDirection:'row',borderBottomWidth:1}}>
         <Input defaultValue={nik} onChangeText={(value)=>setUserInfos({...userInfos,nik:value})} placeholder={'NIK'}/>
         <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
         </View>
         <Gap height={42}/>
         <View style={{flexDirection:'row',borderBottomWidth:1}}>
         <Input defaultValue={name} onChangeText={(value)=>setUserInfos({...userInfos,name:value})} placeholder={'Name'}/>
         <View style={{justifyContent:'center',alignItems:'flex-end',}}><Chat/></View>
         </View>
         <Gap height={42}/>
         <View style={{flexDirection:'row',borderBottomWidth:1}}>
         <Input defaultValue={email} onChangeText={(value)=>setUserInfos({...userInfos,email:value})} placeholder={'Email'}/>
         <View style={{justifyContent:'center',alignItems:'flex-end',}}><Chat/></View>
         </View>
         <Gap height={42}/>
         <View style={{flexDirection:'row',borderBottomWidth:1}}>
         <Input defaultValue={password} onChangeText={(value)=>setUserInfos({...userInfos,password:value})} placeholder={'Password'} secureTextEntry={isSecureEntry}/>         
         <TouchableOpacity onPress={() => {
            setIsSecureEntry((prev) => !prev)
            }} >
            <Mata style={{marginTop:6}}/>
          </TouchableOpacity>         
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
