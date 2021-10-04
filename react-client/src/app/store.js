import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postSlice'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    ui: uiReducer
  },
});
