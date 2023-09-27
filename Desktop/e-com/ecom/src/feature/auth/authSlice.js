import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
      setCredentials: (state, action) => {
          const { user, accessToken, refreshToken } = action.payload;
          state.user = user;
          state.token = accessToken;
          console.log("refff==>",refreshToken)
          // Check if refreshToken is valid before saving
          // if (refreshToken) {
            AsyncStorage.setItem('authToken', accessToken);
            AsyncStorage.setItem('refreshToken', refreshToken);
          // }
      },
      logOut: (state, action) => {
          state.user = null;
          state.token = null;

          // Remove tokens from AsyncStorage
          AsyncStorage.removeItem('authToken');
          AsyncStorage.removeItem('refreshToken');
      }
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
// export const logOut = createAsyncThunk(
//   'auth/logout',
//   async (_, { dispatch }) => {
//     // Remove tokens from AsyncStorage
//     try {
//       await AsyncStorage.removeItem('authToken');
//       await AsyncStorage.removeItem('refreshToken');
//     } catch (error) {
//       console.error('Error removing tokens from AsyncStorage:', error);
//     }

//     // You can add additional logic here to clear user data or perform other actions

//     // Note: If your server logs the user out when visiting a URL,
//     // you can trigger that action here (e.g., make a request to the logout URL).
//     try {
//       // Assuming visiting the URL logs the user out on the server
//       await fetch('https://e-com-auof.onrender.com/logout', {
//         method: 'GET', // or 'POST' depending on your server's requirements
//       });
//     } catch (error) {
//       console.error('Error logging out on the server:', error);
//     }
//   }
// );
