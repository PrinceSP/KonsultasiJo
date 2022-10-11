import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { Header, Gap, ReplyClient } from '../../components';
import ReplyOperator from '../../components/molecules/ReplyOperator';
import { Send } from '../../assets';
import moment from 'moment';

const ChatOperator = ({route,navigation}) => {
  // console.log(route.params.data);
  return (
    <View style={styles.container}>
        <ImageBackground
          source = {require('../../assets/images/backgroundChat.jpeg')}
          style={{flex: 1}}>
          <Header title="Konsultasi" onBack={() => navigation.goBack()} />
          <ReplyOperator containerMarginLeft={125} containerMarginRight={10} jam='right' item={route.params.data.name}/>
          <Gap height={30} />
        </ImageBackground>
        <View
          style={{
              backgroundColor: "#D9D9D9",
              elevation: 5,
              // height: 60,
              flexDirection:'row',
              alignItems:'center',
              paddingVertical:7,
              justifyContent:'space-evenly'
          }}>

          <TextInput
              style={{
                  backgroundColor: "#fff",
                  width:'80%',
                  borderRadius:25,
                  borderWidth:0.5,
                  borderColor: "#fff",
                  paddingHorizontal: 15,
                  color: "#000",
              }}
              placeholder = "type a message"
              placeholderTextColor = "#000"
              multiline = {true}
              // value={msg}
              // onChangeText={(val)=>setMsg(val)}
          />

          <TouchableOpacity>
            <View style={styles.SendIcon}>
            <Send height={30} width={30}/>
            </View>
          </TouchableOpacity>

      </View>
    </View>
  )
}

export default ChatOperator

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
    },
    text:{
        fontSize: 50,
    },
    TypingText: {
        padding: 10,
        backgroundColor: '#D9D9D9',
    },
    BoxText: {
        flexDirection: 'row',
    },
    SendIcon: {
        alignSelf: 'flex-end',
        position: 'relative',
        padding: 5,
        borderRadius: 40,
        backgroundColor: '#D92B2B',
    },
    TextBox: {
      elevation: 5,
      // height: 60,
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:7,
      justifyContent:'space-evenly'
    },
});
