import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartSchema {
  [key: string]: number;
}

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
    reset: () => initialState,
  },
});
