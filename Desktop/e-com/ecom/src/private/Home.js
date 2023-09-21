import {View, Text,Image} from 'react-native';
import React from 'react';
import { useSelector } from "react-redux"
import selectCurrentUser from '../feature/auth/authSlice'
const Home = () => {


  return (
    <View>
      <Image
          style={{width: 200, height: 80 ,alignSelf:'center'}}
          source={require('../assets/img/nike.png')}
        />
        {/* <Text>{welcome}</Text> */}
    </View>
  );
};

export default Home;
