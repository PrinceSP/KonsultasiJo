import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() =>{
        setTimeout(()=> {
            navigation.replace('ChatOperator');
        }, 1000);
    },[]);

    return (
    <View style={styles.page}>
        <Logo />
        <Text style={styles.konsultasijo}>KonsultasiJo</Text>
    </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#06659A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    konsultasijo: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold',
    }

});