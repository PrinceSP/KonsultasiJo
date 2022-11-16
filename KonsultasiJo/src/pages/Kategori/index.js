import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Perkawinan,Waris,Kekeluargaan, Perikatan, Kekayaan,Perceraian,PNamaBaik,Lainnya,Pencurian,Penganiayaan,Pembunuhan,PerusakanBarang,Ite, Perselingkuhan, Pemerasan } from '../../assets/icon'
import { AKategori, Header } from '../../components'
import { firebase } from '@react-native-firebase/database';
import uuid from "react-native-uuid"
import {useSelector} from 'react-redux'
import moment from 'moment';

const Kategori = ({navigation}) => {
  const {userData} = useSelector(state=>state.User)
  const [allUser,setAllUser] = useState([])
  const [categories,setCategories] = useState([])
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
  const createChatList = (data,operator,category) => {
    // console.log(data?.id);
    createCategories(category,categories)
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
          navigation.navigate('Chat',{receiverData:data})
        } else {
          navigation.navigate('Chat', {receiverData: snapshot.val()});
        }
      });
  };

  const getCategories=()=>{
   firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/categoriesDatas')
    .on('value', snapshot => {
      if (snapshot.val() != null) {
        setCategories(snapshot.val())
      }
    });
  }

  // console.log(categories.PNamaBaik);
  const createCategories = (category,categories)=>{
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().toLocaleString('en-US', {month: 'long'})
    const getDataYear = categories[`${currentYear}`]
    const getDataMonth = getDataYear[`${currentMonth}`]
    const values=getDataMonth[`${category}`] != null||undefined ? getDataMonth[`${category}`].value+1 : 1

    firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/categoriesDatas/'+currentYear+"/"+currentMonth+"/"+category)
    .set({
      value:values ,
      time:moment().format('')
    })
    .then(()=>{
      console.log(true);
    })
  }

  useEffect(()=>{
    getOperator()
    getCategories()
  },[])

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Header title="Konsultasi" onBack={() => navigation.goBack()}/>
      <View style={{paddingHorizontal:15}}>
     <View style={styles.perdata}>
      <Text style={{fontWeight:'600',fontSize:17}}>Hukum Perdata</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Perkawinan")}>
          <View style={styles.kategori}>
            <Perkawinan/>
            <View style={{paddingTop:8}}>
              <Text>Perkawinan</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Waris")}>
        <View style={styles.kategori}>
        <Waris/>
        <Text>   Waris</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Kekeluargaan")}>
        <View style={styles.kategori}>
        <Kekeluargaan/>
        <Text>Kekeluargaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Perikatan")}>
        <View style={styles.kategori}>
        <Perikatan/>
        <Text>Perikatan</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Kekayaan")}>
        <View style={styles.kategori}>
        <Kekayaan/>
        <Text>Kekayaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Perceraian")}>
        <View style={styles.kategori}>
        <Perceraian/>
        <Text>Perceraian</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","PNamaBaik")}>
        <View style={styles.kategori}>
        <PNamaBaik/>
        <Text>Pencemaran {'\n'} Nama Baik</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[0],"operatorOne","Lainnya")}>
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
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Pencurian")}>
        <View style={styles.kategori}>
        <Pencurian/>
        <Text>Pencurian</Text>
        </View >
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Penganiayaan")}>
        <View style={styles.kategori}>
        <Penganiayaan/>
        <Text>Penganiayaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Pembunuhan")}>
        <View style={styles.kategori}>
        <Pembunuhan/>
        <Text>Pembunuhan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Perusakan")}>
        <View style={styles.kategori}>
        <PerusakanBarang/>
        <Text>Perusakan{'\n'}   Barang</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","ITE")}>
        <View style={styles.kategori}>
        <Ite/>
        <Text>      ITE</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Perselingkuhan")}>
        <View style={styles.kategori}>
        <Perselingkuhan/>
        <Text>Perselingkuhan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Pemerasan")}>
        <View style={styles.kategori}>
        <Pemerasan/>
        <Text>Pemerasan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(allUser[1],"operatorTwo","Lainnya")}>
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
