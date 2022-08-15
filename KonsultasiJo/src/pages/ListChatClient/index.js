import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Header, Gap } from '../../components';
import { Operator } from '../../assets';

const ListChatClient = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Pesan" onBack={() => navigation.goBack()} />        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>        
          <View style={styles.Wrapper}>
            <Operator style={styles.operator}/> 
            <View style={styles.chatwrapper}>
              <Text style={styles.Nama}>Nariva</Text>        
              <Text style={styles.Topic}>Konsultasi Hukum Kekayaan</Text>              
            </View>            
          </View>          
        </ScrollView>
    </View> 
  )
}
 
export default ListChatClient

const styles = StyleSheet.create({
  container: {    
    flex: 1,  
    backgroundColor: 'white',         
  },    
  operator:{           
    marginRight: 15,
    width: 50,
    height: 50,           
  },
  Wrapper:{
    flexDirection: 'row',
    paddingRight: 100,
    borderColor: 'black',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,    
  },
  chatwrapper:{
    flexDirection: 'column',
  },
  Nama:{
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
  }},
  Topic: {    
    color: 'black',
    fontSize: 14,    
    marginBottom: 8,    
},
});