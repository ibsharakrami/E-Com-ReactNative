import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const NavigationS = () => {

  return (
    <NavigationContainer  options={{headerShown: false}}>
      {/* {isLoggedIn ? <privateRoute /> : <publicRoute />} */}
      {/* <PublicRoute /> */}
      <PrivateRoute />
      {/* <PublicRoute /> */}
    </NavigationContainer>
  )
}

export default NavigationS;

const styles = StyleSheet.create({})
