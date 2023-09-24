import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken , refreshToken } = action.payload
            state.user = user
            state.token = accessToken
            AsyncStorage.setItem('authToken', accessToken);
            AsyncStorage.setItem('refreshToken', refreshToken);
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            AsyncStorage.removeItem('authToken');
            AsyncStorage.removeItem('refreshToken');
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
