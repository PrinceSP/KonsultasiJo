import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Router from './router';


const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Router/>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
