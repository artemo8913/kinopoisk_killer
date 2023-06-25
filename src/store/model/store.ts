import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, CartSchema } from "@/features/cart";
import { filmApi, FilmSchema } from "@/features/film";
import { reviewsApi, ReviewSchema } from "@/features/review";

export interface StateSchema {
  cart: CartSchema;
  [filmApi.reducerPath]: FilmSchema;
  [reviewsApi.reducerPath]: ReviewSchema;
}

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [filmApi.reducerPath]: filmApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([filmApi.middleware, reviewsApi.middleware]),
});
