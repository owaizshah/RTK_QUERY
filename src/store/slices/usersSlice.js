import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunk/fetchUser";
import { addUser } from "../thunk/addUser";
import { removeUser } from "../thunk/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }),
      builder.addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      }),
      builder.addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      }),
      builder.addCase(addUser.rejected, (state, action) => {
        state.error = action.error;
      }),
      builder.addCase(removeUser.pending, (state, action) => {
        state.isLoading = true;
      });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export const userReducer = usersSlice.reducer;
