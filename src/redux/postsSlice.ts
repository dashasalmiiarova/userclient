import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data: Post[] = await response.json();
    return data;
  }
);

const initialState: Post[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        return action.payload;
      }
    );
  },
});

export default postsSlice.reducer;
