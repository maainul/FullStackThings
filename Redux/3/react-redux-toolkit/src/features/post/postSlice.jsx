import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("Posts/fetchPosts", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

const postSlice = createSlice({
  name: "Posts",
  initialState: {
    error: null,
    isLoading: false,
    posts: [],
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });

  },
});

export default postSlice.reducer;
