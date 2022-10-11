import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phukum,Statistik,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, Menu,ChatClient} from '../pages';

const Stack = createNativeStackNavigator();

const CustomerStack = () => {

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
      <Stack.Screen name="Profile" component={Profile}options={{headerShown: false}}/>
      <Stack.Screen name="AboutUs" component={AboutUs}options={{headerShown: false}}/>
      <Stack.Screen name="Maps" component={Maps}options={{headerShown: false}}/>
      <Stack.Screen name="Phukum" component={Phukum}options={{headerShown: false}}/>
      <Stack.Screen name="Kategori" component={Kategori}options={{headerShown: false}}/>
      <Stack.Screen name="Statistik" component={Statistik} options={{headerShown: false}}/>
      <Stack.Screen name="ChatClient" component={ChatClient} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default CustomerStack
