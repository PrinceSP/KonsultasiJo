import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, Gap, Button } from '../../components';
import { CancelSearchMap, ContohMaps, Telegram, Wa } from '../../assets';
import { Row } from 'react-native-table-component';


const Maps = ({navigation}) => {
  return (
    <View>
        <Header title="Lihat Lokasi" onBack={() => navigation.goBack()} />        
        <View style={{flexDirection:'row'}}>
          <View style={styles.buttonMap}>
          <TouchableOpacity>
          <Button title={'  Firma Hukum  '}/>
          </TouchableOpacity>
          </View>
          <View style={styles.buttonMap}>
          <TouchableOpacity>
          <Button title={'  Notaris  '}/>
          </TouchableOpacity>
          </View>
          <View style={styles.buttonMap}>
          <TouchableOpacity>
          <Button title={'  Lembaga bantuan Hukum  '}/>
          </TouchableOpacity>

          </View>

        </View>
        
    </View>
  )
}

export default Maps

const styles = StyleSheet.create({
  maps:{        
    alignItems: 'center',    
  },       
  SearchBarText: {    
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
  },
  SearchBar: {    
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:'black',    
    paddingVertical:6,    
    width:365,
    borderRadius: 10,    
  },
  IconCancel:{     
    marginRight: 10,   
    flex: 1,
    alignItems: 'flex-end',
  },
  Information: {    
    flexWrap: 'wrap',  
    flexDirection: 'row',
    marginBottom: 100,  
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 50,    
    borderRadius: 20,
    color: 'red',    
    justifyContent: 'center',
    
  },
  App:{  
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 20,
    backgroundColor: '#06659A'
  },
  TextInfo:{
    fontSize: 15,
  },
  buttonMap:{
    paddingHorizontal:8,
  }
});