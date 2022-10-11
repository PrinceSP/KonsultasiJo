import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, SignInOperator} from '../pages';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../configs/auth';

const Stack = createNativeStackNavigator();

const AuthOperatorStack = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
      <Stack.Screen name="SignInOperator" component={SignInOperator}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthOperatorStack
