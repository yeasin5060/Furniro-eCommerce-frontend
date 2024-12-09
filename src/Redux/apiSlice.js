import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const furniroeCom = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
       baseUrl : import.meta.env.VITE_API_URL
    }),
    endpoints : (builder) => ({
        register : builder.mutation({
            query : (data) => ({
                url: "/users/register",
                method: "POST", // Specify the HTTP method
                headers: {
                "Content-Type": "application/json", // Optional: depends on your backend
                },
                body: data, // Include the payload
            })
        }),
        resendMail : builder.mutation({
            query : (data) => ({
                url : "/users/resendmail",
                method : "POST",
                body : data
            })
        })
    })
})

export const {useRegisterMutation,useResendMailMutation} = furniroeCom