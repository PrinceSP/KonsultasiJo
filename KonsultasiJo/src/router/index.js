import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD

import { Phukum,Statistik,MenuOprator,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, ChatClient, ListChatClient, ChatOperator, Menu,SignInOperator} from '../pages';



=======
import { Phukum,Statistik,MenuOprator,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, ChatClient, ListChatClient, ChatOperator, Menu,SignInOpertor} from '../pages'
>>>>>>> 5e7e9d1078ac4074469d5a2d7d8778a6144a018d

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
<<<<<<< HEAD
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
        <Stack.Screen name="SignInOperator" component={SignInOperator}options={{headerShown: false}}/>



        



=======
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
      <Stack.Screen name="SignInOperator" component={SignInOpertor}options={{headerShown: false}}/>
>>>>>>> 5e7e9d1078ac4074469d5a2d7d8778a6144a018d
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
