import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {LambangKota,Logo} from '../../assets';
import { useSelector } from 'react-redux';

const SplashScreen = ({navigation}) => {
  const { userData } = useSelector(state => state.User);

    useEffect(() =>{
        setTimeout(()=> {
            navigation.replace(userData !== null && userData.role == 'customer' ? 'Menu' : 'MenuOprator');
        }, 1000);
    },[]);

    return (
    <View style={styles.page}>
     <LambangKota />
     <Text style={styles.konsultasijo}>KonsultasiJo</Text>
    </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    konsultasijo: {
        fontSize: 36,
        color: '#000',
        fontWeight: 'bold',
    }

});
