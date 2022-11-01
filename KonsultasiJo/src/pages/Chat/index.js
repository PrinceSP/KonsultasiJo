import React,{useState,useEffect} from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Header, Gap, ReplyOperator, Button } from '../../components';
import { Send } from '../../assets';
import {firebase} from '@react-native-firebase/database'
import moment from 'moment';
import {useSelector} from 'react-redux'

const Chat = ({navigation,route}) => {
  const [messages, setMessages] = useState('')
  const [allChat, setallChat] = useState([]);
  const {userData} = useSelector(state=>state.User)
  const [disabled, setdisabled] = useState(false);

  // console.log(route.params.receiverData);

  const msgvalid = txt => txt && txt.replace(/\s/g, '').length;

  const sendMsg = () => {
    if (messages == '' || msgvalid(messages) == 0) {
      console.log('Enter something....');
      return false;
    }
    setdisabled(true);
    let msgData = {
      roomId: route.params.receiverData.roomId,
      message: messages,
      from: userData?.id,
      to: route.params.receiverData.id,
      sendTime: moment().format(''),
      msgType: 'text',
    };

    const newReference = firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
      .ref('/messages/' + route.params.receiverData.roomId)
      .push();

    msgData.id = newReference.key;
    newReference.set(msgData).then(() => {
      let chatListupdate = {
        lastMsg: messages,
        sendTime: msgData.sendTime,
      };
      firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
        .ref('/chatlist/' + route.params.receiverData?.id + '/' + userData?.id)
        .update(chatListupdate)
        .then(() => console.log('Data updated.'));
      // console.log("'/chatlist/' + userData?.id + '/' + data?.id",route.params.receiverData)

      firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
        .ref('/chatlist/' + userData?.id + '/' + route.params.receiverData?.id)
        .update(chatListupdate)
        .then(() => console.log('Data updated.'));

      setMessages('');
      setdisabled(false);
    });
  };


  const onChildAdd = ()=> firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/")
  .ref(`/messages/${route.params.receiverData.roomId}`)
  .on('child_added', snapshot => {
    // console.log('A new node has been added', snapshot.val());
    setallChat((state) => [snapshot.val(),...state]);
  });

  useEffect(()=>{
      onChildAdd()
    // Stop listening for updates when no longer required
    return () => firebase.app().database("https://konsultasijo-d274e-default-rtdb.firebaseio.com/").ref('/messages'+ route.params.receiverData.roomId).off('child_added', onChildAdd);
  },[route.params.receiverData.roomId])

  return (
    <View style={styles.container}>
      <ImageBackground
        source = {require('../../assets/images/backgroundChat.jpeg')}
        style={{flex: 1}}>
        <Header title="Konsultasi" onBack={() => navigation.goBack()} />
        <View style={{marginLeft:300,marginRight:8}}>
        <Button title={'Selesai'}/>
        </View>
        <FlatList
          data={allChat}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          inverted
          renderItem={({ item }) => {
            return (
              <ReplyOperator item={item} sender={item.from==userData.id}/>
            )
        }}/>

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
            placeholderTextColor = "#8C8888"
            multiline = {true}
            defaultValue={messages}
            onChangeText={(val)=>setMessages(val)}
        />

      <TouchableOpacity disabled={disabled} onPress={sendMsg}>
          <View style={styles.SendIcon}>
          <Send height={30} width={30}/>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Chat

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
