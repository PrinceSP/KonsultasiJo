import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { Mata, User } from '../../assets'
import { firebase } from '@react-native-firebase/database';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';
import Auth from '../../configs/auth';
import Toast from 'react-native-toast-message'

const ForgotPassword = ({navigation}) => {

  const dispatch = useDispatch();

  const [nik, setnik] = useState('');
  const [pass, setpass] = useState('');
  const [confirmpass, setconfirmpass] = useState('');
  const [show,setshow] = useState(false)
  const [isUser,setIsUser] = useState([])

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
        if (userData?.role!=='customer') {
          console.log("Not a customer!");
          Toast.show({
            type: 'error',
            text1: 'Nope!',
            text2: 'Not a customer!'
          });
          return false;
        }
        Toast.show({
          type: 'success',
          text1: 'Yeay!',
          text2: 'account found!'
        });
        setIsUser(userData)
        setshow(true)
      })
    } catch (e) {
      console.log(e);
    }
    setnik('')
    setpass('')
    setconfirmpass('')
  }

  const updatePassword = ()=>{
    if (pass===confirmpass) {
      firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
      .ref('/users/'+isUser.id)
      .update({
        password:pass
      })
      .then(()=>{
        Toast.show({
          type: 'success',
          text1: 'Yeay!',
          text2: 'Your password is updated!'
        });
        setTimeout(()=>{
          navigation.navigate('SignIn')
        },2000)
      })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Nayye!',
        text2: 'password must be the same!'
      });
    }
  }

  // console.log(isUser);

  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <Gap height={61}/>
     <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.tMasuk}>Lupa Sandi</Text>
      <Gap height={102}/>
     </View>
     <View style={styles.contentWrapper}>
     {show === true ? null : <View style={{flexDirection:'row'}}>
       <Input placeholder={'NIK'} defaultValue={nik} onChangeText={(value)=>setnik(value)}/>
       <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
     </View>}
     <Gap height={43}/>
      {show === true ?
      <View>
        <View style={{flexDirection:'row'}}>
          <Input placeholder={'New Password'} secureTextEntry={true} defaultValue={pass} onChangeText={(value)=>setpass(value)}/>
          <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
        </View>
        <Gap height={43}/>
        <View style={{flexDirection:'row'}}>
          <Input placeholder='Confirm New Password' secureTextEntry={true} defaultValue={confirmpass} onChangeText={(value)=>setconfirmpass(value)}/>
          <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
        </View>
      </View> : null}
      <Gap height={80}/>
      <Button title="SELESAI" onPress={show===false ? loginUser : updatePassword}/>
      <Gap height={18}/>
     </View>
     <Toast autoHide={true} visibilityTime={3000}/>
    </View>
  )
}

export default ForgotPassword

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
