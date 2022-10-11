import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReplyOperator = ({containerMarginRight=125, containerMarginLeft=10, jam='left',item}) => {
  // console.log(JSON.stringify(item));
  return (
    <View style={styles.container(containerMarginLeft, containerMarginRight)}>
        {/* <Operator style={styles.operator}/> */}
        {/* <ChatOperator/> */}
        <View style={styles.chatwrapper}>
        <Text style={styles.time(jam)}>05 Jun 2022 - 09:51</Text>
        <Text style={styles.text}>{item}</Text>
        </View>
    </View>
  )
}

export default ReplyOperator

const styles = StyleSheet.create({
    text:{
      borderRadius: 10,
      fontSize: 16,
      shadowColor: "#000",
      shadowOffset: {
  	    width: 0,
  	    height: 5,
      },
      shadowOpacity: 0.20,
      shadowRadius: 5.00,
      elevation: 5,
      padding: 10,
      backgroundColor: '#EAEAEA',
      color:"#000"
    },
    container: (containerMarginLeft, containerMarginRight) => ({
    paddingHorizontal: 10,
    marginLeft: containerMarginLeft,
    marginRight: containerMarginRight,
    flexDirection: 'row',
    }),
    // operator:{
    //     marginRight: 15,
    //     width: 50,
    //     height: 50,
    // },
    chatwrapper:{
        flexDirection: 'column',
    },
    time: (jam) => ({
        textAlign: jam,
        fontSize: 12,
        marginBottom: 8,
    }),
});
