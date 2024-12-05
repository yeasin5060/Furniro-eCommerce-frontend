import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const furniroeCom = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
       baseUrl : import.meta.env.React_Api_BaseUrl
    }),
    endpoints : (builder) => ({
        singleproduct : builder.mutation({
            query : (item) => ({
                url: "/shop",
                method: "POST", // Specify the HTTP method
                headers: {
                "Content-Type": "application/json", // Optional: depends on your backend
                },
                body: item, // Include the payload
            })
        })
    })
})

export const {useSingleproductMutation} = furniroeCom