import { configureStore } from '@reduxjs/toolkit';
import { reviewSlice } from './slice/reviewSlice';

// TODO: here I could have used zustand instead of redux as it is light weight and perfect for small projects
export const store = configureStore({
  reducer: {
    review: reviewSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
