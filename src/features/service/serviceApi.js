import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => ({
                url: "/services",
            })
        }),
        addService: builder.mutation({
            query: (data) => ({
                url: "/services",
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                console.log(arg)
            },
        }),
        updateService: builder.mutation({
            query: (data) => ({
                url: `/services/${data?._id}`,
                method: 'PATCH',
                body: data.body,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                console.log(arg)
            },
        })
    }),
});

export const { useGetServicesQuery, useAddServiceMutation, useUpdateServiceMutation } = authApi;