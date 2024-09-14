import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 items : []
}

export const CardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addtocart : (state  , action) => {
state.items.push(action.payload)
   }
  },
})
export const { addtocart } = CardSlice.actions

export default CardSlice.reducer