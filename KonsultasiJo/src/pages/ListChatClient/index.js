import React, {useState,useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar,FlatList } from 'react-native'
import { Header, Gap } from '../../components';
import { Operator,People } from '../../assets';
import { firebase } from '@react-native-firebase/database';
import moment from 'moment-timezone';
import {useSelector} from 'react-redux'

const ListChatClients = ({navigation}) => {
  const {userData} = useSelector(state => state.User);

  const [chatList, setchatList] = useState([]);

  useEffect(() => {
    firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/chatlist/'+userData?.id)
    .on('value', snapshot => {
      if (snapshot.val() != null) {
        const data = Object.values(snapshot.val())

        setchatList(data.sort((a,b)=> b.sendTime < a.sendTime ? -1 : 1))
      }
    });
  }, []);

  const ListChat = ({item})=>{
    return(
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Chat',{receiverData:item})}>
        <View style={styles.Wrapper}>
          <Operator style={styles.operator}/>
          <View style={styles.chatwrapper}>
            <View>
              <Text style={styles.Nama}>{item.name}</Text>
              <Text style={styles.Topic}>{item.lastMsg}</Text>
            </View>
            <Text style={styles.Topic}>{moment(item.sendTime).format('HH:mm')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      <Header title="Pesan" onBack={() => navigation.goBack()} />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={chatList}
        renderItem={ListChat}
        />
    </View>
  )
}

export default ListChatClients

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
    width:'100%',
    // backgroundColor:'red'
  },
  chatwrapper:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
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
