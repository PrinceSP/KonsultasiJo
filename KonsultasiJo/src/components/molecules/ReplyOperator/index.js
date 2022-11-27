import React from 'react'
import { StyleSheet, Text, View, Pressable,Image } from 'react-native'
import TimeDelivery from '../Time'
import {ReadReceipt} from '../../../assets'

const ReplyOperator = ({sender, item}) => {
  // console.log(item);
  return (
    <View>
      {item.msgType ==="image" ?
        <View style={{alignSelf: 'flex-end',marginHorizontal:10,marginVertical:15}}>
          <Image source={{uri:item.photo}} style={{height:177,width:177}}/>
          <View style={{backgroundColor:'#000',alignItems:'center',justifyContent:'center',paddingVertical:5}}>
            <TimeDelivery
              sender={sender}
              item={item}
              />
          </View>
        </View>
      : <View style={{ marginVertical: 0 }}>
          <View style={[styles.TriangleShapeCSS,sender ? styles.right : [styles.left] ]}/>
            <View style={[styles.masBox, {alignSelf: sender ? 'flex-end' : 'flex-start',
              backgroundColor: sender ? "#27AE60" : "#EAEAEA",
              elevation:4}]}>
             <Text style={{ paddingLeft: 5, color:  sender ? "#fff" : "#000",fontFamily:"Poppins-Regular",fontSize:15.5 }}>
               {item.message}
             </Text>
             <TimeDelivery
               sender={sender}
               item={item}
               />
            </View>
          </View>
        }
    </View>
  )
}

export default ReplyOperator

const styles = StyleSheet.create({
  masBox: {
      alignSelf: 'flex-end',
      marginHorizontal: 10,
      minWidth: 80,
      maxWidth: '80%',
      paddingHorizontal: 10,
      marginVertical: 5,
      paddingVertical: 5,
      borderRadius: 8
  },
  timeText: {
      fontFamily: 'AveriaSerifLibre-Light',
      fontSize: 10
  },
  dayview: {
      alignSelf: 'center',
      height: 30,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: "#fff",
      borderRadius: 30,
      marginTop: 10
  },
  iconView: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: COLORS.themecolor,
  },
  TriangleShapeCSS: {
      position: 'absolute',
      // top: -3,
      width: 0,
      height: 0,
      // borderBottomLeftRadius:5,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 15,
      borderRightWidth: 5,
      borderBottomWidth: 20,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      // borderBottomColor: '#757474'
  },
  left: {
      borderBottomColor: "#fff",
      left: 2,
      bottom: 10,
      transform: [{ rotate: '0deg' }]
  },
  right: {
      borderBottomColor: "#",
      right: 2,
      // top:0,
      bottom: 5,
      transform: [{ rotate: '103deg' }]
  },
});
