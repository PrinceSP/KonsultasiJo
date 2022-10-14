import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { Mata, User } from '../../assets'
import { firebase } from '@react-native-firebase/database';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';
import Auth from '../../configs/auth';
import Toast from 'react-native-toast-message'

const SignIn = ({navigation}) => {

  const dispatch = useDispatch();

  const [nik, setnik] = useState('');
  const [pass, setpass] = useState('');

  const loginUser = async () => {
    try {
      firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
      .ref('/users/')
      .orderByChild("nik")
      .equalTo(nik)
      .once('value')
      .then( async snapshot => {
        if (snapshot.val() == null) {
           console.log("Invalid NIK!");
           Toast.show({
             type: 'error',
             text1: 'Nope!',
             text2: 'Invalid NIK!'
           });
           return false;
        }
        let userData = Object.values(snapshot.val())[0];
        if (userData?.password != pass) {
           console.log("Invalid Password!");
           Toast.show({
             type: 'error',
             text1: 'Nope!',
             text2: 'Invalid Password!'
           });
           return false;
        }

        console.log('User data: ', userData);
        dispatch(setUser(userData));
        await Auth.setAccount(userData);
        console.log("Login Successfully!");
        Toast.show({
          type: 'success',
          text1: 'Yeay 👋!',
          text2: 'Login Successfully!'
        });
        setnik('')
        setpass('')
        setTimeout(()=>{
          navigation.navigate("Menu")
        },3000)
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={{backgroundColor:'white',flex:1}}>
       <Gap height={43}/>
      <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("SignIn")}>
          <Text style={styles.textJudul}>Client</Text>
        </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("SignInOperator")}>
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
     <Input placeholder={'NIK'} defaultValue={nik} onChangeText={(value)=>setnik(value)}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
     </View>
     <Gap height={43}/>
     <View style={{flexDirection:'row'}}>
     <Input placeholder={'Password'} defaultValue={pass} onChangeText={(value)=>setpass(value)}/>
     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
     </View>
      <Gap height={116}/>
      <Button title={'MASUK'} onPress={loginUser}/>
      <Gap height={18}/>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
       <Text style={{fontSize:15,color:'black',paddingRight:7,}}>Tidak memiliki akun? </Text>
       <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={{fontSize:15,color:'#D92B2B',fontWeight:'bold'}}>Klik disini </Text>
       </TouchableOpacity>
      </View>
     </View>
     <Toast autoHide={true} visibilityTime={2000}/>
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
