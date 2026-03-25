import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import questionReducer from "./questionSlice";

export const store = configureStore({
    reducer: {
        timer: timerReducer,
        question: questionReducer
    }
});