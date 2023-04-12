import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/auth.slice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>;