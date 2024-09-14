import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 items : []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   addProduct : (state  , action) => {
   state.items.push({
    id : action.payload.id,
    name : action.payload.name,
    price : action.payload.price,
    originalPrice : action.payload.price,
    image : action.payload.image,
    quantity : 1,
    // totalPrice : action.payload.price,
})},

increment : (state , action) => {
    const product = state.items.find((item) => item.id === action.payload);
    if(product){
        product.quantity += 1;
        product.price = product.originalPrice * product.quantity;
    }},

decrement : (state , action) => {
    const product = state.items.find((item) => item.id === action.payload);
    if(product && product.quantity > 1){
        product.quantity -= 1;
        product.price = product.price - product.originalPrice;
    }
},


removeproduct : (state  , action) => {
    state.items = state.items.filter((item) => item.id !== action.payload)
}

  },
})
export const { addProduct , increment , decrement , removeproduct } = productSlice.actions

export default productSlice.reducer