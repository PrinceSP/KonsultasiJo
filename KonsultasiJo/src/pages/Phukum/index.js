import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Gap } from '../../components';

const Phukum = () => {

 //const state = this.state;
 const data = {
    tableHead: ['No', 'Tahun','Nomor', 'Judul','Jenis'],
    tableData: [
      ['1', '2001', '3', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERDA'],
      ['2', '2002', '1', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERWA'],
      ['3', '2003', '3', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERWA'],
      ['4', '2004', '8', 'Tes Judul Untuk JDIH kota bitung yang akan digunakan untuk skripsi kami','PERDA'],
      
    ]
  }
    
  return (
    <View style={{backgroundColor:'white',flex:1,}}>
      <Text>Header</Text>
      <Gap height={30}/>
      <View style={styles.textInput}>
      <TextInputRN placeholder='Cari JDIH' placce style={{fontSize:15, }} />
      </View>
      <Gap height={9}/>
      <Text style={{textAlign:'center',}}>Hasil Pencarian</Text>
      <View style={{marginTop:9}}>
      <Table borderStyle={{borderWidth: 2, borderColor: 'white'}}>
          <Row data={data.tableHead} style={styles.head } textStyle={styles.text}/>
          <Rows data={data.tableData} style={styles.body }/>
        </Table>
      </View>

    </View>
  )
}

export default Phukum

const styles = StyleSheet.create({
    head:{
        backgroundColor:'#06659A',
        
    },
    text:{
        alignItems:'center',
        color:'white',
        justifyContent:'center',
        textAlign:'center'
        
    },
    body:{
        backgroundColor:'#EAEAEA'
    },
    textInput:{
        borderColor:'#696868',
        borderWidth:1,
        borderRadius:8,
        marginTop:15,
        marginHorizontal:13,
        height:38
    }
})