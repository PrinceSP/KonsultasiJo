import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phukum,Statistik,Kategori,SplashScreen, SignIn, SignUp, Profile, AboutUs, Maps, Menu,ChatClient,MenuOprator,ListChatClients,ChatOperator,} from '../pages';
import AuthStack from './authStackCustomer';

const Stack = createNativeStackNavigator();

const ClientOperatorStack = () => {

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
      <Stack.Screen name="ListChatClients" component={ListChatClients}options={{headerShown: false}}/>
      <Stack.Screen name="ChatOperator" component={ChatOperator}options={{headerShown: false}}/>
      <Stack.Screen name="MenuOprator" component={MenuOprator}options={{headerShown: false}}/>
      <Stack.Screen name="AuthStack" component={AuthStack}options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default ClientOperatorStack
