import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, ChatClient, MenuOprator,ListChatClients,ChatOperator,Statistik} from '../pages';
import AuthOperatorStack from './authStackOperator';

const Stack = createNativeStackNavigator();

const OperatorStack = () => {

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
      <Stack.Screen name="ChatClient" component={ChatClient}options={{headerShown: false}}/>
      <Stack.Screen name="ListChatClients" component={ListChatClients}options={{headerShown: false}}/>
      <Stack.Screen name="ChatOperator" component={ChatOperator}options={{headerShown: false}}/>
      <Stack.Screen name="MenuOprator" component={MenuOprator}options={{headerShown: false}}/>
      <Stack.Screen name="Statistik" component={Statistik}options={{headerShown: false}}/>
      <Stack.Screen name="AuthOperatorStack" component={AuthOperatorStack}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default OperatorStack
