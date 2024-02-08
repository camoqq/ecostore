import { createSlice } from "@reduxjs/toolkit";

export type cartItem = {
  id: string;
  product_title: string;
  price: number;
  qty: number;
};
type cartItems = {
  items: cartItem[];
};
const initialState: cartItems = {
  items: [],
};

export const prodSlice = createSlice({
  name: "prodName",
  initialState,
  reducers: {
    addToCart() {},
  },
});

export const { addToCart } = prodSlice.actions;
export default prodSlice.reducer;
