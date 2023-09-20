import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const run = require('../assets/img/run5.jpg');
const run1 = require('../assets/img/run1.jpg');
const run2 = require('../assets/img/run2.jpg');
const run3 = require('../assets/img/run3.jpg');
const run4 = require('../assets/img/run4.jpg');
const nike = require('../assets/img/nike.png');

const Login = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#B9B4C7', '#fff', '#F0F0F0']} style={styles.linearGradient}>
    <View style={styles.container}>
      <Image style={styles.rotatedView1} source={run3} resizeMode='cover' />
      {/* <View style={styles.rotatedView}>
  <Image
    style={styles.image}
    source={require('../assets/img/run1.jpg')}
    resizeMode='cover'
  />
</View> */}

      <Image style={styles.rotatedView} source={run4} resizeMode='cover' />
      <Image style={styles.rotatedView2} source={run} resizeMode='cover'/>
      <View style={{top:hp('-43%'),justifyContent:'flex-start',alignItems:'flex-start'}}>
      <Image style={{height:28,width:45,left:25}} source={nike} resizeMode='cover'/>
      <Text style={{fontSize:35,fontWeight:'bold',color:'#000',left:25,fontStyle:'normal'}}>Step</Text>
      <Text style={{fontSize:35,fontWeight:'bold',color:'#000',left:25}}>Into Style</Text>
      </View>


    </View>
    <TouchableOpacity style={{width:wp('90%'),height:hp('7%'),alignSelf:'center',backgroundColor:'#000',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={()=>{navigation.navigate('Login1')}}>
    <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>TAKE THE FIRST STEP</Text>
      </TouchableOpacity>

  </LinearGradient>
  )
}

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

  },
  container: {
    flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor:'red',
    height:hp('88%')
  },
  rotatedView: {
    // margin: 20,
    borderRadius: 45,
    top:hp('-20%'),
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden',
    backgroundColor: 'red',
    width: 320,
    height: 320,
    right:wp('30%'),
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{ rotate: '-45deg' }], // Counter-rotate the image to cancel out the container's rotation
  },
  rotatedView1: {
    // margin: 20,
    top:hp('-8%'),

    left:wp('50%'),

    borderRadius: 45,
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden',
    backgroundColor: 'red',
    width: 300,
    height: 300,
  },
  rotatedView2: {
    // margin: 20,
    top:hp('-33%'),

    left:wp('50%'),

    borderRadius: 45,
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden',
    backgroundColor: 'red',
    width: 240,
    height: 240,
  },
})
