import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../private/Home';


export default function privateRoute() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#fff',
        width: '60%',
      },
    }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
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
