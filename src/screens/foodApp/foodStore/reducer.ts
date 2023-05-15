import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface CartItem {
  id: string;
  name: string;
  count: number;
  amount: number;
}

export interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "foodApp",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newFood = action.payload;
      const addedFood = state.items?.find((data) => data.id === newFood.id);
      if (addedFood) {
        addedFood.count += newFood.count;
      } else {
        state.items.push(newFood);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const removedFoodId = action.payload;
      state.items = state.items?.filter((item) => item.id !== removedFoodId);
    },
    updateItemCount: (
      state,
      action: PayloadAction<{ id: string; count: number }>
    ) => {
      const updatedFood = state.items?.find(
        (data) => data.id === action.payload.id
      );
      if (updatedFood) updatedFood.count = action.payload.count;
    },
  },
});

export const { addItem, removeItem ,updateItemCount} = cartSlice.actions;
export default cartSlice.reducer;
