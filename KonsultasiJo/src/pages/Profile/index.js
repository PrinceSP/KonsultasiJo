import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, Gap, TextInput } from '../../components';
import { ProfilePicture } from '../../assets';
import {useSelector} from 'react-redux'

const Profile = ({navigation}) => {
  const {userData} = useSelector(state=>state.User)
  return (
    <View style={styles.Background}>
        <Header title="Profile" onBack={() => navigation.goBack()} />
        <View style={styles.PictureWrapper}>
          <ProfilePicture />
        </View>
        <View style={styles.Container}>
          <Text style={styles.Judul}>Nama</Text>
          <Text style={styles.Isi}>Nariva Wagey</Text>
          <Text style={styles.Judul}>NIK</Text>
          <Text style={styles.Isi}>{userData.nik}</Text>
          <Text style={styles.Judul}>Email</Text>
          <Text style={styles.Isi}>{userData.email}</Text>
        </View>
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
});
