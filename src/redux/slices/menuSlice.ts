import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMenu } from "../../api/menuApi";
import { Menu } from "./types";
import { RootState } from "../store";

interface MenuThunkConfig {
  state: RootState;
  // Add other config options if needed (e.g., extra, rejectValue)
}
const initialState: {
  data: Menu | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const getMenuAsync = createAsyncThunk<Menu, void, MenuThunkConfig>(
  "menu/getMenu",
  async () => {
    // _ is used to ignore the argument since there are none here
    const response = await fetchMenu();
    return response;
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenuAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMenuAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMenuAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch menu data";
      });
  },
});

export default menuSlice.reducer;
