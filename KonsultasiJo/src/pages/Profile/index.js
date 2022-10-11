import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Header, Gap, TextInput } from '../../components';
import { ProfilePicture } from '../../assets';
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import Auth from '../../configs/auth';

const Profile = ({navigation}) => {
  const {userData} = useSelector(state=>state.User)

  const logout=async()=>{
     await Auth.removeAccount()
     navigation.navigate("AuthCustomerStack",{screen:"SignIn"})
     // console.log(navigation.navigate("AuthCustomerStack"));
  }

  return (
    <View style={styles.Background}>
        <Header title="Profile" onBack={() => navigation.goBack()} />
        <View style={styles.PictureWrapper}>
          <ProfilePicture />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <Text style={styles.Judul}>Nama</Text>
          <Text style={styles.Isi}>{userData.name}</Text>
          <Text style={styles.Judul}>NIK</Text>
          <Text style={styles.Isi}>{userData.nik}</Text>
          <Text style={styles.Judul}>Email</Text>
          <Text style={styles.Isi}>{userData.email}</Text>
        </View>
      <View style={styles.exit}>
      <TouchableOpacity activeOpacity={0.7} onPress={logout}>
        <Icon name="exit" size={45} color="#D92B2B" />
      <Text style={{color:'#696868'}}>Keluar</Text>
      </TouchableOpacity>
      </View>
        </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  Background: {
    backgroundColor: 'white',
    flex: 1,
  },
  Judul:{
    marginHorizontal: 12,
    color: '#3E7268',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Isi:{
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor:'#F4F4F4',
    borderBottomColor:'#696868',
    paddingVertical:6,
    fontSize:15,
    color: 'black',
    width:365,
  },
  Container: {
    marginTop: 10,
    backgroundColor: '#F4F4F4',
    paddingTop: 15,
    paddingBottom: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,
    elevation: 5,
  },
  PictureWrapper: {
    alignItems: 'center',
  },
  exit:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginRight:10,
    marginBottom:15,
    marginTop:10,
  },
});
