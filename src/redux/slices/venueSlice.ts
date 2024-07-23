import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { fetchVenue } from "../../api/venueApi.ts";
import { Venue } from "./types.ts"; // Assuming you have types defined in a separate file
import { RootState } from "../store.ts";

const initialState: {
  data: Venue | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export interface VenueThunkConfig {
  state: RootState; // You might want to access other parts of your state
  // Add other config options if needed (e.g., extra, rejectValue)
}
export const getVenueAsync: AsyncThunk<Venue, string, VenueThunkConfig> =
  createAsyncThunk("venue/getVenue", async (venueId: string) => {
    const response = await fetchVenue(venueId);
    return response;
  });

export const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVenueAsync.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(getVenueAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getVenueAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch venue data";
      });
  },
});

export default venueSlice.reducer;
