import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Phukum,Statistik,MenuOprator,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, ChatClient, ListChatClient, ChatOperator,Menu} from '../pages';




const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn}options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp}options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile}options={{headerShown: false}}/>
        <Stack.Screen name="AboutUs" component={AboutUs}options={{headerShown: false}}/>
        <Stack.Screen name="Maps" component={Maps}options={{headerShown: false}}/>
        <Stack.Screen name="ChatClient" component={ChatClient}options={{headerShown: false}}/>
        <Stack.Screen name="ListChatClient" component={ListChatClient}options={{headerShown: false}}/>
        <Stack.Screen name="ChatOperator" component={ChatOperator}options={{headerShown: false}}/>
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