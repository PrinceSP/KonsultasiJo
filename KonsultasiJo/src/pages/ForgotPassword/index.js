import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { Mata, User } from '../../assets'
import { firebase } from '@react-native-firebase/database';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';
import Auth from '../../configs/auth';
import Toast from 'react-native-toast-message'
import { sendEmail } from '../../configs/sendEmail';
import { useSelector } from 'react-redux';
import uuid from 'react-native-uuid'

const generateOTP=()=>{
  let otp = ''
  for (let i = 0; i <=3; i++) {
    const randomOTP = Math.round(Math.random()*9)
    otp +=randomOTP
  }
  return otp
}

const ForgotPassword = ({navigation}) => {
  const { userData } = useSelector(state => state.User);

  const [nik, setnik] = useState('');
  const [pass, setpass] = useState('');
  const [confirmpass, setconfirmpass] = useState('');
  const [otp, setotp] = useState('');
  const [show,setshow] = useState(false)
  const [isUser,setIsUser] = useState([])

  const loginUser = async () => {
    try {
      firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
      .ref('/users/')
      .orderByChild("email")
      .equalTo(nik)
      .once('value')
      .then( async snapshot => {
        if (snapshot.val() == null) {
           console.log("Invalid NIK!");
           Toast.show({
             type: 'error',
             text1: 'Terjadi kesalahan!',
             text2: 'NIK anda salah!'
           });
           return false;
        }
        let userData = Object.values(snapshot.val())[0];
        if (userData?.role!=='customer') {
          console.log("Not a customer!");
          Toast.show({
            type: 'error',
            text1: 'Nope!',
            text2: 'Anda bukan pengguna!'
          });
          return false;
        }
        Toast.show({
          type: 'success',
          text1: 'Yeay!',
          text2: 'Akun telah ditemukan!'
        });
        setTimeout(()=>{
          setIsUser(userData)
          setshow(true)
          const OTP = generateOTP()
          sendEmail(
              nik,
                 'Your OTP Code',
              OTP
          ).then(() => {
              console.log('Your message was successfully sent!');
          });
          const id = uuid.v4()
          firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
          .ref('/verifyToken/'+id)
          .set({otpCode:OTP})
          .then(()=>{
            Toast.show({
              type: 'success',
              text1: 'Yeay!',
              text2: 'Kode otp anda sedang dikirim, periksa email anda!'
            });
          })
        },1500)
      })
    } catch (e) {
      console.log(e);
    }
    setnik('')
    setpass('')
    setconfirmpass('')
    setotp('')
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
          text2: 'Sandi anda berhasil diperbarui!'
        });
        setTimeout(()=>{
          navigation.navigate('SignIn')
        },2000)
      })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Nayye!',
        text2: 'Kata sandi harus sama!'
      });
    }
  }

  // console.log(isUser);
  // <View>
  //   <View style={{flexDirection:'row',borderBottomWidth:1}}>
  //     <Input placeholder={'New Password'} secureTextEntry={true} defaultValue={pass} onChangeText={(value)=>setpass(value)}/>
  //     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
  //   </View>
  //   <Gap height={43}/>
  //   <View style={{flexDirection:'row',borderBottomWidth:1}}>
  //     <Input placeholder='Confirm New Password' secureTextEntry={true} defaultValue={confirmpass} onChangeText={(value)=>setconfirmpass(value)}/>
  //     <View style={{justifyContent:'center',alignItems:'flex-end',}}><Mata/></View>
  //   </View>
  // </View>
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <Gap height={61}/>
     <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.tMasuk}>Lupa Sandi</Text>
      <Gap height={102}/>
     </View>
     <View style={styles.contentWrapper}>
     {show === true ? null : <View style={{flexDirection:'row',borderBottomWidth:1}}>
       <Input placeholder={'Email'} defaultValue={nik} onChangeText={(value)=>setnik(value)}/>
       <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
     </View>}
     <Gap height={43}/>
      {show === true ?
      <View style={{flexDirection:'row',borderBottomWidth:1}}>
        <Input placeholder={'OTP'} defaultValue={otp} onChangeText={(value)=>setotp(value)}/>
        <View style={{justifyContent:'center',alignItems:'flex-end',}}><User/></View>
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
