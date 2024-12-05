import { createSlice } from "@reduxjs/toolkit";

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    value: null, // Initially no product data
  },
  reducers: {
    singleProductData: (state, action) => {
      state.value = action.payload; // Store the product data in the state
    },
  },
});

// Action creators are generated for each case reducer function
export const { singleProductData } = singleProductSlice.actions;

export default singleProductSlice.reducer;
