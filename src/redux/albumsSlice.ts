import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type Album = {
  id: number;
  userId: number;
  title: string;
};

export const fetchAlbums = createAsyncThunk(
  "albums/fetchAlbums",
  async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    const data: Album[] = await response.json();
    return data;
  }
);

const initialState: Album[] = [];

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAlbums.fulfilled,
      (state, action: PayloadAction<Album[]>) => {
        return action.payload;
      }
    );
  },
});

export default albumsSlice.reducer;
