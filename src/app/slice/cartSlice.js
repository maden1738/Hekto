import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    setCart: (state) => {
      state.value += 1;
    },
    addToCart: (state, action) => {
      let product = action.payload;
      let temp = [...state.value];
      let alreadyPresent = false;
      temp.forEach((el, index) => {
        if (el._id === product._id) {
          temp[index] = { ...el, quantity: el.quantity + 1 };
          alreadyPresent = true;
        }
      });
      if (!alreadyPresent) {
        let newProduct = { _id: product._id, name: product.name, quantity: 1 };
        temp.push(newProduct);
      }
      state.value = temp;
    },
    increment: (state, action) => {
      let product = action.payload;
      let temp = [...state.value];
      temp.forEach((el, index) => {
        if (el._id === product._id) {
          temp[index] = { ...el, quantity: el.quantity + 1 };
        }
      });
      state.value = temp;
    },
    decrement: (state, action) => {
      let product = action.payload;
      let temp = [...state.value];
      temp.forEach((el, index) => {
        if (el._id === product._id) {
          temp[index] = { ...el, quantity: el.quantity - 1 };
          if (temp[index].quantity == 0) {
            temp.splice(index, 1);
          }
        }
      });

      state.value = temp;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
