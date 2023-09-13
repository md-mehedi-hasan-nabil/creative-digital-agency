import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
        logout: (state) => {
            state.accessToken = undefined
            state.user = undefined
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;