import { configureStore } from "@reduxjs/toolkit";
import functionalitiesReducer from './features/functionalities/functionalitiesSlice';

export const store = configureStore({
  reducer: {
    functionalities: functionalitiesReducer
  }
})