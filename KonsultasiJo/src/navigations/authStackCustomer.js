import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn,SignInOperator, SignUp, ForgotPassword} from '../pages';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
      <Stack.Screen name="SignInOperator" component={SignInOperator}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthStack
