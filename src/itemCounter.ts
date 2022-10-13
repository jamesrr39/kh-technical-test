import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./domain/Item";

export interface ItemsSliceState {
  items: Item[];
}

const initialState: ItemsSliceState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const newArray = state.items.concat([]);
      newArray.push(action.payload);

      return { items: newArray };
    },
    clear: (state) => ({ items: [] }),
  },
});

// Action creators are generated for each case reducer function
export const { addItem, clear } = itemsSlice.actions;

export default itemsSlice.reducer;
