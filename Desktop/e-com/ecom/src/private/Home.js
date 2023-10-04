import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../feature/auth/authSlice';
import {
  useGetUsersQuery,
  useGetproductssQuery,
} from '../feature/profile/profileSlice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';
import {useLoginMutation} from '../feature/auth/authApiSlice';
import {url} from 'inspector';
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state.auth.user;
  });
  console.log('userrrrr===>', user);

  const handleLogout = async () => {
    console.log('preesss');
    // Call the logout thunk action when the button is pressed
    try {
      console.log('preesss');
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
    error,
  } = useGetUsersQuery();
  const {data: auth} = useLoginMutation();
  console.log('dattta===>', users);
  console.log('logins===>', auth);

  return (
    <View
      style={{
        backgroundColor: '#212A3E',
        width: wp('100%'),
        height: hp('100%'),
      }}>
      <View
        style={{
          height: hp('7%'),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image
          style={{
            width: 60,
            height: 30,
            alignSelf: 'center',
            tintColor: '#fff',
            marginLeft: wp('4%'),
          }}
          source={require('../assets/img/nike.png')}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                marginRight: wp('2%'),
              }}
              source={require('../assets/icon/bag.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                marginRight: wp('2%'),
              }}
              source={require('../assets/icon/logout.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: hp('30%'), marginTop: hp('1.5%')}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: '900',
            marginLeft: wp('4%'),
            fontFamily: 'sans-serif',
          }}>
          Hello, {user}
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            fontWeight: '300',
            marginLeft: wp('4%'),
            fontFamily: 'Georgia',
          }}>
          Let's Start Shopping...
        </Text>
        <Image
          source={require('../assets/img/post.jpg')}
          style={{
            width: wp('92%'),
            height: hp('22%'),
            alignSelf: 'center',
            marginTop: hp('2%'),
            borderRadius: 5,
          }}
        />
      </View>
      <Text
        style={{
          color: '#fff',
          fontSize: 22,
          fontWeight: '900',
          marginLeft: wp('4%'),
          fontFamily: 'sans-serif',
          marginTop: hp('4%'),
        }}>
        Popular Product
      </Text>
      <FlatList
        data={users}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={({item}) => {
          console.log('itemss==>', item);

          return (
            <View
              style={{
                height: hp('27%'),
                width: wp('50%'),
                alignSelf: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
               marginLeft:15,
               marginTop:hp('-15%')
              }}>
              <Image source={require('../assets/img/heart.png')} style={{width: 25, height: 25, alignSelf: 'flex-end',position:'absolute',top:hp('1%'),right:wp('1%')}}/>
              <Image
                style={{width: 130, height: 140, alignSelf: 'center'}}
                source={{uri: item.image}}
                resizeMode="contain"
              />
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
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
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

            </View>
          );
        }}
      />
      {/* <Text>{welcome}</Text> */}
    </View>
  );
};

export default Home;
