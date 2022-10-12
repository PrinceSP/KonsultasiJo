import React from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity,ImageBackground, FlatList } from 'react-native'
import { Header, Gap, ReplyClient } from '../../components';
import {ReplyOperator} from '../../components';
import { Send } from '../../assets';

const ChatOperator = ({route,navigation}) => {

  const Data = [
    {
        message: 'Yes Ofcourse..',
        type: 'sender'
    },
    {
        message: 'How are You ?',
        type: 'receiver'
    },
  ]
  return (
    <View style={styles.container}>
        <ImageBackground
          source = {require('../../assets/images/backgroundChat.jpeg')}
          style={{flex: 1}}>
          <Header title="Konsultasi" onBack={() => navigation.goBack()} />
          <FlatList style={{ flex: 1}}
          data={Data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          inverted
          renderItem={({ item }) => {
              return (
                  <ReplyOperator item={item} sender={item.type=="sender"} message={item.message}/>
              )
          }}/>
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
                  borderRadius:10,
                  borderWidth:0.5,
                  borderColor: "#fff",
                  paddingHorizontal: 15,
                  color: "#000",
              }}
              placeholder = "type a message"
              placeholderTextColor = "#aaa"
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
        backgroundColor: '#fff',
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
        backgroundColor: '#696868',
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
