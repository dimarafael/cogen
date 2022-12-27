import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cogenApi = createApi({
    reducerPath: 'cogenApi',
    tagTypes: [],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        getCogenData: builder.query({
            query: () => 'api/data'
        }),
        setCogenValue: builder.mutation({
            query: (body) =>({
                url: `api/data/${body.tag}`,
                method: 'POST',
                body: {value: body.value},
            })
        })
    })
})

export const {useGetCogenDataQuery, useSetCogenValueMutation} = cogenApi