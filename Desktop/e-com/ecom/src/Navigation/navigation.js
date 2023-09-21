import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import {useSelector} from 'react-redux';
import { selectCurrentToken } from '../feature/auth/authSlice';
const NavigationS = () => {
  const navRef = useNavigationContainerRef();
  const token = useSelector(selectCurrentToken)
  console.log("tokenid===>",token)

  return (
    <NavigationContainer ref={navRef} options={{headerShown: false}}>
      {token ? <PrivateRoute /> : <PublicRoute />}
      {/* <PublicRoute /> */}
      {/* <PrivateRoute /> */}
      {/* <PublicRoute /> */}
    </NavigationContainer>
  )
}

export default NavigationS;

const styles = StyleSheet.create({})
