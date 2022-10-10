/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store'

const provider = () =>{
  return(
   <Provider store={store} >
    <App />
   </Provider>
  )
 }
AppRegistry.registerComponent(appName, () => provider);
