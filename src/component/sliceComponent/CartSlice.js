import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    totalOrder: 0,
    orders: []
  },

  reducers: {
    addToCart: (state, action) => {
      let orderIndex = state.orders.findIndex((x) => x.id == action.payload.id);      
      if (orderIndex >= 0) {
        state.orders[orderIndex].quantity = state.orders[orderIndex].quantity + 1;        
      }
      else {
        state.orders.push({
          ...action.payload,
          quantity: 1
        })
        
      }
     
    },
    updateToCart: (state, action) => {
      const index = state.findIndex((cart) => cart.id === action.payload.id);
      const updatedState = [...state];
      updatedState[index].text = action.payload.text;
    },

    deleteFromCart: (state, action) => {
      const index = state.orders.findIndex((cart) => cart.id === action.payload);
      if (index !== -1) {
        state.orders.splice(index, 1);
      }
      return {
        ...state,
        totalOrder: state.orders.reduce((quantity, item) => item.quantity * item.price + quantity, 0),
        orders: index
      };
    },
    deleteAllCart: (state, action) => {
      state.splice(0); //if you don't specify the end point of an array it will delete all the array starting from the given position.
    },
  },
});
export const { addToCart, updateToCart, deleteFromCart, deleteAllCart } = CartSlice.actions;
export default CartSlice.reducer;