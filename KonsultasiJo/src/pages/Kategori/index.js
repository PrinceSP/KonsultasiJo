import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Perkawinan,Waris,Kekeluargaan, Perikatan, Kekayaan,Perceraian,PNamaBaik,Lainnya,Pencurian,Penganiayaan,Pembunuhan,PerusakanBarang,Ite, Perselingkuhan, Pemerasan } from '../../assets/icon'
import { AKategori, Header } from '../../components'
import { firebase } from '@react-native-firebase/database';
import uuid from "react-native-uuid"
import {useSelector} from 'react-redux'

const Kategori = ({navigation}) => {
  const {userData} = useSelector(state=>state.User)
  const [allUser,setAllUser] = useState([])
  // console.log(allUser)
  const getOperator = async()=>{
    await firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref("/users/")
    .once('value')
    .then(snapshot=>{
      const operator = Object.values(snapshot.val()).filter(user=>user.id!=userData.id && user.role=="operator")
      // console.log(operator);
      if (operator) {
        setAllUser(operator);
      }

    })
  }
  // console.log(userData);
  const createChatList = (data,operator) => {
    console.log(data?.id);
    firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
      .ref('/chatlist/' + userData.id + '/' + data?.id)
      .once('value')
      .then(snapshot => {

        if (snapshot.val() == null) {
          let roomId = uuid.v4();
          let myData = {
            roomId,
            id: userData.id,
            name: userData.name,
            email: userData.email,
            about: userData.about,
            lastMsg: '',
          };
          firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
            .ref('/chatlist/' + data?.id + '/' + userData.id)
            .update(myData)
            .then(() => console.log('Data updated.'));

          delete data['password'];
          data.lastMsg = '';
          data.roomId = roomId;
          firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
            .ref('/chatlist/' + userData.id + '/' + data?.id)
            .update(data)
            .then(() => console.log('Data updated.'));
            
          navigation.navigate('ChatClient',{receiverData:data})
        } else {
          navigation.navigate('ChatClient', {receiverData: snapshot.val()});
        }
      });
  };

  useEffect(()=>{
    getOperator()
  },[])

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Header title="Konsultasi" onBack={() => navigation.goBack()}/>
      <View style={{paddingHorizontal:15}}>
     <View style={styles.perdata}>
      <Text style={{fontWeight:'600',fontSize:17}}>Hukum Perdata</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
          <View style={styles.kategori}>
            <Perkawinan/>
            <View style={{paddingTop:8}}>
              <Text>Perkawinan</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <Waris/>
        <Text>   Waris</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <Kekeluargaan/>
        <Text>Kekeluargaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <Perikatan/>
        <Text>Perikatan</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <Kekayaan/>
        <Text>Kekayaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <Perceraian/>
        <Text>Perceraian</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <PNamaBaik/>
        <Text>Pencemaran {'\n'} Nama Baik</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne")}>
        <View style={styles.kategori}>
        <Lainnya/>
        <Text>Lainnya</Text>
        </View>
        </TouchableOpacity>
      </View>
      </View>
     <View style={styles.pidana}>
     <Text style={{fontWeight:'600',fontSize:17}}>Hukum Pidana</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Pencurian/>
        <Text>Pencurian</Text>
        </View >
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Penganiayaan/>
        <Text>Penganiayaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Pembunuhan/>
        <Text>Pembunuhan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <PerusakanBarang/>
        <Text>Perusakan{'\n'}   Barang</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Ite/>
        <Text>      ITE</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Perselingkuhan/>
        <Text>Perselingkuhan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Pemerasan/>
        <Text>Pemerasan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo")}>
        <View style={styles.kategori}>
        <Lainnya/>
        <Text>Lainnya</Text>
        </View>
        </TouchableOpacity>
      </View>
     </View>
     </View>

    </View>
  )
}

export default Kategori

const styles = StyleSheet.create({

  perdata:{

    paddingBottom:40,

  },
  kategori:{
    paddingRight:20,
    paddingBottom:10,
    paddingTop:15,
  },
})
