import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fitur_chat, Foto } from '../../assets'
import Icon from 'react-native-vector-icons/Ionicons';
import { Berita, Gap } from '../../components';

const Menu = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Text>Menu</Text>

    <View style={styles.profile}>
    <View>
    <Text style={styles.tWelcome}>SELAMAT DATANG, </Text>
    <Text style={styles.tNama}>Nariva Wagey</Text>
    <Text style={styles.tNik}>1234567890123456</Text>
    </View>
    <View style={styles.foto}>
      <Foto/>
    </View>

    </View >
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Kategori')}>
    <View style={styles.fChat}>
    <Icon name="chatbox-ellipses" size={45} color="white" />
    </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignIn')}>
    <View style={styles.pHukum}>
    <Icon name="book" size={45} color="#0E7886" />
    </View>
    </TouchableOpacity>
    <View style={styles.lLokasi}>
    <Icon name="map" size={45} color="white" />
    </View>
    <View style={styles.tKami}>
    <Icon name="people" size={45} color="white" />
    </View>
    </View>
    <Gap height={40}/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Berita title={'Judul Berita Yang di Imput Admin dari Web'}/>
    <Berita title={'test 2'}/>
    <Berita title={'test 2'}/>
    <Berita title={'test 2'}/>

    </ScrollView>


    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  profile:{
    backgroundColor:'#06659A',
    marginHorizontal:28,
    height:135,
    borderRadius:20,
    flexDirection:'row',
    
  },
  tNama: {
    color:'white',
    paddingLeft:14,
    fontSize:16,

  },
  tWelcome: {
    color:'white',
    paddingLeft:14,
    paddingTop:21,
    fontSize:16,

  },
  tNik:{
    color:'black',
    paddingLeft:14,
    paddingTop:35,
  },
  foto:{
    alignItems:'flex-end',
    flex:1,
    justifyContent:'center',
    paddingRight:16,
    
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