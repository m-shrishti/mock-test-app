import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeLeft: 50 * 60, // 50 minutes in seconds
    isRunning: false,
};

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        tick: (state) => {
            if (state.timeLeft > 0) {
                state.timeLeft -= 1;
            }
        },
        resetTimer: (state) => {
            state.timeLeft = 50 * 60;
            state.isRunning = false;
        },
    },
});

export const { startTimer, stopTimer, tick, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;