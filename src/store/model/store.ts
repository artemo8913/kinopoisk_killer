import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, CartSchema } from "@/features/cart";
import { filmApi, FilmSchema } from "@/features/film";

export interface StateSchema {
  cart: CartSchema;
  [filmApi.reducerPath]: FilmSchema;
}

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [filmApi.reducerPath]: filmApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([filmApi.middleware]),
});
