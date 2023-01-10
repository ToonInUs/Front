// import { apiSlice } from '~//apis/apiSlice'
import { apiSlice } from './apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/new',
                method: 'POST',
                body: { data },
            }),
        }),
        verifyMail: builder.query({
            query: ({ mail }) => `/new/mail/${mail}`,
            transformResponse: (responseData) => {
                console.log('verifyMail:', responseData)
            },
        }),
        verifyName: builder.query({
            query: ({ name }) => `/new/name/${name}`,
            transformResponse: (responseData) => {
                console.log('verifyName:', responseData)
            },
        }),
    }),
})

export const {
    useLoginMutation,
    useSignupMutation,
    useVerifyMailQuery,
    useVerifyNameQuery,
} = authApiSlice
