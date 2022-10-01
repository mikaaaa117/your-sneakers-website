import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from './pagesSlice';
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    theme: themeReducer
  }
})