import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TextInput,  View, FlatList,Dimensions,Platform,PermissionsAndroid } from 'react-native'
import { Gap, Header,PHukumCard } from '../../components';
import {firebase} from '@react-native-firebase/database'

const Phukum = ({navigation}) => {
  const [phukum,setPHukum] = useState([])
  const [emptyState,setEmptyState] = useState('')
  const [search,setSearch] = useState('')
  const windowWidth = Dimensions.get('window').width;

  const searchItem = (value,query)=>{
    const keys = ['tahun','nomor', 'judul','jenis']
    return value?.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  const searchData = searchItem(phukum,search)

  const getPHukum=()=>{
   firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
    .ref('/phukum')
    .on('value', snapshot => {
    if (snapshot.val() == null) {
      setEmptyState('no data')
      // return false
      console.log(emptyState);
      return false
    }
      setPHukum(Object.values(snapshot.val()))
    });
  }

  useEffect(()=>{
    getPHukum()
  },[])

  return (
    <View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
      <Header title="Produk Hukum" onBack={() => navigation.goBack()}/>
      <Gap height={30}/>
      <View style={styles.textInput}>
      <TextInput placeholder='Cari JDIH' style={{fontSize:15, width:windowWidth/1.1}} defaultValue={search} onChangeText={value=>setSearch(value)}/>
      </View>
      <Gap height={9}/>
        {phukum==[] ? <Text style={{color:"#000"}}>{emptyState}</Text>
        : <FlatList
          data={searchData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <PHukumCard item={item}/>
            )
        }}/>
        }
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
