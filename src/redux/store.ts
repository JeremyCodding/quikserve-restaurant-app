import {
  Action,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import venueReducer from "./slices/venueSlice.ts";
import menuReducer from "./slices/menuSlice.ts";

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    menu: menuReducer,
    // ...other reducers if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action> &
  ThunkAction<void, RootState, unknown, Action>;
