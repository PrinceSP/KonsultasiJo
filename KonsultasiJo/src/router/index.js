import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn,SignUp} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})