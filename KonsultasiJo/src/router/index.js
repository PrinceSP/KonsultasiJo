import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phukum, SignIn,SignUp} from '../pages';
import Menu from '../pages/Menu';
import Statistik from '../pages/Statistik';
import MenuOprator from '../pages/MenuOprator';
import Kategori from '../pages/Kategori';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp}options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu}options={{headerShown: false}}/>
        <Stack.Screen name="Phukum" component={Phukum}options={{headerShown: false}}/>
        <Stack.Screen name="Statistik" component={Statistik}options={{headerShown: false}}/>
        <Stack.Screen name="MenuOprator" component={MenuOprator}options={{headerShown: false}}/>
        <Stack.Screen name="Kategori" component={Kategori}options={{headerShown: false}}/>


        


    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})