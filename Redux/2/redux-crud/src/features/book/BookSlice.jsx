import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "I love BD", author: "Anisul Islam" },
    { id: 2, title: "I Like USA", author: "Mainul Islam" },
    { id: 3, title: "Book is Bokk", author: "Sobuj" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addbook: (state, action) => {
      state.books.push(action.payload);
    },
    deletebook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updatebook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addbook, deletebook, updatebook } = bookSlice.actions;

export default bookSlice.reducer;
