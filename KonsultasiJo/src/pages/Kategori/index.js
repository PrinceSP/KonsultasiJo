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
    console.log(data[0]);
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

          delete data.password;
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
      if (snapshot.val() !== null || snapshot.val() !== undefined) {
        // console.log(snapshot.val());
        setCategories(snapshot.val())
      } else{
        setCategories([])
      }

    });
  }

  const firebaseConfig = (currentYear,currentMonth,category,value)=>{
    firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/categoriesDatas/'+'years/'+currentYear+"/months/"+currentMonth+"/"+category)
    .set({
      value ,
      time:moment().format('')
    })
    .then(()=>{
      console.log('sdfsdf');
    })
  }

  const createCategories = (category,categories)=>{
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().toLocaleString('en-US', {month: 'long'})
    const test = categories?.years[currentYear]
    const test2 = test?.months[currentMonth]
    // const test3 = test2[category]
    const getYear = categories !== null && test2[category]!==undefined||null ? categories.years : firebaseConfig(currentYear,currentMonth,category,1)
    const getDataYear = getYear === undefined ? test : getYear[currentYear]
    // console.log(getYear);
    const getMonth =  getDataYear?.months
    const getDataMonth = getMonth === undefined ? test2 : getMonth[currentMonth]
    const getCategory = getDataMonth===undefined ? getMonth : getDataMonth[`${category}`]
    // console.log(getCategory);
    const values= getDataMonth === undefined ? 1 : getCategory === undefined ? 1 : getCategory.value+1
    firebaseConfig(currentYear,currentMonth,category,values)
  }

  const handlingPidana = allUser.map((item,index,arr)=>{
    return item.handle==='pidana' ? arr[index] : null
  })
  const handlingPerdata = allUser.map((item,index,arr)=>{
    return item.handle==='perdata' ? arr[index] : null
  })

  // console.log(handlingPerdata[1]);

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
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Perkawinan")}>
          <View style={styles.kategori}>
            <Perkawinan/>
            <View style={{paddingTop:8}}>
              <Text>Perkawinan</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Waris")}>
        <View style={styles.kategori}>
        <Waris/>
        <Text>   Waris</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Kekeluargaan")}>
        <View style={styles.kategori}>
        <Kekeluargaan/>
        <Text>Kekeluargaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Perikatan")}>
        <View style={styles.kategori}>
        <Perikatan/>
        <Text>Perikatan</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Kekayaan")}>
        <View style={styles.kategori}>
        <Kekayaan/>
        <Text>Kekayaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Perceraian")}>
        <View style={styles.kategori}>
        <Perceraian/>
        <Text>Perceraian</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"PNamaBaik")}>
        <View style={styles.kategori}>
        <PNamaBaik/>
        <Text>Pencemaran {'\n'} Nama Baik</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPerdata[1],handlingPerdata[1].fullame,"Lainnya")}>
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
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Pencurian")}>
        <View style={styles.kategori}>
        <Pencurian/>
        <Text>Pencurian</Text>
        </View >
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Penganiayaan")}>
        <View style={styles.kategori}>
        <Penganiayaan/>
        <Text>Penganiayaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Pembunuhan")}>
        <View style={styles.kategori}>
        <Pembunuhan/>
        <Text>Pembunuhan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Perusakan")}>
        <View style={styles.kategori}>
        <PerusakanBarang/>
        <Text>Perusakan{'\n'}   Barang</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"ITE")}>
        <View style={styles.kategori}>
        <Ite/>
        <Text>      ITE</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Perselingkuhan")}>
        <View style={styles.kategori}>
        <Perselingkuhan/>
        <Text>Perselingkuhan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Pemerasan")}>
        <View style={styles.kategori}>
        <Pemerasan/>
        <Text>Pemerasan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>createChatList(handlingPidana[0],handlingPidana[0].fullame,"Lainnya")}>
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
