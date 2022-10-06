import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, Gap, ReplyClient } from '../../components';
import ReplyOperator from '../../components/molecules/ReplyOperator';
import { Send } from '../../assets';

const ChatClient = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Konsultasi" onBack={() => navigation.goBack()} />        
        <ScrollView showsVerticalScrollIndicator={false}>                        
        
                <ReplyOperator marginright={100} />     
                <Gap height={30} />                   
        
                <ReplyClient />
                <Gap height={30} />            
        
                <ReplyOperator />     
                <Gap height={30} />            
        
                <ReplyClient />
                <Gap height={10} />   
                
        </ScrollView>
        <View style={styles.TypingText}>  
            <View style={styles.BoxText}>             
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <View style={styles.TextBox}>
                    <TextInput placeholder={'Ketik pesan disini'}/>                    
                </View>                
            </ScrollView>                           
                <TouchableOpacity>
                <View style={styles.SendIcon}>
                <Send height={30} width={30}/>
                </View>               
                </TouchableOpacity>
            </View>          
            
            
            
        </View>
    </View>
  )
} 
 
export default ChatClient

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
        fontSize: 14,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        padding: 1,
        borderRadius: 10,
        color: '#8C8888',
    },
});