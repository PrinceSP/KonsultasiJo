import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import {BarChart} from "react-native-chart-kit";
import { Gap, Header } from '../../components';

const Statistik = ({navigation}) => {
  const datas = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      data: [20, 45, 28, 80]
    }
  ]
};
  return (

    <View style={{flex: 1,backgroundColor:"#fff"}}>
     <Header title="Statistik" onPress={() => navigation.goBack()}/>
     <Gap height={10}/>
      <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={styles.page}>
        <Gap height={10}/>
          <Text style={{color:'black',fontSize:16,marginTop:10,marginLeft:10,fontWeight:'bold'}}>Statistik Pengguna aplikasi</Text>
        </View>
        <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
            data={datas}
            width={Dimensions.get("window").width-10}
            height={220}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                // padding:0,
                // margin:0
              },
              propsForDots: {
                r: "2",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
          />
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
