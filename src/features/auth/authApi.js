import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginWithGoogle: builder.mutation({
            query: (data) => ({
                url: "/api/users/auth",
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {

            },
        }),
    }),
});

export const { useLoginWithGoogleMutation } = authApi;