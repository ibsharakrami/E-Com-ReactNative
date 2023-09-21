import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState ,useRef} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { setCredentials } from '../feature/auth/authSlice'
import { useLoginMutation } from  '../feature/auth/authApiSlice'
const Login1 = () => {
  const navigation = useNavigation();
  const [name , setName] = useState('');
  const [password , setPassword] = useState('');
  const userRef = useRef();
  const pwdRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser('');
      setPwd('');
      // Use the appropriate screen name from your navigation stack
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };
  return (
    <LinearGradient colors={['#B9B4C7', '#fff', '#F0F0F0']} style={styles.linearGradient}>
     <View style={{justifyContent:"center",alignItems:'center',height:hp('30%')}}>
      <Image style={{width:200,height:80}} source={require('../assets/img/nike.png')} />
      <Text style={{fontSize:44,fontWeight:'bold',color:'#000',fontFamily: 'sans-serif'}}>NIKE</Text>

     </View>
     <View style={{height:hp('70%')}}>
     <Text style={{fontSize:44,fontWeight:'bold',color:'#445069',fontFamily: 'sans-serif',marginLeft:wp('5%')}}>Login</Text>
     <View style={{}}>
     {/* <Text style={{fontSize:16,fontWeight:'bold',color:'#000',fontFamily: 'sans-serif',marginTop:hp('2%'),marginLeft:wp('10%')}}>Name</Text> */}
       <TextInput
       placeholder="Username"
       placeholderTextColor='#445069'
       ref={userRef}
        value={user}
        onChangeText={setUser}
        onSubmitEditing={() => pwdRef.current.focus()}
        style={{width:wp('90%'),height:hp('6%'),borderColor:'#445069',borderRadius:10,alignSelf:'center',paddingLeft:wp('5%'),marginTop:hp('2%'),borderWidth:1,fontSize:16}}

        />
         <TextInput
       placeholder="Password"
       placeholderTextColor='#445069'
       ref={pwdRef}
        value={pwd}
        onChangeText={setPwd}
        style={{width:wp('90%'),height:hp('6%'),borderColor:'#445069',borderRadius:10,alignSelf:'center',paddingLeft:wp('5%'),marginTop:hp('2%'),borderWidth:1,fontSize:16}}

        />

        <Text style={{fontSize:16,fontWeight:'900',color:'#445069',alignSelf:'flex-end',marginRight:wp('5%'),marginTop:hp('2%')}}>Forget Password?</Text>
        <TouchableOpacity style={{backgroundColor:'#445069',width:wp('90%'),height:hp('7%'),borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:hp('4%'),alignSelf:'center'}} onPress={handleSubmit}>
        <Text style={{fontSize:18,fontWeight:'900',color:'#fff'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
        <Text style={{fontSize:14,fontWeight:'900',color:'#000',alignSelf:'center',marginTop:hp('10%')}}>Dont Have An Account? <Text style={{color:'#445069'}}>Sign up</Text></Text>
        </TouchableOpacity>
     </View>

     </View>



    </LinearGradient>

  )
}

export default Login1;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

  },
})
