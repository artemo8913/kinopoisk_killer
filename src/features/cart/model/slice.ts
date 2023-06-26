import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartSchema } from "./schema";

const initialState: CartSchema = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const count = state[id] || 0;
      state[id] = count + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const count = state[id];
      if (!count) {
        return;
      }
      if (count <= 1) {
        delete state[id];
        return;
      }

      state[id] = count - 1;
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const count = state[id];
      if (!count) {
        return;
      }
      delete state[id];
    },
    reset: () => initialState,
  },
});
