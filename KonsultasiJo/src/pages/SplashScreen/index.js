import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {LambangKota,Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() =>{
        setTimeout(()=> {
<<<<<<< HEAD
            navigation.replace('SignIn'); 
=======
            navigation.replace('MenuOprator');
>>>>>>> 5e7e9d1078ac4074469d5a2d7d8778a6144a018d
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
