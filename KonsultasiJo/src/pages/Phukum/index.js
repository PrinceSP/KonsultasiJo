import React from 'react'
import { StyleSheet, Text, TextInput,  View, FlatList } from 'react-native'
import { Gap, Header } from '../../components';
import { Download } from '../../assets';

const Phukum = ({navigation}) => {

 //const state = this.state;
 const data = {
    tableHead: ['No', 'Tahun','Nomor', 'Judul','Jenis','PDF'],
    tableData: [
      ['1', '2001', '3', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERDA'],
      ['2', '2002', '1', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERWA'],
      ['3', '2003', '3', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERWA'],
      ['4', '2004', '8', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERDA'],

    ]
  }

  const searchItem = (value,query)=>{
    const keys = ['No', 'Tahun','Nomor', 'Judul','Jenis']
    return value?.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  return (
    <View style={{backgroundColor:'white',flex:1,}}>
      <Header title="Produk Hukum" onBack={() => navigation.goBack()}/>
      <Gap height={30}/>
      <View style={styles.textInput}>
      <TextInput placeholder='Cari JDIH' placce style={{fontSize:15, }} />
      </View>
      <Gap height={9}/>
      <Text style={{textAlign:'center',}}>Hasil Pencarian</Text>
    </View>
  )
}

export default Phukum

const styles = StyleSheet.create({
    head:{
      backgroundColor:'#D92B2B',
    },
    text:{
      textAlign: 'center',
      color:"#fff"
    },
    text2:{
      textAlign: 'center',
      color:"#000"
    },
    body:{
      backgroundColor:'#EAEAEA',
      // justifyContent:'center'
    },
    textInput:{
        borderColor:'#696868',
        borderWidth:1,
        borderRadius:8,
        marginTop:15,
        marginHorizontal:13,
        height:38
    },
    wrapper: { flexDirection: 'row' },
})
