import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import login from '../public/login';
import register from '../public/register';
import login1 from '../public/login1';


export default function PublicRoute() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
       }}
    initialRouteName="Login">
    <Stack.Screen name="Login" component={login} />
    <Stack.Screen name="Login1" component={login1} />
    <Stack.Screen name="Signup" component={register} />
    {/* <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerBackImage: () => (
          <IconG name="chevron-left" color={COLORS.black} size={26} />
        ),
        headerTitle: 'Settings',
        headerTitleAlign: 'center',
        headerTintColor: COLORS.black,
        headerShown: true,

        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
          fontSize: windowWidth * 0.04,
        },
      }}
    /> */}


  </Stack.Navigator>
  )
}
