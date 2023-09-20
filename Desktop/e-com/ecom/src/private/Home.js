import {View, Text,Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Image
          style={{width: 200, height: 80 ,alignSelf:'center'}}
          source={require('../assets/img/nike.png')}
        />
    </View>
  );
};

export default Home;
