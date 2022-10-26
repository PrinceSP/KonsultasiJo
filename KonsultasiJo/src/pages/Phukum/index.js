import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TextInput,  View, FlatList,Dimensions,Platform,PermissionsAndroid } from 'react-native'
import { Gap, Header,PHukumCard } from '../../components';
import {firebase} from '@react-native-firebase/database'

const Phukum = ({navigation}) => {
  const [phukum,setPHukum] = useState([])
  const windowWidth = Dimensions.get('window').width;

  const searchItem = (value,query)=>{
    const keys = ['No', 'Tahun','Nomor', 'Judul','Jenis']
    return value?.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  const getAllUsers=()=>{
   firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/phukum')
    .on('value', snapshot => {
      setPHukum(Object.values(snapshot.val()))
    });
  }

  useEffect(()=>{
    getAllUsers()
  },[])
  
  return (
    <View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
      <Header title="Produk Hukum" onBack={() => navigation.goBack()}/>
      <Gap height={30}/>
      <View style={styles.textInput}>
      <TextInput placeholder='Cari JDIH' style={{fontSize:15, width:windowWidth/1.1}} />
      </View>
      <Gap height={9}/>
        <FlatList
          data={phukum}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <PHukumCard item={item}/>
            )
        }}/>
    </View>
  )
}

export default Phukum

const styles = StyleSheet.create({
    head:{
      backgroundColor:'#D92B2B',
    },
    text:{
      textAlign: 'center',
      color:"#fff"
    },
    text2:{
      textAlign: 'center',
      color:"#000"
    },
    body:{
      backgroundColor:'#EAEAEA',
      // justifyContent:'center'
    },
    textInput:{
        borderColor:'#696868',
        borderWidth:1,
        borderRadius:8,
        marginTop:15,
        marginHorizontal:13,
        height:38
    },
    wrapper: { flexDirection: 'row' },
})
