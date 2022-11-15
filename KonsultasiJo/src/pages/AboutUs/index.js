import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {Header, Gap} from '../../components';
import {Bitung} from '../../assets';


const AboutUs = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header title="Tentang Kami" onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textWrapper}>
          <Gap height={19} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Bitung />
          </View>
          <Gap height={35} />
          <Text style={styles.text}>
            Aplikasi KonsultasiJo merupakan salah satu perwujudan dari progam
            Bitung Kota Digital yang diselenggarakan oleh pemerintah kota
            Bitung. Aplikasi ini dapat menjembatani masyarakat Bitung dan Bagian
            Hukum Kota Bitung untuk melakukan konsultasi mengenai hukum yang
            dimana sebelumnya hanya dilakukan oleh kepala lingkungan setempat.
          </Text>
          <Gap height={20} />
          <Text style={styles.text}>
            Dikembangkan oleh :{'\n'} Septiano Tumulo {'\n'}Rivando Podaag{' '}
            {'\n'}Nariva Wagey
            {'\n'}Ester Sangkoy
          </Text>
          <Gap height={36} />
          <TouchableOpacity activeOpacity={0.7} onPress={()=>Linking.openURL('https://www.bitungkota.go.id/')}>
          <View style={styles.buttonWeb}>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                fontWeight: 'bold',
                paddingVertical: 2,
                paddingHorizontal:30,
              }}>
              Website Kota Bitung
            </Text>
          </View>
          </TouchableOpacity>
          <Gap height={32} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Poppins-Medium',
    lineHeight:23,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    
  },
  buttonWeb: {
    backgroundColor: '#CF3D3D',
    alignItems: 'center',
    borderRadius: 5,
  },
});
