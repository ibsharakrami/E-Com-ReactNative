import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import PublicRoute from './publicRoute';

const NavigationS = () => {

  return (
    <NavigationContainer  options={{headerShown: false}}>
      {/* {isLoggedIn ? <privateRoute /> : <publicRoute />} */}
      <PublicRoute />
      {/* <PublicRoute /> */}
    </NavigationContainer>
  )
}

export default NavigationS;

const styles = StyleSheet.create({})
