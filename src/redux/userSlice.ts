import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";

export interface User {
  id: number;
  name: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zip: string;
  };
  website: string;
  company: {
    name: string;
  };
  email: string;
}

export interface UsersState {
  users: User[];
  selectedUser: number;
}

const initialState: UsersState = {
  users: [],
  selectedUser: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    selectUser: (state, action: PayloadAction<number>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setUsers, selectUser } = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    dispatch(setUsers(users));
  } catch (error) {
    console.log("Error fetching users:", error);
  }
};
