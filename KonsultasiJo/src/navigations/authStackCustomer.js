import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phukum,Statistik,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, Menu} from '../pages';

const Stack = createNativeStackNavigator();

const AuthCustomerStack = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthCustomerStack
