import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: 0
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        nextQuestion: (state) => {
            state.currentQuestion += 1;
        },
        prevQuestion: (state) => {
            state.currentQuestion -= 1;
        },
        setQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        resetQuestion: (state) => {
            state.currentQuestion = 0;
        }
    }
});

export const {
    nextQuestion,
    prevQuestion,
    setQuestion,
    resetQuestion
} = questionSlice.actions;

export default questionSlice.reducer;