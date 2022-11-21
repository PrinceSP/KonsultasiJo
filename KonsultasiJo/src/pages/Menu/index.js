import React, {useEffect,useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList } from 'react-native'
import { Fitur_chat, Foto,TopIllustration ,EyeTrue,EyeFalse} from '../../assets'
import Icon from 'react-native-vector-icons/Ionicons';
import { Berita, Gap, Header } from '../../components';
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database'

const Menu = ({navigation}) => {
  const [news,setNews] = useState([])
  const [emptyState,setEmptyState] = useState('')
  const [hide,setHide] = useState(true)

  const { userData } = useSelector(state => state.User);

  const getAllNews=()=>{
    database()
    .ref('/news')
    .on('value', snapshot => {
      // console.log(snapshot.val());
      if (snapshot.val() === (null||undefined||[])) {
        setEmptyState('no data')
        return false
      } else{
        const data = Object.values(snapshot.val()!== null ? snapshot.val() : '')
        // console.log(data.length);
        // console.log(data);
        setNews(data.length>0 ? data.sort((a,b)=> b.timeStamps < a.timeStamps ? -1 : 1) : [])
      }

    });
  }

  useEffect(()=>{
    // let mounted = true
    // if (mounted) {
      getAllNews()
    // }
    // return ()=>

    // return () => mounted=false
  },[])

  // console.log(news);

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Profile')}>
        <View style={styles.profile}>
          <TopIllustration style={{position:'absolute',right:0,top:0}}/>
          <Image source={Foto} style={{height:70,width:70,borderRadius:70,marginRight:30}}/>
          <View>
            <Text style={styles.tWelcome}>SELAMAT DATANG, </Text>
            <Text style={styles.tNama}>{userData.name}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.tNama}>{hide===true ? "************" : userData.nik}</Text>
              {hide===false ? <EyeTrue height={15} onPress={()=>setHide(true)}/> : <EyeFalse height={15} onPress={()=>setHide(false)}/>}
            </View>
          </View>
        </View >
      </TouchableOpacity>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Kategori')}>
          <View >
            <View style={styles.fChat}>
              <Icon name="chatbox-ellipses" size={45} color="#fff" />
            </View>
            <View style={{alignItems:'center',paddingLeft:25}}>
              <Text>Konsultasi</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Phukum')}>
          <View style={styles.pHukum}>
            <Icon name="book" size={45} color="#0E7886" />
          </View>
          <View style={{marginLeft:30}}>
            <Text style={{fontFamily:'Poppins-medium'}}>Produk{'\n'}Hukum</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Maps')}>
          <View style={styles.lLokasi}>
            <Icon name="map" size={45} color="#fff" />
          </View>
          <View style={{marginLeft:35}}>
            <Text> Lihat{'\n'}Lokasi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('AboutUs')}>
          <View style={styles.tKami}>
            <Icon name="people" size={45} color="#fff" />
          </View>
          <View style={{marginLeft:30}}>
            <Text>Tentang{'\n'}  Kami</Text>
          </View>
        </TouchableOpacity>
      </View>
      {!news ?  <Text style={{color:"#000"}}>{emptyState}</Text> : <FlatList
        data={news}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <Berita item={item}/>
          )
      }}/>}
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  profile:{
    backgroundColor:'#D92B2B',
    width:"100%",
    height:157,
    flexDirection:'row',
    position:'relative',
    alignItems:'center',
    paddingLeft:22
  },
  tNama: {
    color:'#fff',
    // paddingLeft:14,
    fontSize:16,
    fontFamily:"Poppins-Bold"

  },
  tWelcome: {
    color:'#fff',
    // paddingLeft:14,
    // paddingTop:21,
    fontSize:16,
    fontFamily:"Poppins-Bold"

  },
  tNik:{
    color:'#fff',
    // paddingLeft:14,
    // paddingTop:35,
    fontFamily:"Poppins-Regular"
  },
  fChat:{
    backgroundColor:'#2AB1E0',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:28,
    marginTop:44,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,
    elevation: 5,

  },
  pHukum:{
    backgroundColor:'#5DDDD3',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    marginTop:44,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,
    elevation: 5,
  },
  tKami:{
    backgroundColor:'#DB6D07',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    marginRight:36,
    marginTop:44,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,
    elevation: 5,
  },
  lLokasi:{
    backgroundColor:'#7AC46D',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    marginTop:44,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,
    elevation: 5,
  }

})
