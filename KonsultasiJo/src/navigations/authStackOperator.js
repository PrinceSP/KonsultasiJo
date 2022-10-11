import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignInOperator} from '../pages';
import OperatorStack from '../navigations/operatorStack';

const Stack = createNativeStackNavigator();

const AuthOperatorStack = () => {

  return (
    <Stack.Navigator initialRouteName="SignInOperator">
      <Stack.Screen name="SignInOperator" component={SignInOperator}options={{headerShown: false}}/>
      <Stack.Screen name="OperatorStack" component={OperatorStack}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthOperatorStack
