import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/book/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
