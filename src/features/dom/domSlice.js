import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

const domSlice = createSlice({
    name: "dom",
    initialState,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true
        },
        hideLoader: (state) => {
            state.isLoading = false
        },
    },
});

export const { showLoader, hideLoader } = domSlice.actions;
export default domSlice.reducer;