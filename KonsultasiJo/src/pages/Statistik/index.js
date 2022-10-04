import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory-native";
import { Gap, Header } from '../../components';

const Statistik = ({navigation}) => {
  const data ={
    
    jenisKelamin: [
      {x: 'Laki-Laki', y: 10},
      {x: 'Perempuan', y: 5},

    ],
    jemaat: [
      {x: 'Jemaat GMIM Tabita', y: 3},
      {x: 'Jemaat Luar', y: 7},

    ],
  };
  return (

    <View style={{flex: 1}}>
     <Header title="Statistik" onBack={() => navigation.goBack()}/>
     <Gap height={10}/>
    <ScrollView>
    <View style={styles.page}>
    <Gap height={10}/>
      <Text style={{color:'black',fontSize:16,marginTop:10,marginLeft:10,fontWeight:'bold'}}>Statistik Pengguna aplikasi</Text>
    <VictoryChart domainPadding={{ x: 100 }} theme={VictoryTheme.material} >
      
      <VictoryBar data={data.jenisKelamin} style={{ data: { fill: "#c43a31" } }} />
      
    </VictoryChart>
    <VictoryChart domainPadding={{ x: 100 }} theme={VictoryTheme.material}>
    
      <VictoryBar data={data.jemaat} style={{ data: { fill: "blue" } }}/>
    
  
   </VictoryChart>
    </View>
    </ScrollView>

  </View>

  )
}

export default Statistik

const styles = StyleSheet.create({
  page:{

    flex:1,
    backgroundColor:'white',
  }
})