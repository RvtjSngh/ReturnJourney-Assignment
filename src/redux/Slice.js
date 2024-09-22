import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Mango" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Orange" },
    { id: 5, name: "Kiwi" },
    { id: 6, name: "Pineapple" },
    { id: 7, name: "Guava" },
    { id: 8, name: "Strawberry" },
    { id: 9, name: "Watermelon" },
    { id: 10, name: "Blueberry" },
  ],
  searchTerm: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = itemsSlice.actions;

export const selectFilteredItems = (state) => {
  const { items, searchTerm } = state.items;
  if (!searchTerm) return items;
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default itemsSlice.reducer;
