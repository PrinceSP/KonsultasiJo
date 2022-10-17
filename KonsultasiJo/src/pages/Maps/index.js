import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Header, Gap, Button, MapFinder } from '../../components';
import { CancelSearchMap, ContohMaps, Telegram, Wa } from '../../assets';

const Maps = ({navigation}) => {
  const [index,setIndex] = useState(null)
  const locationDatas=[
    [
      {
        latitude: 1.4459986785784036,
    		longitude: 125.18399810400312,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
    		latitude: 1.4466742167579465,
    		longitude: 125.19097078257624,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
    	},
      {
    		latitude: 1.4548092264788834,
    		longitude: 125.19860302258981,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
    	},
      {
    		latitude: 1.4609314720125102,
    		longitude: 125.20472725072291,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
    	},
      {
    		latitude: 1.447258434113574,
    		longitude: 125.18370073413253,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
    	},
      {
    		latitude: 1.4461149972958476,
    		longitude: 125.1342006958398,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
    	},
      {
    		latitude: 1.4433692884403442,
    		longitude: 125.1019283565442,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
    	}
    ],
    [
      {
        latitude: 1.448185002242187,
    		longitude: 125.13146665941929,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4437232277407053,
    		longitude: 125.15549925216993,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4466405430550897,
    		longitude: 125.16082075467317,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4459541163113254,
    		longitude: 125.16545561191246,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },

      {
        latitude: 1.4486998220399363,
    		longitude: 125.16991880777249,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4478417893569169,
    		longitude: 125.17369535811558,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4478417893569169,
    		longitude: 125.1797035063887,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.449043035022175,
    		longitude: 125.18159178156024,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4474985761927504,
    		longitude: 125.18399504086949,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4516171307303831,
    		longitude: 125.1857116546618,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4464689363886074,
    		longitude: 125.18416670224872,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4457825095929362,
    		longitude: 125.19515303051956,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      },
      {
        latitude: 1.4492146414937914,
    		longitude: 125.19704130569113,
    		latitudeDelta: 0.0922,
    		longitudeDelta: 0.0421,
      }
    ],
    [{
      latitude: 1.4432107330473045,
      longitude: 125.19077669713161,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }]
  ]

  // console.log(locationDatas[index]);
  return (
    <>
        <Header title="Lihat Lokasi" onBack={() => navigation.goBack()} />
        <MapFinder index={locationDatas[index]}/>
        <View style={{flexDirection:'row',position:'absolute',top:100}}>
          <View style={styles.buttonMap}>
            <Button backgroundColor={index==0?"#CF3D3D":"rgba(255, 255, 255, 0.46)"} color={index==0?"#fff":"#444"} title={'  Firma Hukum  '} onPress={()=>setIndex(0)}/>
          </View>
          <View style={styles.buttonMap}>
            <Button backgroundColor={index==1?"#CF3D3D":"rgba(255, 255, 255, 0.46)"} color={index==1?"#fff":"#444"} title={'  Notaris  '} onPress={()=>setIndex(1)}/>
          </View>
          <View style={styles.buttonMap}>
            <Button backgroundColor={index==2?"#CF3D3D":"rgba(255, 255, 255, 0.46)"} color={index==2?"#fff":"#444"} title={'  Lembaga bantuan Hukum  '} onPress={()=>setIndex(2)}/>
          </View>
        </View>
    </>
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
