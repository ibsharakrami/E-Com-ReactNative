import {View, Text,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { logOut } from '../feature/auth/authSlice';
import { useGetUsersQuery, useGetproductssQuery } from '../feature/profile/profileSlice';
const Home = () => {
  const dispatch = useDispatch();


  const handleLogout = async () => {
    console.log("preesss")
    // Call the logout thunk action when the button is pressed
    try {
      console.log("preesss")
      await dispatch(logOut());
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetUsersQuery()
console.log("dattta===>",users);

  return (
    <View>
      <Image
          style={{width: 200, height: 80 ,alignSelf:'center'}}
          source={require('../assets/img/nike.png')}
        />
        <TouchableOpacity style={{width:100,height:30,borderRadius:50,backgroundColor:'#833737',justifyContent:'center'}} onPress={handleLogout}>
        <Text style={{color:'#fff',textAlign:'center',alignSelf:'center'}}> logOut</Text>

        </TouchableOpacity>
        {/* <Text>{welcome}</Text> */}
    </View>
  );
};

export default Home;
