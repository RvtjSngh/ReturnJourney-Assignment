import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./Slice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
