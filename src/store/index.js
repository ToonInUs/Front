import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '~/store/apis/apiSlice'
import authReducer from '~/store/slices/authSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})
