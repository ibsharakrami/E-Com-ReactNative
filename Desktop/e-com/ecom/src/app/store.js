import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import authReducer from '../feature/auth/authSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
      //   auth: (state, action) => {
      //     // Retrieve the access token from AsyncStorage
      //     const initialToken = AsyncStorage.getItem('authToken');
      //     if (initialToken) {
      //         // If a token is found, set it as the initial token
      //         state.token = initialToken;
      //     }
      //     // Delegate to the authReducer to handle other actions
      //     return authReducer(state, action);
      // },
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
export default Store;
