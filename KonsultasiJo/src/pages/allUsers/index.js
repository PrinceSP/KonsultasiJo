import React, {useState,useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar,FlatList } from 'react-native'
import { Header, Gap } from '../../components';
import { Operator,People } from '../../assets';
import { firebase } from '@react-native-firebase/database';

const AllUsers = ({navigation}) => {
  const [allUsers, setAllUsers] = useState([])
  const list = [
    {
      name: 'Rivo',
      subtitle: 'woyyy',
    },
    {
      name: 'Ester',
      subtitle: 'kyp?',
    },
  ]

  // const ListChat = ({item})=>{
  //   return(
  //     <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ChatOperator',{data:item})}>
  //       <View style={styles.Wrapper}>
  //         <Operator style={styles.operator}/>
  //         <View style={styles.chatwrapper}>
  //           <Text style={styles.Nama}>{item.name}</Text>
  //           <Text style={styles.Topic}>{item.subtitle}</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }

  // const getAllUsers=()=>{
  //  firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
  //   .ref('/users')
  //   .on('value', snapshot => {
  //     setAllUsers(snapshot.val())
  //   });
  // }
  //
  // useEffect(()=>{
  //   getAllUsers()
  // },[])
  //
  // console.log(allUsers);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      <Header title="Daftar Pengguna" onBack={() => navigation.goBack()} />
    </View>
  )
}

export default AllUsers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  operator:{
    marginRight: 15,
    width: 50,
    height: 50,
  },
  Wrapper:{
    flexDirection: 'row',
    paddingRight: 100,
    borderColor: '#bfbfbf',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chatwrapper:{
    flexDirection: 'column',
  },
  Nama:{
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
  }},
  Topic: {
    color: 'black',
    fontSize: 14,
    marginBottom: 8,
},but: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EAEAEA",
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
