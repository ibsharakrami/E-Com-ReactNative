import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken } from '../feature/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NavigationS = () => {
  const navRef = useNavigationContainerRef();
  const token = useSelector(selectCurrentToken);
  console.log("tokenid===>",token)

  const dispatch = useDispatch();

  // Load token from AsyncStorage on component mount
  useEffect(() => {
    const loadTokenFromStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        if (storedToken) {
          // Dispatch the action to set the token in Redux
          dispatch({ type: 'auth/setCredentials', payload: { accessToken: storedToken } });
        }
      } catch (error) {
        // Handle AsyncStorage error (if needed)
        console.error('Error loading token from AsyncStorage:', error);
      }
    };

    loadTokenFromStorage();
  }, [dispatch]);
  // Handle token expiration and logout
  // useEffect(() => {
  //   const handleTokenExpiration = async () => {
  //     // Check if the token is expired (you'll need to implement this logic)
  //     const isTokenExpired = false; // Replace with actual logic

  //     if (isTokenExpired) {
  //       // Remove the expired token from AsyncStorage
  //       await AsyncStorage.removeItem('authToken');
  //       // Dispatch a logout action
  //       dispatch(logOut());
  //     }
  //   };

  //   handleTokenExpiration();
  // }, [dispatch]);

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
