import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, ChatClient, MenuOprator,ListChatClient,ChatOperator} from '../pages';
import AuthOperatorStack from '../navigations/authStackOperator';

const Stack = createNativeStackNavigator();

const OperatorStack = () => {

  return (
    <Stack.Navigator initialRouteName="MenuOprator" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
      <Stack.Screen name="ChatClient" component={ChatClient}options={{headerShown: false}}/>
      <Stack.Screen name="ListChatClient" component={ListChatClient}options={{headerShown: false}}/>
      <Stack.Screen name="ChatOperator" component={ChatOperator}options={{headerShown: false}}/>
      <Stack.Screen name="MenuOprator" component={MenuOprator}options={{headerShown: false}}/>
      <Stack.Screen name="AuthOperatorStack" component={AuthOperatorStack}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default OperatorStack
