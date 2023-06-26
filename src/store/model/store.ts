import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, CartSchema } from "@/features/cart";
import { filmApi, FilmSchema } from "@/features/film";
import { reviewsApi, ReviewSchema } from "@/features/review";
import { CinemaSchema, cinemaApi } from "@/features/cinema";

export interface StateSchema {
  cart: CartSchema;
  [filmApi.reducerPath]: FilmSchema;
  [reviewsApi.reducerPath]: ReviewSchema;
  [cinemaApi.reducerPath]: CinemaSchema;
}

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [filmApi.reducerPath]: filmApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([filmApi.middleware, reviewsApi.middleware, cinemaApi.middleware]),
});
