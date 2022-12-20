// import { apiSlice } from '~//apis/apiSlice'
import { apiSlice } from './apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        signup: builder.mutation({
            query: () => ({
                url: '/',
                method: 'POST',
                body: {},
            }),
        }),
    }),
})

export const { useLoginMutation, useSignupMutation } = authApiSlice
