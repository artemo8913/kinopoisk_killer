import { StateSchema } from "@/store";

export const selectCartModule = (state: StateSchema) => state.cart;
export const selectProductAmount = (state: StateSchema, id: string) => selectCartModule(state)[id] || 0;
export const selectAllProductAmount = (state: StateSchema) => {
  const cart = selectCartModule(state);
  let result = 0;
  for (const filmId in cart) {
    result += cart[filmId];
  }
  return result;
};
