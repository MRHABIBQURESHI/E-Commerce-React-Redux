import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Slices/CardSlice'
import productReducer from './Slices/ProductSlice'
 
export const store = configureStore({
  reducer: {   
    cart : CartReducer,
    product : productReducer
  },
})