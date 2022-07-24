import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, Gap } from '../../components';
import { CancelSearchMap, ContohMaps, Telegram, Wa } from '../../assets';

const Maps = ({navigation}) => {
  return (
    <View>
        <Header title="Lihat Lokasi" onBack={() => navigation.goBack()} />        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.maps}>
            <View style={styles.SearchBar}>
              <Text style={styles.SearchBarText}>Firma hukum bitung</Text>            
                <View style={styles.IconCancel}>
                  <CancelSearchMap />            
                </View>
            </View>          
            <ContohMaps />
          </View>          
          <View style={styles.Information}>
            <Text style={styles.TextInfo}>Kantor Pengacara Wempie Mekel, SH dan Rekan</Text>            
            <Wa style={styles.App} />
            <Telegram style={styles.App} />
          </View>                
        </ScrollView>
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
});