import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../configs/auth';
import { setUser } from '../redux/reducer/user';
import ClientOperatorStack from '../navigations/customerStack';
import AuthStack from '../navigations/authStackCustomer';
const Stack = createNativeStackNavigator();

const Router = () => {
  const dispatch = useDispatch();

  const { userData, login } = useSelector(state => state.User);

  const [loginChk, setloginChk] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
     let data = await Auth.getAccount();
     if (data != null) {
        dispatch(setUser(data));
        setloginChk(false)
     }else{
        setloginChk(false)
     }
  }

  if (loginChk) {
    return null;
  }
  // console.log(userData);
  return (
    <Stack.Navigator detachInactiveScreens={false} headerMode="none">

      {!login ?
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}}/>
        :
        <Stack.Screen name="ClientOperatorStack" component={ClientOperatorStack} options={{headerShown: false}}/>
      }

    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
