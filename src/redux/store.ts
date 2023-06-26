import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import usersReducer, { UsersState } from "./userSlice";
import postsReducer, { Post } from "./postsSlice";
import albumsReducer, { Album } from "./albumsSlice";

export interface RootState {
  users: UsersState;
  posts: Post[];
  albums: Album[];
}

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
