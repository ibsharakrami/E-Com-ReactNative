import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../private/Home';

import Profile from '../private/Profile';
import Products from '../private/Products';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function PrivateRoute() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle :{
        position :'absolute',
        bottom:25,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:'#fff',
        borderRadius:45,
        height:70,
        ...styles.shadow
      }
    }} >
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon :({focused})=>(
      <View>
        <Image source={require('../assets/icon/home1.png')} style={{width:30,height:30 ,tintColor : focused ? "#FF6969" : "#394867"}}/>
      </View>
        ),
      }} />
      <Tab.Screen name="Products" component={Products} options={{
        tabBarIcon :({focused})=>(
      <View>
        <Image source={require('../assets/icon/list.png')} style={{width:30,height:30 ,tintColor : focused ? "#FF6969" : "#394867"}}/>
      </View>
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
        tabBarIcon :({focused})=>(
      <View>
        <Image source={require('../assets/icon/user1.png')} style={{width:30,height:30 ,tintColor : focused ? "#FF6969" : "#394867"}}/>
      </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  shadow :{
    shadowColor :'#FFf',
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,
    shadowOffset :{
      width :0,
      height:10,
    }
  }
})

// export default function PrivateRoute() {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: '#fff',
//         width: '60%',
//       },
//     }}
//     initialRouteName="Home">
//     <Stack.Screen name="Home" component={Home} />
//     {/* <Stack.Screen
//       name="Settings"
//       component={Settings}
//       options={{
//         headerBackImage: () => (
//           <IconG name="chevron-left" color={COLORS.black} size={26} />
//         ),
//         headerTitle: 'Settings',
//         headerTitleAlign: 'center',
//         headerTintColor: COLORS.black,
//         headerShown: true,

//         headerStyle: {
//           backgroundColor: COLORS.white,
//         },
//         headerTitleStyle: {
//           fontFamily: 'Poppins-SemiBold',
//           fontSize: windowWidth * 0.04,
//         },
//       }}
//     /> */}

//   </Stack.Navigator>
//   )
// }
