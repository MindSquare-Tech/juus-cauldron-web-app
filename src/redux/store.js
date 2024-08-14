import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "./isOpenSlice";

export const store = configureStore({
    reducer: isOpenReducer
})