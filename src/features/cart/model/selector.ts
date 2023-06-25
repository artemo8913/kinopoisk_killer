import { StateSchema } from "@/store";

export const selectCartModule = (state: StateSchema) => state.cart;
export const selectProductAmount = (state: StateSchema, id: string) => selectCartModule(state)[id] || 0;
