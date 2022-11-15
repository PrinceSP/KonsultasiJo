import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Foto } from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import Auth from '../../configs/auth';
import {useSelector} from "react-redux"

const MenuOprator = ({navigation}) => {
  const {userData} = useSelector(state=>state.User)
  console.log(userData);
  const logout=async()=>{
     await Auth.removeAccount()
     navigation.navigate("AuthStack",{screen:"SignInOperator"})
     // console.log(navigation.navigate("AuthCustomerStack"));
  }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Header title="MenuOperator" onBack={() => navigation.goBack()}/>
    <View style={styles.profile}>
    <View>
      <Text style={styles.tWelcome}>SELAMAT DATANG, </Text>
      <Text style={styles.tNama}>{userData.fullname}</Text>
    </View>


    </View >
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('ListChatClients')}>      
        <View style={styles.fChat}>
          <Icon name="chatbox-ellipses" size={45} color="white" />                  
        </View>      
        <Text style={{width:100, textAlign:'center'}}>Konsultasi</Text>
      </TouchableOpacity>      

      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Statistik')}>
        <View style={styles.pHukum}>
          <Icon name="stats-chart-sharp" size={35} color="white" />          
        </View>
        <Text style={{width:100,marginLeft:20, textAlign:'center'}}>Statistik</Text>
      </TouchableOpacity>
    </View>    

      <View style={styles.exit}>
        <TouchableOpacity activeOpacity={0.7} onPress={logout}>
          <Icon name="exit" size={45} color="#D92B2B" />
          <Text style={{color:'#696868'}}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MenuOprator

const styles = StyleSheet.create({
    profile:{
        backgroundColor:'#D92B2B',
        marginHorizontal:28,
        height:135,
        borderRadius:20,
        flexDirection:'row',

      },
      tNama: {
        color:'white',
        paddingLeft:14,
        fontSize:24,
        fontFamily:"Poppins-Bold"
      },
      tWelcome: {
        color:'white',
        paddingLeft:14,
        paddingTop:21,
        fontSize:16,

      },
      tNik:{
        color:'#ddd',
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
        height:100,
        width:100,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:50,
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
        height:100,
        width:100,
        borderRadius:10,
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
      exit:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:18,
        marginBottom:42,


      }


})
