import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phukum,Statistik,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, Menu} from '../pages';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../configs/auth';
import { setUser } from '../redux/reducer/user';

const Stack = createNativeStackNavigator();

const AuthCustomerStack = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
      <Stack.Screen name="SignIn" component={SignIn}options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthCustomerStack
