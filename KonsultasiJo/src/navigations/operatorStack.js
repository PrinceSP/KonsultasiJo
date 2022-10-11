import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phukum,Statistik,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, Menu} from '../pages';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../configs/auth';
import { setUser } from '../redux/reducer/user';

const Stack = createNativeStackNavigator();

const OperatorStack = () => {

  return (
    <Stack.Navigator initialRouteName="MenuOprator" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
      <Stack.Screen name="ChatClient" component={ChatClient}options={{headerShown: false}}/>
      <Stack.Screen name="ListChatClient" component={ListChatClient}options={{headerShown: false}}/>
      <Stack.Screen name="ChatOperator" component={ChatOperator}options={{headerShown: false}}/>
      <Stack.Screen name="MenuOprator" component={MenuOprator}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default OperatorStack
