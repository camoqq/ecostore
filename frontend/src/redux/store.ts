import { configureStore } from "@reduxjs/toolkit";
import { prodSlice } from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: prodSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
