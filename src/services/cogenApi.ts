import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cogenApi = createApi({
    reducerPath: 'cogenApi',
    tagTypes: [],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    endpoints: (builder) => ({
        getCogenData: builder.query({
            query: () => 'data'
        }),
        setCogenValue: builder.mutation({
            query: (body) =>({
                url: `data/number`,
                method: 'POST',
                body,
            })
        }),
        setCogenBool: builder.mutation({
            query: (body) => ({
                url: 'data/bool',
                method: 'POST',
                body
            })
        })
    })
})

export const {useGetCogenDataQuery, useSetCogenValueMutation, useSetCogenBoolMutation} = cogenApi