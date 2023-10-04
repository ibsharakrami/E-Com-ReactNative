import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../feature/profile/profileSlice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Products = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  console.log('profile===>', users);
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#212A3E'}}>
     <FlatList
        data={users}

        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={({item}) => {
          console.log('itemss==>', item);

          return (
            <View
              style={{
                height: hp('18%'),
                width: wp('90%'),
                alignSelf: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
               marginLeft:15,
               marginTop:15,
               flexDirection:'row',


              }}>
              <Image source={require('../assets/img/heart.png')} style={{width: 25, height: 25, alignSelf: 'flex-end',position:'absolute',top:hp('1%'),right:wp('1%')}}/>
              <Image
                style={{width: 130, height: 140, alignSelf: 'center',marginLeft:wp('2%')}}
                source={{uri: item.image}}
                resizeMode="contain"
              />
              <View style={{flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '900',
                  marginLeft: wp('4%'),
                  fontFamily: 'Georgia',
                }}>
                {item.name}
              </Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('50%')}}>
              <Text
                style={{
                  color: '#FF6969',
                  fontSize: 16,
                  fontWeight: '900',
                  marginLeft: wp('4%'),
                  fontFamily: 'Georgia',
                }}>
               ₹ {item.amount}
              </Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Image source={require('../assets/img/star.png')} style={{width: 15, height: 15}}/>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '300',
                  marginLeft: wp('1%'),
                  fontFamily: 'Georgia',
                  marginRight:wp('2%')
                }}>
                {item.rating}
              </Text>

</View>

              </View>
              <View style={{flexDirection:'row',marginTop:hp('1%')}}>
              <Image source={require('../assets/img/discount.png')} style={{width: 20, height: 20,marginLeft:wp('4%') }}/>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '500',
                  marginLeft: wp('1%'),
                  fontFamily: 'Georgia',
                }}>
                {item.discount}
              </Text>
              </View>

              </View>



            </View>
          );
        }}
      />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})
